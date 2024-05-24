<script lang="ts">
  import { Typography } from "..";
  export let statusLabel: string;
  export let type: "active" | "inActive";
</script>

<p class:active={type === "active"}>
  <Typography type="subtext">{statusLabel}</Typography>
</p>

<style lang="scss">
  p {
    display: inline-block;
    background-color: var(--secondary-500);
    padding-inline: 12px;
    padding-block: 5px;
    border-radius: 25px;
    text-transform: capitalize;
    white-space: nowrap;
    &.active {
      background-color: var(--tertiary-900);
    }
  }
</style>
