<script lang="ts">
  import { Typography } from "..";
  import { fly } from "svelte/transition";
  import { clickOutside } from "./../../utils";
  import { onMount } from "svelte";
  export let isOpen = false;
  export let navOptions: { name: string; href: string; target?: string }[];
  export let logo: string;
  let nav: HTMLElement;

  const handleClickOutside = () => {
    isOpen = false;
  };

  onMount(() => {
    nav.addEventListener("click_outside", () => {
      handleClickOutside();
    });
  });
</script>

<nav bind:this={nav} use:clickOutside>
  <a href="/">
    <img class="logo" src={logo} alt="logo" />
  </a>
  <ul class="nav-options">
    {#each navOptions ?? [] as option}
      <li>
        <a href={option.href} target={option?.target}
          ><Typography type="impact" _fontweight="400">{option.name}</Typography
          ></a
        >
      </li>
    {/each}
  </ul>
  <div aria-hidden="true" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="nav-icon" class:open={isOpen} on:click={() => (isOpen = !isOpen)}>
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
    </ul>
  </div>
{/if}

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding-inline: 30px;
    padding-block: 20px;
    margin-block-end: 4rem;
    & > a {
      & > .logo {
        position: relative;
        z-index: 4;
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
          text-decoration: none;
        }
      }
    }
    & > .nav-icon {
      position: relative;
      display: none;
      inline-size: 30px;
      block-size: 20px;
      position: relative;
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
        background-color: #ffffff;
        border-radius: 9px;
        inset-inline-start: 0;
        inset-block-start: 0;
        rotate: 0deg;
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        &:nth-child(1) {
          inset-block-start: 10px;
        }
        &:nth-child(2) {
          inset-block-start: 20px;
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
    position: absolute;
    inset-inline-end: 0;
    inset-block-start: 0;
    inline-size: 20vw;
    max-inline-size: 100vw;
    block-size: 100vh;
    padding-inline: 20px;
    padding-block: 10px;
    background-color: var(--secondary-700);
    transition: opacity 1s ease;
    z-index: 3;
    @media screen and (width <= 720px) {
      inline-size: 100vw;
    }
    &.ham-open {
      display: block;
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
</style>
