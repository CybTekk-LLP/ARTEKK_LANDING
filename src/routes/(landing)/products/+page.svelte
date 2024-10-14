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
    { cardHeading: "Furniture", subHeading: "Furniture AR lets you visualize furniture in your space through AR before purchase.", imgSrc: "./images/Collections/Furniture.webp" },
    { cardHeading: "Footwear", subHeading: "Footwear AR lets you virtually try on and visualize shoes in real-time before purchase.", imgSrc: "./images/Collections/Shoes.webp" },
    { cardHeading: "Clothing", subHeading:"Clothing AR lets you virtually try on outfits in real-time before purchase.", imgSrc: "./images/Collections/Clothes.webp" },
    { cardHeading: "Watches", subHeading: "Watches AR lets you virtually try on timepieces in real-time before purchase.", imgSrc: "./images/Collections/Watch.webp" },
    { cardHeading: "Gloves", subHeading: "Gloves AR lets you virtually try on gloves in real-time before purchase.", imgSrc: "./images/Collections/Gloves.webp" },
    { cardHeading: "Jewellery", subHeading: "Jewellery AR enables you to virtually try on pieces in real-time before purchase.", imgSrc: "./images/Collections/Jewellery.webp" },
    { cardHeading: "Cap", subHeading: "Caps AR lets you virtually try on headwear in real-time before purchase.", imgSrc: "./images/Collections/Caps.webp" },
    { cardHeading: "Cars",subHeading: "Cars AR allows you to explore and visualize vehicles in real-time before purchase.",imgSrc: "./images/Collections/Cars.webp" },
    {
      cardHeading: "Newspaper",
      subHeading: "Newspaper AR enables you to visualize content in an interactive way before release.",
      imgSrc: "./images/Collections/Newspapers.webp",
    },
    {
      cardHeading: "Billboard",
      subHeading:  "Billboard AR lets you visualize ads on real-world displays before launch.",
      imgSrc: "./images/Collections/Billboards.webp",
    },
    {
      cardHeading: "Makeup",
      subHeading: "Makeup AR enables you to try on products virtually in real-time before buying.",
      imgSrc: "./images/Collections/Makeup.webp",
    },
    { cardHeading: "Glasses", subHeading: "Glasses AR lets you virtually try on eyewear in real-time before purchase.", imgSrc: "./images/Collections/Glasses.webp" },
  ];
</script>

<main>
  <Typography type="cardTitle">Products</Typography>
  <br />
  <div class="plugin-cards">
    {#each pluginContent ?? [] as content}
      <PluginCard
        iconSrc="/images/Button/Icon.svg"
        cardHeading={content.cardHeading}
        subHeading={content.subHeading ?? ""}
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
