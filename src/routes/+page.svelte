<script lang="ts">
  import { FeatureCard } from "$lib/project";
  import { onMount } from "svelte";
  import { Navbar, Typography, Button } from "$lib/ui";
  // @ts-ignore
  import { goto } from "$app/navigation";

  let isOpen = false;
  let year = new Date().getFullYear();
  let animationData = [false, false, false, false];
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        currentSection = entry.target.getAttribute("data-label");
      }
    });
  };
  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed
    });
    const sections = document.querySelectorAll("[data-label]");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  });
  $: isSignedIn = false;
  $: userName = "Gourav";
  $: switch (currentSection) {
    case "watches":
      animationData = [true, false, false, false];
      break;
    case "shoes":
      animationData = [false, true, false, false];
      break;
    case "jewellery":
      animationData = [false, false, true, false];
      break;
    case "cars":
      animationData = [false, false, false, true];
      break;
    default:
      animationData = [false, false, false, false];
  }
  $: currentSection = "";
</script>

<main>
  <Navbar
    bind:isOpen
    bind:isSignedIn
    bind:userName
    logo={"/images/Logo/Logo.svg"}
    navOptions={[
      { name: "About", href: "/about", target: "" },
      { name: "Collections", href: "/collections", target: "" },
      { name: "Pricing", href: "/pricing", target: "" },
      { name: "Contact", href: "/contact", target: "" },
      { name: "Documentation", href: "/docs", target: "" },
    ]}
  />
  <br /><br />
  <section class="container">
    <section class="about" data-label="default">
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
        <div class="btn">
          <Button
            type="primary"
            buttonLabel="Get Started"
            onClick={() => goto("/pricing")}
          />
        </div>
      </div>
      <br />
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
    <section class="feature-card-section" data-label="watches">
      <FeatureCard
        direction="left"
        heading="Watches"
        description="Explore our 3D watch feature and find the perfect timepiece that suits your style!"
        img="./images/FeatureCard/watches.webp"
        isAnimated={animationData[0]}
        onClick={() => goto("/view?load=watches")}
      />
    </section>
    <section class="feature-card-section" data-label="shoes">
      <FeatureCard
        direction="right"
        heading="Shoes"
        description="Experience the ease of trying on shoes virtually with our 3D feature, making shopping a breeze."
        img="./images/FeatureCard/footwear.webp"
        isAnimated={animationData[1]}
        onClick={() => goto("/view?load=footwear")}
      />
    </section>
    <section class="feature-card-section" data-label="jewellery">
      <FeatureCard
        direction="left"
        heading="Jewellery"
        description="Choosing the best jewellery for you was never so easy! Make your online shopping a one-click tap! Adorn yourself with digital elegance – 3D jewellery!"
        img="./images/FeatureCard/jwellery.webp"
        isAnimated={animationData[2]}
        onClick={() => goto("/view?load=jewellery")}
      />
    </section>
    <section class="feature-card-section" data-label="cars">
      <FeatureCard
        direction="right"
        heading="Cars"
        description="Drive into the virtual fast lane – 3D cars that put you in the driver's seat of innovation!"
        img="./images/FeatureCard/cars.webp"
        isAnimated={animationData[3]}
        onClick={() => goto("/view?load=cars")}
      />
    </section>
  </section>
  <footer>
    <Typography type="subtext" _fontweight="400" _color="var(--primary-500)"
      >Copyright © {year} ARTEKK, all rights reserved</Typography
    >
  </footer>
</main>

<style lang="scss">
  main {
    & > .container {
      inline-size: 100vw;
      max-inline-size: 1280px;
      margin-inline: auto;
      & > .about {
        max-inline-size: 90vw;
        margin-inline: auto;
        // padding: 2rem;
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

          & > .btn {
            margin-block-end: 5rem;
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
      & > .feature-card-section {
        min-block-size: 100vh;
        display: grid;
        place-items: center;
        scroll-snap-align: center;
        overflow: visible;
        @media screen and (orientation: portrait) and (width <= 568px) {
          block-size: auto;
        }
      }
    }
    & > footer {
      text-align: center;
      margin-block: 2rem;
    }
  }
</style>
