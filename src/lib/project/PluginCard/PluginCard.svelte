<script lang="ts">
  import { Typography, Button } from "$lib/ui";
</script>

<article>
  <Typography type="caption">Furniture</Typography>
  <br />
  <img height="196px" src="https://picsum.photos/200/300" alt="" />
  <br />
  <br />
  <div class="btn">
    <Button
      type="secondary"
      buttonLabel="View in AR"
      onClick={() => alert("adfgjs")}
    />
  </div>
</article>

<style lang="scss">
  article {
    background-color: var(--secondary-700);
    padding: 20px;
    border-radius: 16px;

    & > img {
      inline-size: 100%;
      object-fit: cover;
      image-rendering: optimizeSpeed;
      border-radius: 6px;
    }
    & > .btn {
      inline-size: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
