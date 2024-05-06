<script lang="ts">
  import { Typography } from "$lib/ui";
</script>

<article>
  <Typography type="caption">Furniture</Typography>
  <br />
  <img height="196px" src="https://picsum.photos/200/300" alt="" />
  <br />
  <br />
  <button>Configure</button>
</article>

<style lang="scss">
  article {
    background-color: var(--secondary-500);
    padding: 20px;
    border-radius: 16px;
    & > img {
      inline-size: 100%;
      object-fit: cover;
      image-rendering: optimizeSpeed;
      border-radius: 6px;
    }
  }
</style>
