<script lang="ts">
  import { InputText, Button, Typography } from "../../../lib/ui";
  let email: string;
  let password: string;
  let repeatPassword: string;
  let agreeForTerms: boolean;
  let emailError = false;
  let passwordError = false;
  let errorPrompt: string = "";
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    }
    return !passwordError;
  };
  $: validatePassword();
  $: console.log(passwordError);
  $: if (email) emailError = !emailRegex.test(email);
</script>

<main>
  <form class="signup">
    <div class="header">
      <img src="/images/Logo/Logo.svg" alt="" />
      <Typography type="cardTitle">Sign Up</Typography>
      <Typography type="caption" _fontweight="400"
        >Enter your details to sign up</Typography
      >
    </div>
    <br />

    <div class="btn">
      <Button
        iconSrc="/images/SignUp/Google.svg"
        type="secondary"
        buttonLabel="Login in with google"
        onClick={() => alert("l")}
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
    <br />
    {#if emailError && email}
      <p class="error-msg" class:show={emailError}>
        <Typography type="subtext" _color="var(--danger)" _fontweight="400"
          >{emailError ? "Please enter a valid email address" : ""}</Typography
        >
      </p>{/if}
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      placeholder="Enter Your Password"
      label="Password"
      bind:value={password}
    />
    <br />
    {#if passwordError && password}
      <p class="error-msg" class:show={passwordError}>
        <Typography type="subtext" _color="var(--danger)" _fontweight="400"
          >{errorPrompt}
        </Typography>
      </p>
    {/if}
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      placeholder="Repeat Your Password"
      label="Repeat Password"
      bind:value={repeatPassword}
    />

    <br />
    <!-- <p class="error-msg" class:show={error}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{error
          ? "Please enter a Password and Repeat Passowrd same"
          : ""}</Typography
      >
    </p> -->
    <br />
    <div class="optional">
      <input
        class="agree-terms"
        type="checkbox"
        name="checkbox"
        id="checkbox"
        bind:checked={agreeForTerms}
      />
      <label for="checkbox"
        ><Typography type="subtext" _fontweight="400"
          >I agree to the terms and privacy policy</Typography
        ></label
      >
    </div>

    <br />
    <Button
      type="primary"
      buttonLabel="SignUp"
      onClick={() => alert("sign in")}
    />
    <br />

    <Typography type="subtext"
      >Already have an account? <a href="/register"
        ><Typography type="subtext" renderInline={true}>Sign In</Typography></a
      ></Typography
    >
  </form>
</main>

<style lang="scss">
  main {
    block-size: 100vh;
    display: grid;
    place-items: center;
    & > .signup {
      inline-size: 471px;
      max-inline-size: 90vw;
      margin-inline: auto;
      background-color: var(--card-background);
      padding-inline: 2vw;
      padding-block: 40px;
      border-radius: 16px;
      & > .btn {
        max-inline-size: 250px;
        inline-size: 90vw;
        margin-inline: auto;
      }
      & > .header {
        text-align: center;
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
      & > .optional {
        display: flex;
        align-items: center;
        gap: 10px;
        & > .agree-terms {
          inline-size: 16px;
          block-size: 16px;
          accent-color: var(--primary-900);
        }
      }
      a {
        text-decoration-color: var(--primary-900);
        text-underline-offset: 5px;
      }
    }
  }
</style>
