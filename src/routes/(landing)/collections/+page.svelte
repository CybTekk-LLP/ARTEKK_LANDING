<script lang="ts">
  import { Typography } from "$lib/ui/";
  import { PluginCard } from "$lib/project";
  // @ts-ignore
  import { goto } from "$app/navigation";

  export let onClick = (cardHeading: string) => {
    switch (cardHeading.toLocaleLowerCase()) {
      case "footwear": {
        goto("/gettingstarted?load=footwear");
        break;
      }
      case "clothing": {
        goto("/gettingstarted?load=clothing");
        break;
      }
      case "cosmetics": {
        goto("/view?load=makeup");
        break;
      }
      default:
        goto("/view?load=" + cardHeading.toLowerCase());
    }
  };
  export let pluginContent = [
    { cardHeading: "Furniture", imgSrc: "./images/Collections/Furniture.webp" },
    { cardHeading: "Footwear", imgSrc: "./images/Collections/Shoes.webp" },
    { cardHeading: "Clothing", imgSrc: "./images/Collections/Clothes.webp" },
    { cardHeading: "Watches", imgSrc: "./images/Collections/Watch.webp" },
    { cardHeading: "Gloves", imgSrc: "./images/Collections/Gloves.webp" },
    { cardHeading: "Jewellery", imgSrc: "./images/Collections/Jewellery.webp" },
    { cardHeading: "Cap", imgSrc: "./images/Collections/Caps.webp" },
    { cardHeading: "Cars", imgSrc: "./images/Collections/Cars.webp" },
    {
      cardHeading: "Newspaper",
      imgSrc: "./images/Collections/Newspapers.webp",
    },
    {
      cardHeading: "Billboard",
      imgSrc: "./images/Collections/Billboards.webp",
    },
    {
      cardHeading: "Cosmetics",
      imgSrc: "./images/Collections/Makeup.webp",
    },
    { cardHeading: "Glasses", imgSrc: "./images/Collections/Glasses.webp" },
  ];
</script>

<main>
  <Typography type="cardTitle">Collections</Typography>
  <br />
  <div class="plugin-cards">
    {#each pluginContent ?? [] as content}
      <PluginCard
        iconSrc="/images/Button/Icon.svg"
        cardHeading={content.cardHeading}
        imgSrc={content.imgSrc}
        buttonLabel="View in AR"
        clickHandler={() => onClick(content.cardHeading)}><br /></PluginCard
      >
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    inline-size: 90vw;
    max-inline-size: 1280px;
    margin-inline: auto;
    // padding-inline: 2rem;
    & > .plugin-cards {
      margin-block: 15px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
  }
</style>
