<script lang="ts">
  import { Typography } from "./../../ui";
  export let heading: string;
  export let description: string;
</script>

<div class="card">
  <Typography type="heading" _color="var(--primary-900)">{heading}</Typography>
  <Typography type="body" _color="var(--primary-500)">
    {@html description}
  </Typography>
</div>

<style lang="scss">
  .card {
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    gap: 20px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
    @media screen and (width <= 768px) {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
</style>
