<script lang="ts">
  export let placeholder: string;
  export let value: string | undefined;
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];
</script>

<textarea id={uniqueId} {placeholder} bind:value />

<style lang="scss">
  textarea {
    inline-size: 100%;
    block-size: 220px;
    padding: 20px;
    background-color: var(--secondary-700);
    border: none;
    border-radius: 6px;
    font-size: 16px;
    color: var(--primary-900);
    font-family: var(--font);
    font-weight: 400;
    outline: 1px solid var(--secondary-300);
    resize: vertical;
    &:focus {
      outline: 1px solid var(--primary-900);
    }
  }
</style>
