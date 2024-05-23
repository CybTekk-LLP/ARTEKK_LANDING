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
    background: var(--secondary-700);
    border-radius: 16px;
    padding-inline: 16px;
    padding-block: 20px;
    margin-inline: auto;
    display: grid;
    gap: 24px;
    & > .card-header {
      white-space: nowrap;
    }
  }
  li {
    // list-style-image: url('data:image/svg+xml,<svg width="16" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.521423 4.31994L3.5083 7.19994L9.48142 1.43994" stroke="%23D9D9D9" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    // list-style-position: inside;
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-block-end: 10px;
  }
</style>
