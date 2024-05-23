<script lang="ts">
  import { Typography } from "$lib/ui";
  export let content;
  export let imgSrc;
</script>

<li class="caution-card">
  <img src={imgSrc} alt="" />
  <Typography type="body" _color="var(--danger)">
    {content}
  </Typography>
</li>

<style lang="scss">
  .caution-card {
    inline-size: 100%;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    border-radius: 9px;
    :global(.body) {
      font-size: 12px;
    }
  }
</style>
