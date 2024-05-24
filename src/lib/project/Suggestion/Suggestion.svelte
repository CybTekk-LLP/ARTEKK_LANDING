<script lang="ts">
  import Typography from "$lib/ui/Typography/Typography.svelte";

  let suggestonNameArray: string[] = [
    "lovelysehotra_123",
    "sehotra_234",
    "lovely_dft",
    "sehotra",
    "lovely",
    "sehotra",
  ];
</script>

<div class="suggestion">
  {#each suggestonNameArray as suggestonName}
    <p>
      <Typography type="subtext" _fontweight="400">{suggestonName}</Typography>
    </p>
  {/each}
</div>

<style lang="scss">
  .suggestion {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    & > p {
      border: 1px solid var(--secondary-700);
      border-radius: 4px;
      padding-inline: 10px;
      padding-block: 5px;
      margin: 5px;
      cursor: pointer;
    }
  }
</style>
