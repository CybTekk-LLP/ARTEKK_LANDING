<script lang="ts">
  import { ProfilePic } from "$lib/project";
  import { InputText } from "$lib/ui";
  import Button from "$lib/ui/Button/Button.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let email: string;
  let name: string;
  let error = false;

  $: if (email) error = !emailRegex.test(email);
</script>

<main>
  <h1 class="heading">
    <Typography type="cardTitle">Profile</Typography>
  </h1>
  <form>
    <div class="card-header">
      <ProfilePic userName="sdsfg" />
    </div>
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      label="Name"
      placeholder="Dustin Porier"
      bind:value={name}
    />
    <br />
    <br />
    <InputText
      variant="email"
      labelNeeded={true}
      label="Email(Can't Be Changed)"
      placeholder="Dustin.porier@gmail.com"
      bind:value={email}
    />
    <p class="error-msg" class:show={error && email}>
      <Typography type="subtext" _color="var(--danger)" _fontweight="400"
        >{error ? "Please enter a valid email address" : ""}</Typography
      >
    </p>
    <br />
    <Button type="primary" buttonLabel="SAVE CHANGES" onClick={() => null} />
  </form>
</main>

<style lang="scss">
  main {
    padding-block-start: 70px;
    & > .heading {
      text-align: center;
      margin-block-end: 80px;
    }
    & > form {
      inline-size: 90vw;
      max-inline-size: 400px;
      margin-inline: auto;
      & > .card-header {
        display: flex;
        justify-content: center;
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
    }
  }
</style>
