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
    color: #828282;
    font-family: var(--font);
    font-weight: 400;
    outline: var(--transparent);
  }
</style>
