<script lang="ts">
  import { Typography, Button, InputText } from "$lib/ui";

  let email: string;
  let password: string;
</script>

<main>
  <div class="card">
    <div class="card-header">
      <img src="/images/Logo/Logo.svg" alt="logo" />
      <br />
      <Typography type="cardTitle">Sign In</Typography>
      <br />
      <Typography>Enter your details to sign in</Typography>
    </div>
    <br />
    <Button
      type="secondary"
      iconSrc="/images/SignIn/Google.svg"
      buttonLabel="Log in with google"
      onClick={() => alert("sdfskdn")}
    />
    <br />
    <InputText
      variant="email"
      labelNeeded={true}
      placeholder="Nathan.Robers@Example.com"
      label="Email"
      bind:value={email}
    />
    <br />
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      placeholder="Nathan.Robers@Example.com"
      label="Password"
      bind:value={password}
    />
    <a href="/forgotpassword"
      ><Typography type="subtext">Forgot Passsword</Typography></a
    >
    <br />
    <br />
    <Button
      type="primary"
      buttonLabel="SignIn"
      onClick={() => alert("sign in")}
    />
    <br />
    <Typography type="subtext"
      >Don't have an account? <a href="/register"
        ><Typography type="subtext" renderInline={true}>Sign up</Typography></a
      ></Typography
    >
  </div>
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
      padding-inline: 20px;
      padding-block: 40px;
      border-radius: 16px;
      & > .card-header {
        text-align: center;
      }
      & > a {
        display: inline-block;
        inline-size: 100%;
        text-decoration-color: var(--primary-900);
        text-underline-offset: 5px;
        margin-block-start: 10px;
        text-align: end;
      }
      a {
        text-decoration-color: var(--primary-900);
        text-underline-offset: 5px;
      }
    }
  }
</style>
