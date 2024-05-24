<script lang="ts">
  // @ts-ignore
  import { minidenticon } from "minidenticons";

  export let userName = "";
</script>

<minidenticon-svg username={userName}></minidenticon-svg>

<style lang="scss">
  :global(minidenticon-svg svg) {
    border-radius: 50%;
    background-color: grey;
    height: 100px;
    width: 100px;
  }
</style>
