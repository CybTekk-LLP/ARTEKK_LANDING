<script lang="ts">
  import { Button, Typography } from "$lib/ui";
  let query = new URL(window.location.href).searchParams.get("load");
  let title: string;
  let description: string;

  $: switch (query) {
    case "clothing":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on clothes is as easy as a flick of the wrist.");
      break;
    case "footwear":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on footwear is as easy as a flick of the wrist.");
      break;
    default:
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on clothes is as easy as a flick of the wrist.");
  }

  const navigateToCamera = () => {
    window.location.href = `./${query}`;
  };
</script>

<main
  id="main"
  style:background-image={`url('./images/Ar/${query || "clothing"}.webp')`}
>
  <section>
    <Typography type="cardTitle">{title}</Typography>
    <br />
    <p class="description">
      <Typography type="body">
        {description}
      </Typography>
    </p>
    <br />
    <div class="btn">
      <Button
        type="primary"
        buttonLabel="Get Started"
        onClick={() => navigateToCamera()}
      />
    </div>
  </section>
</main>

<style lang="scss">
  main {
    block-size: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  section {
    display: block;
    text-align: center;
    margin-inline: auto;
    margin-block-start: auto;
    padding-block-start: calc(100vh - 250px);
    padding-inline: 20px;
    & > .description {
      max-inline-size: 500px;
      margin-inline: auto;
    }
    & > .btn {
      margin-block-end: 5rem;
      max-inline-size: 300px;
      margin-inline: auto;
      :global(button) {
        padding-inline: 100px;
        @media screen and (width < 420px) {
          padding-inline: 70px;
        }
        :global(.typography) {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
