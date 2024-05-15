<script lang="ts">
  import { Camera } from "$lib/project";
</script>

<main class="camera">
  <Camera />
</main>

<style lang="scss">
  .camera + :global(footer) {
    display: none;
  }
</style>
