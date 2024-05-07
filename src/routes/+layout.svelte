<script lang="ts">
  import { Navbar } from "$lib/ui";
  let isOpen = false;
</script>

<main>
  <Navbar bind:isOpen />
  <br /><br />
  <slot />
</main>
