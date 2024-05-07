<script lang="ts">
  import { Typography } from "..";
  export let buttonLabel: string;
  export let type: "primary" | "secondary" = "primary";
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="button primary"
  class:secondary={type === "secondary"}
>
  <Typography type="impact" _fontweight="700">{buttonLabel}</Typography>
</button>

<style lang="scss">
  .primary {
    inline-size: 100%;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: var(--primary-900);
    font-weight: 700;
    background-color: #6200ee;
    background-image: linear-gradient(to right, #0a0030, #2a002e);
    padding: 1rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow:
      1px 1px 2px 0px #000,
      0px 6px 12px 0px #000,
      0px 1px 2px 0px rgba(255, 255, 255, 0.1) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.24) inset;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    &.secondary {
      background: var(--transparent);
      box-shadow: unset;
      border: 1px solid var(--primary-900);
      border-radius: 4px;
    }
  }
</style>
