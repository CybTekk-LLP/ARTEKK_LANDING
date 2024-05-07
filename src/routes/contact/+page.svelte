<script lang="ts">
  import { Typography, InputText, TextArea, Button } from "$lib/ui";
  let name: string;
  let email: string;
  let message: string;
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
      variant="text"
      placeholder="Please enter your email"
      bind:value={email}
    />
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
