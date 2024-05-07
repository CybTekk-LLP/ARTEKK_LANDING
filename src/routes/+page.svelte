<script lang="ts">
  import { Typography } from "$lib/ui";
</script>

<main>
  <section class="about">
    <div class="content">
      <h1 class="heading">
        <Typography type="heading"
          >“Experience Reality Like Never Before”</Typography
        >
      </h1>
      <p class="description">
        <Typography type="body" _color="var(--primary-700)">
          At ARTEKK, we redefine what's possible with Augmented Reality (AR).
          Explore immersive experiences, engage your audience, and unlock new
          dimensions of creativity with our cutting-edge AR solutions.
        </Typography>
      </p>
      <button class="getstarted">Get Started</button>
    </div>
    <div class="section-image">
      <img
        class="banner"
        height="756px"
        src="/images/Home/BannerOne.png"
        alt="Banner"
      />
      <img
        class="banner"
        height="756px"
        src="/images/Home/BannerTwo.png"
        alt="Banner"
      />
      <img
        class="banner"
        height="756px"
        src="/images/Home/BannerThree.png"
        alt="Banner"
      />
    </div>
  </section>
</main>

<style lang="scss">
  main {
    inline-size: 100vw;
    max-inline-size: 1280px;
    margin-inline: auto;
    & > .about {
      padding: 2rem;
      & > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        & > .heading {
          max-inline-size: 960px;
        }
        & > .description {
          max-inline-size: 880px;
          margin-block: 3rem;
        }

        & > button {
          position: relative;
          overflow: hidden;
          transition: background 400ms;
          color: #fff;
          background-color: #6200ee;
          background-image: linear-gradient(to right, #0a0030, #2a002e);
          padding: 1rem 5rem;
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.5rem;
          outline: 0;
          border: 0;
          border-radius: 0.25rem;
          box-shadow:
            1px 1px 2px 0px #000,
            0px 6px 12px 0px #000,
            0px 1px 2px 0px rgba(255, 255, 255, 0.1) inset,
            0px 6px 12px 0px rgba(255, 255, 255, 0.24) inset;
          cursor: pointer;
          white-space: nowrap;
          text-align: center;
          margin-block-end: 3rem;
        }
      }

      & > .section-image {
        max-inline-size: 1092px;
        inline-size: 100%;
        margin-inline: auto;
        text-align: center;
        & > .banner {
          translate: 0 0;

          transition: all 0.3s ease;
          &:hover {
            translate: 0 -20px;
          }
        }
        & > .banner:first-of-type {
          inline-size: 30%;
          block-size: auto;
          rotate: -6deg;
        }
        & > .banner:nth-child(2) {
          inline-size: 30%;
          block-size: auto;
          display: inline-block;
          position: relative;
          z-index: 2;
        }
        & > .banner:last-of-type {
          inline-size: 30%;
          block-size: auto;
          rotate: 6deg;
        }
      }
    }
  }
</style>
