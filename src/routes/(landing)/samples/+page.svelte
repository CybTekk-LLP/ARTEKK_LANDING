<script lang="ts">
  import { GalleryCard } from "$lib/project";
  import { Typography } from "$lib/ui";

  const urls = [
    "specs.mp4",
    "billboard 3d.mp4",
    "shoes2.mp4",
    "AR Mirror.mp4",
    "caps.mp4",
    "cars.mp4",
    "Furniture.mp4",
    "ShoesAR.mp4",
    "newspaper.mp4",
  ];

  const alts = [
    "Glasses Try-on",
    "3D Billboard",
    "Shoes Try-on",
    "Clothing Mirror",
    "Cap Try-on",
    "3D Car Model",
    "Virtual Furniture",
    "Shoes Try-on",
    "Mixed Reality Newspaper",
  ];
</script>

<main>
  <div class="samples">
    <Typography type="heading">ARTekk Reality Labs</Typography>
    <br />
    <Typography type="body"
      >At ARTekk, our lab samples demonstrate the power of augmented reality in
      creating immersive virtual try-on experiences. With a focus on precision
      fitting, our solutions are designed to enhance customer satisfaction by
      providing accurate and seamless integration into the retail space. Each
      sample is a testament to our commitment to innovation, pushing the
      boundaries of AR technology to deliver cutting-edge results tailored for
      modern retail challenges.
    </Typography>
    <br /><br />
    <div class="gallery-cards">
      {#each urls as url, i}
        <GalleryCard
          args={{ variant: "video" }}
          content={{ urls: [`images/Gallery/${url}`] }}
          i18n={{ alt: [alts[i]] }}
        />
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 80vh;
    inline-size: 100vw;
    margin-inline: auto;
    padding-inline: 4rem;
    & > .samples {
      margin-block-end: 2rem;
      & > .gallery-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
      }
    }
  }
</style>
