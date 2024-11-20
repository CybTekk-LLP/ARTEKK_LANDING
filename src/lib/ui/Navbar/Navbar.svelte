<script lang="ts">
  import { Typography, TopBanner } from "..";
  import { fly } from "svelte/transition";
  import { clickOutside } from "./../../utils";
  import { onMount } from "svelte";
  import { ProfilePic } from "$lib/project";
  export let isOpen = false;
  export let navOptions: { name: string; href: string; target?: string }[];
  export let logo: string;
  export let isSignedIn: boolean | undefined = false;
  export let userName: string | undefined = undefined;

  let nav: HTMLElement;
  let themeToggle: HTMLInputElement;

  const handleClickOutside = () => {
    isOpen = false;
  };

  onMount(() => {
    nav.addEventListener("click_outside", () => {
      handleClickOutside();
    });

    // Check for saved user preference
    if (localStorage.getItem("theme") === "light") {
      themeToggle.checked = true;
      document.documentElement.setAttribute("data-theme", "light");
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  });
</script>

<header>
  <TopBanner
    bannerText="Got questions?"
    bannerTextTwo="Book an appointment"
    bannerTextThree="—we're here to help!"
  />
  <nav bind:this={nav} use:clickOutside>
    <a href="/">
      <img class="logo" src={logo} alt="logo" />
    </a>
    <ul class="nav-options">
      {#each navOptions ?? [] as option}
        <li>
          <a href={option.href} target={option?.target}
            ><Typography type="impact" _fontweight="400"
              >{option.name}</Typography
            ></a
          >
        </li>
      {/each}
    </ul>
    <div class="toggle toggle--daynight">
      <input
        type="checkbox"
        id="toggle--daynight"
        class="toggle--checkbox"
        bind:this={themeToggle}
      />
      <label class="toggle--btn" for="toggle--daynight"
        ><span class="toggle--feature"></span></label
      >
    </div>
    {#if isSignedIn}
      <a
        href="/profile"
        class="user-avatar"
        inert
        style="opacity: 0; visibility: hidden"
      >
        <ProfilePic isSmall={true} bind:userName />
      </a>
    {:else}
      <div aria-hidden="true" />
    {/if}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="nav-icon"
      class:open={isOpen}
      on:click={() => (isOpen = !isOpen)}
    >
      <span></span>
      <span></span>
    </div>
  </nav>
  {#if isOpen}
    <div
      class="ham-menu"
      in:fly={{ duration: 400, x: 50 }}
      out:fly={{ duration: 200, x: 50 }}
    >
      <ul class="hamburger-menu">
        {#each navOptions ?? [] as option}
          <li>
            <a
              href={option.href}
              on:click={() => (isOpen = false)}
              target={option?.target}
              ><Typography type="impact" _fontweight="400"
                >{option.name}</Typography
              ></a
            >
          </li>
        {/each}
        <!-- {#if isSignedIn}
      <li>
        <a href="/profile" on:click={() => (isOpen = false)}
          ><Typography type="impact" _fontweight="400">{"Profile"}</Typography
            ></a
            >
          </li>
          {/if} -->
      </ul>
    </div>
  {/if}
</header>

<style lang="scss">
  header {
    position: fixed;
    inline-size: 100%;
    z-index: 4;
  }
  nav {
    inline-size: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding-inline: 30px;
    padding-block: 20px;
    background-color: var(--primary-translucent);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    & > a {
      & > .logo {
        position: relative;
        inset-block-start: 0;
        inset-inline-start: 0;
        translate: 0 10px;
        inline-size: 50px;
        z-index: 3;
      }
    }
    & > .nav-options {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;

      @media screen and (width <= 1020px) {
        display: none;
      }

      & > li {
        & > a {
          position: relative;
          display: inline-block;
          padding: 0px 5px;
          text-decoration: none;
        }

        a:after {
          position: absolute;
          left: 0px;
          background-color: var(--primary-900);
          content: "";
          display: block;
          height: 1px;
          margin-top: 2px;
          --webkit-transition: width 0.5s;
          --moz-transition: width 0.5s;
          --o-transition: width 0.5s;
          transition: width 0.5s;
          width: 0;
        }

        a:hover:after {
          width: 100%;
        }
      }
    }
    & > .user-avatar {
      @media screen and (width <= 1020px) {
        display: none;
      }
    }
    & > .nav-icon {
      position: fixed;
      inset-inline-end: 35px;
      inset-block-start: 50px;
      display: none;
      inline-size: 30px;
      block-size: 20px;
      rotate: 0deg;
      transform-origin: center center;
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 4;

      @media screen and (width <= 1020px) {
        display: block;
      }
      & > span {
        display: block;
        position: absolute;
        block-size: 2px;
        inline-size: 100%;
        background-color: var(--primary-900);
        border-radius: 9px;
        inset-inline-start: 0;
        inset-block-start: 0;
        rotate: 0deg;
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          inset-block-start: 0;
        }
        &:nth-child(2) {
          inset-block-start: 10px;
        }
      }
      &.open {
        & > span {
          &:nth-child(1) {
            rotate: 45deg;
            transform-origin: 30%;
          }
          &:nth-child(2) {
            transform-origin: 30%;
            rotate: -45deg;
          }
        }
      }
    }
  }

  .ham-menu {
    display: block;
    position: fixed;
    inset-inline-end: 0;
    inset-block-start: 0;
    inline-size: 30vw;
    max-inline-size: 100vw;
    block-size: 100vh;
    padding-inline: 20px;
    padding-block: 10px;
    background-color: var(--secondary-900);
    transition: opacity 1s ease;
    z-index: 3;
    @media screen and (width <= 720px) {
      inline-size: 100vw;
    }
    & > .hamburger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 50px;
      list-style: none;
      margin-block-start: 120px;
      & > li {
        padding-inline-end: 25px;
        & > a {
          text-decoration: none;
        }
      }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .toggle {
    font-size: 62.5%;
    margin: 10px;
    display: block;
    text-align: center;
    margin-top: 40px;
    user-select: none;
    scale: 0.5;
    inset-inline-end: 50px;
    inset-block-end: 0px;
    position: absolute;
  }

  .toggle--checkbox {
    display: none;
  }

  .toggle--btn {
    display: block;
    margin: 0 auto;
    font-size: 1.4em;
    transition: all 350ms ease-in;
  }
  .toggle--btn:hover {
    cursor: pointer;
  }

  .toggle--btn,
  .toggle--btn:before,
  .toggle--btn:after,
  .toggle--checkbox,
  .toggle--checkbox:before,
  .toggle--checkbox:after,
  .toggle--feature,
  .toggle--feature:before,
  .toggle--feature:after {
    transition: all 250ms ease-in;
  }
  .toggle--btn:before,
  .toggle--btn:after,
  .toggle--checkbox:before,
  .toggle--checkbox:after,
  .toggle--feature:before,
  .toggle--feature:after {
    content: "";
    display: block;
  }
  .toggle--daynight .toggle--btn {
    position: relative;
    height: 70px;
    width: 125px;
    border-radius: 70px;
  }
  .toggle--daynight .toggle--btn:before {
    position: absolute;
    top: 2px;
    left: 4px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .toggle--daynight .toggle--btn {
    border: 5px solid #1c1c1c;
    background-color: #4134a2;
  }
  .toggle--daynight .toggle--btn:before {
    background-color: #fff;
    border: 5px solid #e3e3c7;
  }
  .toggle--daynight .toggle--btn:after {
    position: absolute;
    top: 62%;
    left: 39px;
    z-index: 10;
    width: 11.2px;
    height: 11.2px;
    opacity: 0;
    background-color: #fff;
    border-radius: 50%;
    box-shadow:
      #fff 0 0,
      #fff 3px 0,
      #fff 6px 0,
      #fff 9px 0,
      #fff 11px 0,
      #fff 14px 0,
      #fff 16px 0,
      #fff 21px -1px 0 1px,
      #fff 16px -7px 0 -2px,
      #fff 7px -7px 0 1px,
      #d3d3d3 0 0 0 4px,
      #d3d3d3 6px 0 0 4px,
      #d3d3d3 11px 0 0 4px,
      #d3d3d3 16px 0 0 4px,
      #d3d3d3 21px -1px 0 5px,
      #d3d3d3 16px -7px 0 1px,
      #d3d3d3 7px -7px 0 5px;
    transition: opacity 100ms ease-in;
  }
  @keyframes starry_star {
    50% {
      background-color: rgba(51, 50, 81, 0.1);
      box-shadow:
        #fff 30px -3px 0 0,
        #fff 12px 10px 0 -1px,
        rgba(255, 255, 255, 0.1) 38px 18px 0 1px,
        #fff 32px 34px 0 0,
        rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px,
        #fff 5px 38px 0 1px;
    }
  }
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 100;
      transform: scale(1.1);
    }
    55% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      opacity: 100;
      transform: scale(1);
    }
  }
  .toggle--daynight .toggle--feature {
    display: block;
    position: absolute;
    top: 9px;
    left: 52.5%;
    z-index: 20;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow:
      rgba(255, 255, 255, 0.1) 30px -3px 0 0,
      rgba(255, 255, 255, 0.1) 12px 10px 0 -1px,
      #fff 38px 18px 0 1px,
      rgba(255, 255, 255, 0.1) 32px 34px 0 0,
      #fff 20px 24px 0 -1.5px,
      rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
    animation: starry_star 5s ease-in-out infinite;
  }
  .toggle--daynight .toggle--feature:before {
    position: absolute;
    top: -2px;
    left: -25px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #e3e3c7;
    box-shadow:
      #e3e3c7 -28px 0 0 -3px,
      #e3e3c7 -8px 24px 0 -2px;
    transform-origin: -6px 130%;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn {
    background-color: #d0d6ff;
    border: 5px solid #8696d7;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn:before {
    left: 55px;
    background-color: #ffdf6d;
    border: 5px solid #e1c348;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn:after {
    opacity: 100;
    animation-name: bounceIn;
    animation-duration: 0.6s;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;
  }
  .toggle--daynight
    .toggle--checkbox:checked
    + .toggle--btn
    > .toggle--feature {
    opacity: 0;
    box-shadow:
      rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
      rgba(255, 255, 255, 0.1) 12px 10px 0 -5px,
      #fff 38px 18px 0 -3px,
      rgba(255, 255, 255, 0.1) 32px 34px 0 -4px,
      #fff 20px 24px 0 -5.5px,
      rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
    animation: none;
  }
  .toggle--daynight
    .toggle--checkbox:checked
    + .toggle--btn
    > .toggle--feature:before {
    left: 25px;
    transform: rotate(70deg);
  }
</style>
