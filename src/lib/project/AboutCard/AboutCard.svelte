<script lang="ts">
  import { Typography } from "./../../ui";
  export let heading: string;
  export let description: string;
</script>

<div class="card">
  <Typography type="heading" _color="var(--secondary-500)">{heading}</Typography
  >
  <Typography type="body" _color="var(--primary-500)">
    {description}
  </Typography>
</div>

<style lang="scss">
  .card {
    display: grid;
    grid-template-columns: 40% auto;
    align-items: center;
    gap: 20px;
    @media screen and (width <= 768px) {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
</style>
