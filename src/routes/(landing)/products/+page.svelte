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
    {
      cardHeading: "Furniture",
      subHeading:
        "Enable clients to visualize furniture in their space through augmented reality before purchase, enhancing decision-making and reducing returns.",
      imgSrc: "./images/Collections/Furniture.webp",
    },
    {
      cardHeading: "Footwear",
      subHeading:
        "Allow clients to virtually try on and visualize shoes in real-time before purchase, enhancing their shopping experience.",
      imgSrc: "./images/Collections/Shoes.webp",
    },
    {
      cardHeading: "Clothing",
      subHeading:
        "Enable clients to virtually try on outfits in real-time before purchase, offering a more immersive and personalized shopping experience.",
      imgSrc: "./images/Collections/Clothes.webp",
    },
    {
      cardHeading: "Watches",
      subHeading:
        "Allow clients to virtually try on timepieces in real-time before purchase, enhancing their shopping experience with a personalized touch.",
      imgSrc: "./images/Collections/Watch.webp",
    },
    {
      cardHeading: "Gloves",
      subHeading:
        "Enable clients to virtually try on gloves in real-time before purchase, offering a more interactive and personalized shopping experience.",
      imgSrc: "./images/Collections/Gloves.webp",
    },
    {
      cardHeading: "Jewellery",
      subHeading:
        "Let clients virtually try on jewellery in real-time before purchase, providing a luxurious and engaging shopping experience.",
      imgSrc: "./images/Collections/Jewellery.webp",
    },
    {
      cardHeading: "Cap",
      subHeading:
        "Allow clients to virtually try on headwear in real-time before purchase, enhancing their shopping experience with personalized fitting.",
      imgSrc: "./images/Collections/Caps.webp",
    },
    {
      cardHeading: "Cars",
      subHeading:
        "Enable clients to explore and visualize vehicles in real-time before purchase, offering a dynamic and immersive buying experience.",
      imgSrc: "./images/Collections/Cars.webp",
    },
    {
      cardHeading: "Newspaper",
      subHeading:
        "Enable clients to visualize and interact with newspaper content before release, offering a more engaging and dynamic preview experience.",
      imgSrc: "./images/Collections/Newspapers.webp",
    },
    {
      cardHeading: "Billboard",
      subHeading:
        "Allow clients to visualize ads on real-world displays before launch, offering a more precise and impactful advertising experience.",
      imgSrc: "./images/Collections/Billboards.webp",
    },
    {
      cardHeading: "Makeup",
      subHeading:
        "Enable clients to virtually try on makeup products in real-time before purchasing, enhancing their shopping experience with interactive and personalized trials.",
      imgSrc: "./images/Collections/Makeup.webp",
    },
    {
      cardHeading: "Glasses",
      subHeading:
        "Allow clients to virtually try on eyewear in real-time before purchase, providing an engaging and personalized shopping experience.",
      imgSrc: "./images/Collections/Glasses.webp",
    },
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
      block-size: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      // grid-template-columns: 1fr;
      gap: 50px;
    }
  }
</style>
