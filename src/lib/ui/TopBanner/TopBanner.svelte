<script lang="ts">
  import { hideTopBanner } from "$lib/stores/store";
  import { onMount } from "svelte";
  import { Typography } from "..";

  export let bannerText: String;
  export let bannerTextTwo: string;
  export let bannerTextThree: string;

  let header: HTMLElement;

  onMount(() => {
    if ($hideTopBanner) header.style.display = "none";
  });

  const handleCancel = () => {
    $hideTopBanner = true;
  };
</script>

<header class:hide={$hideTopBanner} bind:this={header}>
  <div>
    <Typography type="body" renderInline={true}>{bannerText}</Typography>
    <Typography type="body" renderInline={true}
      ><a href="https://calendar.app.google/tzvBWpzhMMzmrY1v6" target="_blank"
        >{bannerTextTwo}</a
      ></Typography
    >
    <Typography type="body" renderInline={true}>{bannerTextThree}</Typography>
  </div>
  <button class="cancel" on:click={handleCancel}>
    <img src="/images/Cancel.svg" alt="cancel" />
  </button>
</header>

<style lang="scss">
  header {
    block-size: 50px;
    position: relative;
    background-color: var(--brand-300);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    padding: 10px 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (width < 768px) {
      block-size: 100px;
    }
    &.hide {
      animation: hide 0.7s ease-in-out forwards;
    }
    @keyframes hide {
      to {
        block-size: 0;
        padding-block: 0;
      }
    }
    & > div {
      padding-inline-end: 10px;
    }
    & a {
      color: var(--primary-900);
      text-underline-offset: 5px;
    }
    & > .cancel {
      all: unset;
      display: inline-block;
      position: absolute;
      inset-inline-end: 10px;
      inset-block-start: 0;
      padding: 15px;
      cursor: pointer;
    }
  }
</style>
