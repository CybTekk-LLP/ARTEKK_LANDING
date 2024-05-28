<script lang="ts">
  // @ts-ignore
  import { minidenticon } from "minidenticons";

  export let userName = "";
  export let isSmall: boolean | undefined = false;
</script>

<minidenticon-svg class:smallIcon={isSmall} class="avatar" username={userName}
></minidenticon-svg>

<style lang="scss">
  :global(minidenticon-svg svg) {
    border-radius: 50%;
    background-color: grey;
    height: 100px;
    width: 100px;
  }
  .smallIcon {
    :global(svg) {
      height: 30px;
      width: 30px;
    }
  }
</style>
