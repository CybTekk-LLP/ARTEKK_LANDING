<script lang="ts">
  import { Typography, InputText, Button } from "$lib/ui";

  let password: string;
  let repeatPassword: string;
  let passwordError = false;
  let confrimPassword = false;
  let errorPrompt: string = "";
  const upperCaseRegex = /(?=.*[A-Z])/;
  const lowerCaseRegex = /(.*[a-z].*)/;
  const digitRegex = /(.*\d.*)/;
  const eightCharacterRegex = /.{8,}/;
  $: validatePassword = () => {
    passwordError = false;
    errorPrompt = "";
    if (!lowerCaseRegex.test(password)) {
      passwordError = true;
      errorPrompt = "Password must contain atleast one lowercase character";
    } else if (!upperCaseRegex.test(password)) {
      passwordError = true;
      errorPrompt = "Password must contain atleast one uppercase character";
    } else if (!digitRegex.test(password)) {
      passwordError = true;
      errorPrompt = "Password must contain atleast one digit character";
    } else if (!eightCharacterRegex.test(password)) {
      passwordError = true;
      errorPrompt = "Password must be atleast eight character long";
    } else if (repeatPassword && password !== repeatPassword) {
      confrimPassword = true;
    }
    return !passwordError;
  };
  $: validatePassword();
</script>

<main>
  <form class="card">
    <div class="card-header">
      <img src="/images/Logo/Logo.svg" alt="logo" />
      <br />
      <Typography type="cardTitle">Reset Password?</Typography>
      <br />
      <Typography type="subtext" _fontweight="400"
        >We have sent an email to @nathan.roberts@example.com
      </Typography>
    </div>
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      label="New Password"
      bind:value={password}
      placeholder="Minimum 8 characters"
    />
    <p class="error-msg" class:show={passwordError}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{passwordError && password ? errorPrompt : ""}</Typography
      >
    </p>
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      label="Repeat Password"
      bind:value={repeatPassword}
      placeholder="Minimum 8 characters"
    />
    <br />
    <p class="error-msg" class:show={confrimPassword}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{confrimPassword && repeatPassword
          ? "Password and the repeat password should be the same."
          : ""}</Typography
      >
    </p>
    <br />
    <Button
      type="primary"
      buttonLabel="RESET PASSWORD"
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
        padding-inline: 2vw;
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
