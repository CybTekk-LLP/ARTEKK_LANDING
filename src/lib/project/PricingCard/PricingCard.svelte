<script lang="ts">
  import { Typography } from "$lib/ui";
  import Button from "$lib/ui/Button/Button.svelte";
  export let planLabel: string;
  export let amount: string;
  export let descriptions: string[] = [];
  export let buttonLabel: string;
  export let buttonType: "secondary" | "primary";
  export let onClick = () => {};
</script>

<div class="pricing">
  <div class="card-header">
    <Typography type="body">{planLabel}</Typography>
    <Typography type="cardTitle">{amount}</Typography>
  </div>
  <ul class="description">
    {#each descriptions as description}
      <li>
        <img src="/images/Pricing/Tick.svg" alt="" />
        <Typography type="impact" _color="var(--primary-700)">
          {description}</Typography
        >
      </li>
    {/each}
  </ul>
  <Button type={buttonType} {buttonLabel} {onClick}></Button>
</div>

<style lang="scss">
  .pricing {
    inline-size: 100%;
    block-size: max-content;
    background: var(--secondary-700);
    border-radius: 16px;
    padding-inline: 25px;
    padding-block: 20px;
    margin-inline: auto;
    line-height: 1.4;
    display: grid;
    gap: 24px;
    box-shadow: inset 0 2px var(--secondary-500);
    & > .card-header {
      white-space: nowrap;
    }
  }
  li {
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-block-end: 10px;
  }
</style>
