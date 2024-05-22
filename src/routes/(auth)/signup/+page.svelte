<script lang="ts">
  import { InputText, Button, Typography } from "../../../lib/ui";
  let email: string;
  let password: string;
  let repeatPassword: string;
  let agreeForTerms: boolean;
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
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      placeholder="Enter Your Password"
      label="Password"
      bind:value={password}
    />
    <br />
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      placeholder="Repeat Your Password"
      label="Repeat Password"
      bind:value={repeatPassword}
    />
    <br />
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
      padding-inline: 20px;
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
