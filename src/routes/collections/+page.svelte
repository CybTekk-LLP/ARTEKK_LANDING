<script lang="ts">
  import { Typography } from "$lib/ui/";
  import { PluginCard } from "$lib/project";
  export let onClick = () => {
    alert("hii by shubhi");
  };
  export let pluginContent = [
    { cardHeading: "Furniture", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Shoes", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Clothes", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Watch", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Gloves", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Jewellery", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Caps", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Cars", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Newspapers", imgSrc: "https://picsum.photos/200/300" },
    { cardHeading: "Billboards", imgSrc: "https://picsum.photos/200/300" },
  ];
</script>

<main>
  <Typography type="heading">My Plugins</Typography>
  <br />
  <div class="plugin-cards">
    {#each pluginContent ?? [] as content}
      <PluginCard
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
    inline-size: 100vw;
    max-inline-size: 1280px;
    margin-inline: auto;
    padding-inline: 2rem;
    & > .plugin-cards {
      margin-block: 15px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
  }
</style>
