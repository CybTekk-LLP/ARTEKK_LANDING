<script lang="ts">
  import { Typography, Button } from "$lib/ui";
  let email = "nathan.robert@gmail.com";
</script>

<main>
  <form class="card">
    <div class="card-header">
      <img src="/images/Logo/Logo.svg" alt="logo" />
      <br />
      <Typography type="cardTitle">Check Your email</Typography>
      <br />
      <Typography type="body">{`We have sent an email to ${email}`}</Typography>
    </div>
    <br />
    <Button
      type="primary"
      buttonLabel="OPEN EMAIL APP"
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
      a {
        text-decoration-color: var(--primary-900);
        text-underline-offset: 5px;
      }
    }
  }
</style>
