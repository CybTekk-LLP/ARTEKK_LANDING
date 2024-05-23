<script lang="ts">
  import { Typography } from "$lib/ui";
  export let content;
  export let imgSrc;
</script>

<li class="caution-card">
  <img src={imgSrc} alt="" />
  <Typography type="body">
    {content}
  </Typography>
</li>

<style lang="scss">
  .caution-card {
    inline-size: 100%;
    background-color: var(--danger-translucent);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 16px;
    border-radius: 6px;
    :global(.body) {
      font-size: 12px;
    }
  }
</style>
