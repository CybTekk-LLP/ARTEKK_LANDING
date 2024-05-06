<script lang="ts">
  import { Typography } from "$lib/ui";
</script>

<article>
  <Typography type="caption">Furniture</Typography>
  <img height="196px" src="https://picsum.photos/200/300" alt="" />
  <button>Configure</button>
</article>

<style lang="scss">
  article {
    background-color: var(--secondary-500);
    padding: 10px;
    & > img {
      inline-size: 100%;
      object-fit: cover;
      image-rendering: optimizeSpeed;
    }
  }
</style>
