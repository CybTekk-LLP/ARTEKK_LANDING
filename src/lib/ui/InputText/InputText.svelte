<script lang="ts">
  import { onMount } from "svelte";
  export let placeholder: string;
  export let variant: "text" | "email";
  export let inputField: HTMLInputElement | undefined = undefined;
  export let value: string | undefined;
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];

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
      default:
        inputField && (inputField.type = "text");
        inputField && (inputField.inputMode = "text");
    }
  });
</script>

<input
  bind:this={inputField}
  type="text"
  id={uniqueId}
  {placeholder}
  on:invalid={() => inputField && handleInput(inputField)}
  bind:value
/>

<style lang="scss">
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
