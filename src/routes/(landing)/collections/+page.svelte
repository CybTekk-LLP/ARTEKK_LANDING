<script lang="ts">
  import { Typography } from "$lib/ui/";
  import { PluginCard } from "$lib/project";
  export let onClick = () => {};
  export let pluginContent = [
    { cardHeading: "Furniture", imgSrc: "./images/Collections/Furniture.webp" },
    { cardHeading: "Shoes", imgSrc: "./images/Collections/Shoes.webp" },
    { cardHeading: "Clothes", imgSrc: "./images/Collections/Clothes.webp" },
    { cardHeading: "Watch", imgSrc: "./images/Collections/Watch.webp" },
    { cardHeading: "Gloves", imgSrc: "./images/Collections/Gloves.webp" },
    { cardHeading: "Jewellery", imgSrc: "./images/Collections/Jewellery.webp" },
    { cardHeading: "Caps", imgSrc: "./images/Collections/Caps.webp" },
    { cardHeading: "Cars", imgSrc: "./images/Collections/Cars.webp" },
    {
      cardHeading: "Newspapers",
      imgSrc: "./images/Collections/Newspapers.webp",
    },
    {
      cardHeading: "Billboards",
      imgSrc: "./images/Collections/Billboards.webp",
    },
    {
      cardHeading: "Makeup",
      imgSrc: "./images/Collections/Makeup.webp",
    },
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
        clickHandler={onClick}><br /></PluginCard
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
