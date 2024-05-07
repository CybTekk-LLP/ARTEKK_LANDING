<script lang="ts">
  import { Typography } from "$lib/ui";
  import Button from "$lib/ui/Button/Button.svelte";
  export let planLabel: string;
  export let amount: string;
  export let description: string;
  export let onClick = () => {};
</script>

<article>
  <div class="pricing">
    <Typography type="body">{planLabel}</Typography>
    <Typography type="heading">{amount}</Typography>
    <ul class="description">
      <Typography type="impact" _color="var(--primary-700)"
        ><li>{description}</li></Typography
      >
    </ul>
    <Button type="secondary" buttonLabel="CONFIGURE" {onClick}></Button>
  </div>
</article>

<style lang="scss">
  article {
    background: var(--secondary-700);
    border-radius: 16px;
    & > .pricing {
      padding: 20px;
      inline-size: 90%;
      margin-inline: auto;
      display: grid;
      gap: 25px;
    }
    li {
      list-style-image: url('data:image/svg+xml,<svg width="16" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.521423 4.31994L3.5083 7.19994L9.48142 1.43994" stroke="%23D9D9D9" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      list-style-position: inside;
    }
  }
</style>
