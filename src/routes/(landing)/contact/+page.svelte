<script lang="ts">
  import { page } from "$app/stores";
  import { Toast } from "$lib/project";
  import * as apiService from "$lib/services/api.service";
  import {
    Button,
    InputText,
    Typography,
    TextArea,
    InputNumber,
  } from "$lib/ui";

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let name: string;
  let email: string;
  let company: string;
  let budget: number;
  let comment: string;
  let error = false;
  let negotiationStatus = false;
  let showToast: boolean | undefined = undefined;
  let query = new URL($page.url.href.toString()).searchParams
    .get("plans")
    ?.split(",")
    .join(", ");
  $: if (email) error = !emailRegex.test(email);
</script>

<main class="sales">
  <Typography type="cardTitle">Contact Sales</Typography>
  <form>
    <InputText
      bind:value={name}
      variant="text"
      placeholder="Please enter your name"
    />
    <br />
    <br />
    <InputText
      bind:value={email}
      variant="email"
      placeholder="Please enter your email"
    />
    <p class="error-msg" class:show={error}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{error ? "Please enter a valid email address" : ""}</Typography
      >
    </p>
    <br />
    <InputText
      bind:value={company}
      variant="text"
      placeholder="Please enter company name"
    />
    <br />
    <br />
    <InputNumber
      bind:value={budget}
      placeholder="Please enter the budget for your project"
    />
    <br />
    <br />
    {#if query}
      <InputText
        value={query === "all"
          ? "Your have chosen the custom plan"
          : "Your chosen plans are: " +
            query.replace(/(.*)\s+(\S+)/, "$1 and $2")}
        variant="text"
        placeholder="Please enter plans for your project"
        readonly={true}
      />
      <br />
      <br />{/if}

    <div class="optional">
      <input
        class="negotiation"
        type="checkbox"
        name="Open for Negotiation"
        id="checkbox"
        bind:checked={negotiationStatus}
      />
      <label for="checkbox"
        ><Typography type="subtext" _fontweight="400"
          >Are you Open to Negotiation ?</Typography
        ></label
      >
    </div>
    <br />
    <TextArea
      bind:value={comment}
      placeholder="Please write the exact requirements needed for your project."
    />
    <br /><br />
    <Button
      type="primary"
      buttonLabel="Send a message"
      onClick={() => {
        showToast = !!apiService.createNewContact({
          name: name,
          email: email,
          companyName: company,
          remarks: comment,
          amount: budget.toString(),
          isNegotiable: negotiationStatus,
          plans: query,
        });
      }}
    />
  </form>
  <Toast
    showToast={showToast && !(showToast = undefined)}
    visibleTime={3000}
    variant="success"
    content={{
      heading: "Success",
      description: "Your query have been sent successfully",
    }}
  />
</main>

<style lang="scss">
  main {
    display: grid;
    place-items: center;
    & > form {
      inline-size: 90vw;
      max-inline-size: 600px;
      margin-inline: auto;
      margin-block-start: 2rem;
      & > .error-msg {
        block-size: 5px;
        margin-block-start: 5px;
        margin-inline-start: 20px;
        opacity: 0;
        -webkit-transition: opacity 0.3s ease;
        -moz-transition: opacity 0.3s ease;
        -o-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
        &.show {
          opacity: 1;
        }
      }
      & > .optional {
        display: flex;
        align-items: center;
        gap: 10px;
        & > .negotiation {
          inline-size: 16px;
          block-size: 16px;
          accent-color: var(--primary-900);
        }
      }
    }
  }
  .sales + :global(footer) {
    @media screen and (width > 768px) and (height > 1024px) {
      position: absolute;
      inset-inline-start: 50%;
      inset-block-end: 0;
      translate: -50%;
    }
  }
</style>
