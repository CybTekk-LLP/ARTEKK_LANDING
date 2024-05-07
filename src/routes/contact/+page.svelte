<script lang="ts">
  import { Typography, InputText, TextArea, Button } from "$lib/ui";

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let name: string;
  let email: string;
  let message: string;
  let error: boolean;

  $: if (email) error = !emailRegex.test(email);
</script>

<main class="contact-us">
  <h1 class="heading">
    <Typography type="heading">Contact Us</Typography>
  </h1>
  <form>
    <InputText
      variant="text"
      placeholder="Please enter your name"
      bind:value={name}
    />
    <br />
    <br />
    <InputText
      variant="email"
      placeholder="Please enter your email"
      bind:value={email}
    />
    <p class="error-msg" class:show={error}>
      <Typography type="subtext" _color="var(--danger)"
        >{error ? "Please enter a valid email address" : ""}</Typography
      >
    </p>
    <br />
    <br />
    <TextArea placeholder="Please Enter your message" bind:value={message} />
  </form>
  <br />
  <br />
  <div class="btn">
    <Button
      type="primary"
      buttonLabel="Submit Message"
      onClick={() => alert("sdgs")}
    />
  </div>
</main>

<style lang="scss">
  main {
    display: grid;
    place-items: center;
    & > .heading {
      text-align: center;
      margin-block-end: 2rem;
    }
    & > form {
      max-inline-size: 650px;
      inline-size: 90vw;
      margin-inline: auto;
      & > .error-msg {
        margin-block-start: 5px;
        padding-inline-start: 20px;
        opacity: 0;
        block-size: 5px;
        -webkit-transition: opacity 0.3s ease;
        -moz-transition: opacity 0.3s ease;
        -o-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
        &.show {
          opacity: 1;
        }
      }
    }
  }

  .contact-us + :global(footer) {
    @media screen and (width > 768px) and (height > 1024px) {
      position: absolute;
      inset-inline-start: 50%;
      inset-block-end: 0;
      translate: -50%;
    }
  }
</style>
