<script lang="ts">
  import { Typography, InputText, Button } from "$lib/ui";
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let email: string;
  let error = false;

  $: if (email) error = !emailRegex.test(email);
</script>

<main>
  <form class="card">
    <div class="card-header">
      <img src="/images/Logo/Logo.svg" alt="logo" />
      <br />
      <Typography type="cardTitle">Forgot Password?</Typography>
      <br />
      <Typography type="body"
        >Please enter your email to reset your Password</Typography
      >
    </div>
    <br />
    <InputText
      variant="email"
      labelNeeded={true}
      label="Email"
      bind:value={email}
      placeholder="Nathan.Roberts@Example.com"
    />
    <p class="error-msg" class:show={error && email}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{error ? "Please enter a valid email address" : ""}</Typography
      >
    </p>
    <br />
    <Button
      type="primary"
      buttonLabel="SEND RESET LINK"
      onClick={() => alert("asdmnfb")}
    />
    <br />
    <Typography type="subtext"
      >Remember your password? <a href="/login"
        ><Typography type="subtext" renderInline={true}>Login</Typography></a
      ></Typography
    >
  </form>
</main>

<style lang="scss">
  main {
    block-size: 100vh;
    display: grid;
    place-items: center;
    & > .card {
      inline-size: 471px;
      max-inline-size: 90vw;
      margin-inline: auto;
      background-color: var(--card-background);
      padding: 40px;
      padding-inline: 2vw;
      border-radius: 16px;
      & > .card-header {
        text-align: center;
      }
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
      a {
        text-decoration-color: var(--primary-900);
        text-underline-offset: 5px;
      }
    }
  }
</style>
