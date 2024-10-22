<script lang="ts">
  import { Typography } from "..";

  export let placeholder: string;
  export let inputField: HTMLInputElement | undefined = undefined;
  export let value: number | undefined;
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];
  export let autocomplete = "";
  export let label: string | undefined = undefined;
  export let labelNeeded: boolean | undefined = false;

  const handleInput = (inputField: HTMLInputElement) => {
    if (inputField.value) {
      inputField.checkValidity() && inputField.reportValidity();
    }
  };
</script>

{#if labelNeeded}
  <label class="label" for={uniqueId}>
    <Typography type="subtext" _fontweight="400">
      {label}
    </Typography>
  </label>
{/if}
<input
  bind:this={inputField}
  type="number"
  id={uniqueId}
  {placeholder}
  on:invalid={() => inputField && handleInput(inputField)}
  bind:value
  {autocomplete}
/>

<style lang="scss">
  .label {
    display: inline-block;
    margin-block-end: 5px;
  }
  input:is([type="number"])::-webkit-outer-spin-button,
  input:is([type="number"])::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  input:is([type="number"]) {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input {
    inline-size: 100%;
    block-size: 42px;
    background: var(--secondary-700);
    border: none;
    border-radius: 6px;
    padding-inline: 20px;
    font-size: 16px;
    color: var(--primary-900);
    font-family: var(--font);
    font-weight: 400;
    outline: 1px solid var(--secondary-300);
    &:focus {
      outline: 1px solid var(--primary-900);
    }
    &:invalid {
      outline: 1px solid var(--danger);
    }
  }
</style>
