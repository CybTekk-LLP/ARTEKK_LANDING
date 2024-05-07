<script lang="ts">
  import { Navbar, Typography } from "$lib/ui";
  let isOpen = false;
  let year = new Date().getFullYear();
</script>

<main>
  <Navbar bind:isOpen />
  <br /><br />
  <slot />
  <footer>
    <Typography type="subtext" _fontweight="400" _color="var(--primary-500)"
      >Copyright © {year} ARTEKK</Typography
    >
  </footer>
</main>

<style lang="scss">
  main {
    overflow: hidden;
    & > footer {
      text-align: center;
      margin-block: 2rem;
    }
  }
</style>
