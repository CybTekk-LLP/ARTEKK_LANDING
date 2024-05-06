<script lang="ts">
  export let isOpen = false;
</script>

<nav>
  <img src="/images/Logo.svg" alt="logo" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="nav-icon" class:open={isOpen} on:click={() => (isOpen = !isOpen)}>
    <span></span>
    <span></span>
  </div>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    padding-inline: 30px;
    padding-block: 30px;
    & > .nav-icon {
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
</style>
