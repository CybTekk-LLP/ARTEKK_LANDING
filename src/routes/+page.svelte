<script lang="ts">
  import { ChatBox, ChatMessage, FeatureCard } from "$lib/project";
  import { onMount } from "svelte";
  import { Navbar, Typography, Button, Footer } from "$lib/ui";
  // @ts-ignore
  import { goto } from "$app/navigation";
  import * as apiService from "$lib/services/api.service";
  let value: string;
  let isOpen = false;
  let animationData = [false, false, false, false];
  let chatbox: any = [];
  let chat = [];
  let messageEl: HTMLDivElement;

  const handleChatMessage = async () => {
    chat.push({
      message: value,
      messageType: "user",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
    const data = await apiService.chatboxMessage(value);
    chat.push({
      message: data.response,
      messageType: "ai",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
    setTimeout(() => {
      const element = messageEl.lastElementChild;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 800);
  };
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

    chat.push({
      message: "Hi am your AI assistant for ARTekk, drop me any questions!",
      messageType: "ai",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  });
  $: isSignedIn = true;
  $: userName = "Dustin Porier";
  $: switch (currentSection) {
    case "makeup":
      animationData = [true, false, false, false];
      break;
    case "glasses":
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
      { name: "Products", href: "/products", target: "" },
      { name: "Pricing", href: "/pricing", target: "" },
      { name: "Contact", href: "/contact", target: "" },
      { name: "FAQ", href: "/faq", target: "" },
    ]}
  />
  <br /><br />
  <br /><br /><br /><br /><br /><br />
  <section class="container">
    <section class="about" data-label="default">
      <div class="content">
        <h1 class="heading">
          <Typography type="heading"
            >“The No-Code AR Platform customized to align with your needs”</Typography
          >
        </h1>
        <p class="description">
          <Typography type="body" _color="var(--primary-700)">
            At ARTekk, we redefine what's possible with Augmented Reality (AR).
            Explore immersive experiences, engage your audience, and unlock new
            dimensions of creativity with our cutting-edge AR solutions.
          </Typography>
        </p>
        <div class="btn">
          <Button
            type="primary"
            buttonLabel="Get Started"
            onClick={() => goto("/products")}
          />
        </div>
      </div>
      <br />
      <div class="section-image">
        <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
        <img
          class="banner"
          height="756px"
          src="/images/Home/BannerOne.webp"
          alt="Banner"
          tabindex="0"
          role="button"
          on:click={() => goto("/gettingstarted?load=clothing")}
          on:keydown={() => null}
        />
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
          class="banner"
          height="756px"
          src="/images/Home/BannerTwo.webp"
          alt="Banner"
          on:click={() => goto("/view?load=furniture")}
          on:keydown={() => null}
        />
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
          class="banner"
          height="756px"
          src="/images/Home/BannerThree.webp"
          alt="Footwear AR Banner"
          on:click={() => goto("/gettingstarted?load=footwear")}
          on:keydown={() => null}
        />
      </div>
    </section>
    <section class="feature-card-section" data-label="makeup">
      <FeatureCard
        direction="left"
        heading="Virtual Cosmetics Magic Awaits!"
        description="Transform your look instantly with our virtual try-on.
        All the Girlies! It's time to Glam up with just a click!
       "
        img="./images/FeatureCard/Makeup.webp"
        isAnimated={animationData[0]}
        onClick={() => goto("/view?load=makeup")}
      />
    </section>
    <section class="feature-card-section" data-label="glasses">
      <FeatureCard
        direction="right"
        heading="Perfect Fit, Virtually Tried!"
        description="Discover your perfect pair of Glasses instantly with our virtual technique. Style made simple!"
        img="./images/FeatureCard/Glasses.webp"
        isAnimated={animationData[1]}
        onClick={() => goto("/view?load=glasses")}
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
  <Footer
    i18n={{
      copyrightLabel: "Copyright © All rights reserved.",
      productLabel: "is a product of",
    }}
    content={{
      appStoreLink: "/",
      googlePlayLink: "/",
      navigationOptions: [
        {
          name: "Pages",
          subOptions: [
            { name: "About", url: "/about" },
            { name: "Products", url: "/products" },
            { name: "Pricing", url: "/pricing" },
            { name: "FAQ", url: "/faq" },
          ],
        },
        {
          name: "Contact",
          subOptions: [
            {
              name: "CybTEKK, Plot No. 10, Sector 13,Rajiv Gandhi IT Park, Chandigarh",
              url: "https://maps.app.goo.gl/6PmTzFpYniaMRe3MA",
            },
            { name: "hello@cybtekk.com", url: "mailto:hello@cybtekk.com" },
            { name: "+917233029581", url: "tel:+917233029581" },
          ],
        },
        {
          name: "Policies",
          subOptions: [
            { name: "Privacy Policy", url: "/privacypolicy" },
            { name: "Terms of Use", url: "/terms" },
            { name: "Legal", url: "/legal" },
          ],
        },
      ],
    }}
  />

  <ChatBox
    heading="Start Talking"
    sendMessage={() => handleChatMessage()}
    bind:value
    bind:messageEl
  >
    {#each Array(chatbox.length) as _, i}
      <ChatMessage
        message={chatbox[i].message}
        messageTime={chatbox[i].messageTime ??
          new Intl.DateTimeFormat("en-US", {
            timeStyle: "short",
          }).format(Date.now())}
        messageType={chatbox[i].messageType ?? ""}
        index={i}
      ></ChatMessage>
    {/each}
  </ChatBox>
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
          justify-content: center;
          align-items: center;
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
