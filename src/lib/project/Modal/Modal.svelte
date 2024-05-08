<script lang="ts">
  import { onMount } from "svelte";
  import { clickOutside } from "./../../utils";

  export let dialog: HTMLDialogElement;
  export let showBackdrop = false;

  const handleClickOutside = () => {
    dialog.close();
    showBackdrop = false;
  };

  onMount(() => {
    dialog.addEventListener("click_outside", () => {
      handleClickOutside();
    });
  });
</script>

<div class="backdrop" class:show-filter={showBackdrop} />
<dialog bind:this={dialog} use:clickOutside>
  <slot />
</dialog>

<style lang="scss">
  .backdrop {
    position: fixed;
    display: none;
    block-size: 100%;
    z-index: 4;
    inset-inline-start: 0;
    inset-block-start: 0;
    inline-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-blend-mode: saturation;
    &.show-filter {
      display: block;
    }
  }
  dialog {
    position: fixed;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
    border: 1px solid var(--secondary-500);
    border-radius: 16px;
    inline-size: 90vw;
    max-inline-size: 414px;
    background-color: var(--card-background);
    padding: 20px;
    z-index: 5;
  }
</style>
