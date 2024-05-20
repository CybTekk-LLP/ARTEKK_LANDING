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
    case "furniture":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on furniture is as easy as a flick of the wrist.");
      break;
    case "cap":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on cap is as easy as a flick of the wrist.");
      break;
    case "jwellery":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on jwellery is as easy as a flick of the wrist.");
      break;
    case "newspaper":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on newspaper is as easy as a flick of the wrist.");
      break;
    case "watches":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on watches is as easy as a flick of the wrist.");
      break;
    case "billboard":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on billboard is as easy as a flick of the wrist.");
      break;
    case "makeup":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on Make up is as easy as a flick of the wrist.");
      break;
    case "cars":
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on cars is as easy as a flick of the wrist.");
      break;
    default:
      (title = "Step into Virtual Fashion Reality"),
        (description =
          "Immerse yourself in a world where trying on clothes is as easy as a flick of the wrist.");
  }

  const navigateToCamera = () => {
    window.location.href = `./${query}.html`;
  };
</script>

<main
  id="main"
  style:background-image={`url('./images/Ar/${query || "clothing"}.webp')`}
>
  <section>
    <Typography type="caption">{title}</Typography>
    <br />
    <Typography type="body">
      {description}
    </Typography>
    <br />
    <div class="btn">
      <Button
        type="primary"
        buttonLabel="GET STARTED"
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

    & > .heading {
      color: #ffffff;
      font-size: clamp(1.25rem, 1.1786rem + 0.3571vw, 1.5rem);
      text-align: center;
      margin-block-end: 20px;
    }

    & > .description {
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      margin-block-end: 20px;
    }
    & > .btn {
      inline-size: max-content;
      margin-inline: auto;
      :global(button) {
        padding-inline: 60px;
        padding-block: 20px;
      }
      :global(.typography) {
        font-size: 1.2rem;
      }
    }
  }
</style>
