<script lang="ts">
  import { AboutCard } from "$lib/project";

  let aboutContent = [
    {
      heading: "Who We Are",
      description:
        "Founded by a team of passionate technologists, creatives, and visionaries, ARTEKK brings together diverse expertise to deliver cutting-edge VR solutions. With backgrounds in gaming, software development, design, and beyond, our team is united by a shared passion for innovation and a commitment to excellence.",
    },
    {
      heading: "What We Do",
      description:
        "At ARTEKK, we develop and produce a wide range of VR experiences, from captivating games and simulations to interactive educational content and beyond. Whether you're a gamer looking for the next level of immersion, a business seeking innovative training solutions, or an educator aiming to engage students in new ways, we have the expertise to bring your vision to life.",
    },
    {
      heading: "Why Choose Us",
      description:
        "When you choose [Company Name], you're choosing a partner dedicated to excellence, innovation, and customer satisfaction. With a proven track record of delivering high-quality VR experiences, unparalleled technical expertise, and a passion for pushing the boundaries of what's possible, we're here to help you unlock the full potential of virtual reality.",
    },
  ];
</script>

<main>
  <div class="about-cards">
    {#each aboutContent as content}
      <AboutCard heading={content.heading} description={content.description} />
      <br />
      <br /><br />
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 80vh;
    inline-size: 100vw;
    margin-inline: auto;
    padding-inline: 4rem;
  }
</style>
