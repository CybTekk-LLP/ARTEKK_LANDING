<script lang="ts">
  import { Typography } from "$lib/ui";
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];
</script>

<label for={uniqueId}
  ><Typography type="subtext">Upload Model</Typography></label
>
<div class="dropbox">
  <input type="file" id={uniqueId} accept="*" />
</div>

<style lang="scss">
  label {
    display: inline-block;
    margin-block-end: 5px;
  }
  .dropbox {
    inline-size: 100%;
    block-size: 150px;
    background-color: var(--secondary-700);
    border-radius: 6px;
    display: grid;
    place-items: center;
    & > input {
    }
  }
</style>
