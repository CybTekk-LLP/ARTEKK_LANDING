<script lang="ts">
  import { Typography } from "./../../ui";
  export let heading: string;
  export let description: string;
</script>

<div class="card">
  <h1 class="heading">
    <Typography type="heading" _color="var(--secondary-500)"
      >{heading}</Typography
    >
  </h1>
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
    & > .heading {
      &:hover {
        :global(.typography) {
          color: var(--primary-900) !important;
        }
      }
    }
    @media screen and (width <= 768px) {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
</style>
