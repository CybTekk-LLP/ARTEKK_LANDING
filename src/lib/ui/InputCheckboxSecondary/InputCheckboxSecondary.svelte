<script lang="ts">
  import { Typography } from "..";
  export let inputLabel: string;
  export let checked: boolean;
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];
</script>

<label for={uniqueId} class:checked
  ><Typography
    type="subtext"
    _color={checked ? "var(--secondary-900)" : "var(--primary-900)"}
    >{inputLabel}</Typography
  ></label
>
<input class="checkbox" id={uniqueId} type="checkbox" bind:checked />

<style>
  label {
    display: inline-block;
    background-color: var(--secondary-700);
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 6px;
    &.checked {
      background-color: var(--primary-900);
    }
  }
  .checkbox {
    display: none;
  }
</style>
