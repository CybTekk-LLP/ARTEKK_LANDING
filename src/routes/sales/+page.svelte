<script lang="ts">
  import { Button, InputText, Typography, TextArea } from "$lib/ui";

  let name: string;
  let email: string;
  let company: string;
  let budget: string; //change it when input number is ready
  let comment: string;
</script>

<main class="sales">
  <Typography type="cardTitle">Contact Sales</Typography>
  <br /><br />
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
    <br />
    <br />
    <InputText
      bind:value={company}
      variant="text"
      placeholder="Please enter company name"
    />
    <br />
    <br />
    <InputText
      bind:value={budget}
      variant="text"
      placeholder="Please enter your name"
    />
    <br />
    <br />
    <div class="optional">
      <input
        class="negotitaion"
        type="checkbox"
        name="Open for Negotitaion"
        id="checkbox"
      />
      <label for="checkbox"
        ><Typography type="subtext" _fontweight="400"
          >Open For Negotitaion</Typography
        ></label
      >
    </div>
    <br />
    <br />
    <TextArea
      bind:value={comment}
      placeholder="Write any additional comments or requests"
    />
    <br /><br />
    <Button
      type="primary"
      buttonLabel="Submit"
      onClick={() => alert("sdafgasfg")}
    />
  </form>
</main>

<style lang="scss">
  main {
    display: grid;
    place-items: center;
    & > form {
      inline-size: 90vw;
      max-inline-size: 600px;
      margin-inline: auto;
      & > .optional {
        display: flex;
        align-items: center;
        gap: 10px;
        & > .negotitaion {
          inline-size: 16px;
          block-size: 16px;
        }
      }
    }
  }
</style>
