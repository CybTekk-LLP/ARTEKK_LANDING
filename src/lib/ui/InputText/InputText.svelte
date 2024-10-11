<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "../Typography/Typography.svelte";

  export let placeholder: string;
  export let label: string | undefined = undefined;
  export let variant: "text" | "email" | "password";
  export let labelNeeded: boolean | undefined = undefined;
  export let inputField: HTMLInputElement | undefined = undefined;
  export let value: string | undefined;
  export let readonly: boolean | undefined = undefined;
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];
  export let autocomplete = "";
  export let onKeyDown: () => void = () => null;
  const handleInput = (inputField: HTMLInputElement) => {
    if (inputField.value) {
      inputField.checkValidity() && inputField.reportValidity();
    }
  };

  onMount(() => {
    switch (variant) {
      case "text":
        inputField && (inputField.type = "text");
        inputField && (inputField.inputMode = "text");
        break;
      case "email":
        inputField && (inputField.type = "email");
        inputField && (inputField.inputMode = "text");
        break;
      case "password":
        inputField && (inputField.type = "password");
        inputField && (inputField.inputMode = "text");
        break;
      default:
        inputField && (inputField.type = "text");
        inputField && (inputField.inputMode = "text");
    }
  });
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
  type="text"
  id={uniqueId}
  {placeholder}
  {readonly}
  {autocomplete}
  on:invalid={() => inputField && handleInput(inputField)}
  on:keydown={(e) => {
    if (e.key === "Enter" || e.code === "Enter") onKeyDown();
  }}
  bind:value
/>

<style lang="scss">
  .label {
    display: inline-block;
    margin-block-end: 5px;
  }
  input:not(input:-webkit-autofill)::-webkit-contacts-auto-fill-button {
    background-color: var(--primary-900);
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
    outline: var(--transparent);
    &:focus {
      outline: 1px solid var(--primary-900);
    }
    &:invalid {
      outline: 1px solid var(--danger);
    }
  }
</style>
