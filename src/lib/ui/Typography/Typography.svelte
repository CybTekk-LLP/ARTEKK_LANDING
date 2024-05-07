<script lang="ts">
  export let type:
    | "heading"
    | "caption"
    | "body"
    | "impact"
    | "disabled"
    | string = "body";
  export let renderInline = false;
  export let disabled = false;
  export let _color: string | undefined = undefined;
  export let _fontweight: string | undefined = undefined;
</script>

<span
  class={`typography ${type} ${!renderInline && "block"} ${disabled && "disabled"}`}
  style={_color && `color: ${_color}`}
  style:font-weight={_fontweight}
>
  <slot />
</span>

<style lang="scss">
  .typography {
    font-family: var(--font);
    word-break: break-word;
    leading-trim: both;
    color: var(--primary-900);

    &.block {
      display: block;
    }
    &.heading {
      font-size: clamp(2rem, 1.1429rem + 4.2857vw, 5rem);
      font-weight: 700;
    }
    &.cardTitle {
      font-size: 2rem;
      font-weight: 700;
    }
    &.caption {
      font-size: 1.5rem;
      font-weight: 600;
    }
    &.body {
      font-size: 1.25rem;
      font-weight: 400;
    }

    &.impact {
      font-size: 1rem;
      font-weight: 400;
    }
    &.subtext {
      font-size: 0.75rem;
      font-weight: 600;
    }

    &.disabled {
      color: var(--hover);
      pointer-events: none;
    }
  }
</style>
