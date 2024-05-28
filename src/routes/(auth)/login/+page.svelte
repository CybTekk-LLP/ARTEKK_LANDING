<script lang="ts">
  import { Typography, Button, InputText } from "$lib/ui";

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let email: string;
  let password: string;
  let error = false;

  $: if (email) error = !emailRegex.test(email);
</script>

<main>
  <form class="card">
    <div class="card-header">
      <img src="/images/Logo/Logo.svg" alt="logo" />
      <br />
      <Typography type="cardTitle">Sign In</Typography>
      <br />
    </div>
    <br />
    <div class="btn">
      <Button
        type="secondary"
        iconSrc="/images/SignIn/Google.svg"
        buttonLabel="Continue with Google"
        onClick={() => alert("sdfskdn")}
      />
    </div>
    <br />
    <div class="divider">
      <span class="line"></span>
      <Typography type="body">Or</Typography>
      <span class="line"></span>
    </div>
    <br />
    <InputText
      variant="email"
      labelNeeded={true}
      placeholder="Nathan.Robers@Example.com"
      label="Email"
      bind:value={email}
    />
    <p class="error-msg" class:show={error && email}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{error ? "Please enter a valid email address" : ""}</Typography
      >
    </p>
    <br />
    <InputText
      variant="password"
      labelNeeded={true}
      placeholder="Please enter your password"
      label="Password"
      bind:value={password}
    />
    <a href="/forgotpassword"
      ><Typography type="subtext">Forgot Passsword</Typography></a
    >
    <br />
    <br />
    <br />
    <Button
      type="primary"
      buttonLabel="Sign In"
      onClick={() => alert("sign in")}
    />
    <br />
    <Typography type="subtext"
      >Don't have an account? <a href="/register"
        ><Typography type="subtext" renderInline={true}>Sign up</Typography></a
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
      & > .btn {
        inline-size: 100%;
        margin-inline: auto;
      }

      & > .divider {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        white-space: nowrap;
        & > .line {
          display: inline-block;
          inline-size: 30%;
          block-size: 1px;
          background-color: var(--secondary-500);
        }
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
