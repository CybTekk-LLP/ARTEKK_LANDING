<script lang="ts">
  // @ts-ignore
  import { minidenticon } from "minidenticons";

  export let userName = "";
  export let isSmall: boolean | undefined = false;

  $: svgURI =
    "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(userName));
</script>

<img src={svgURI} alt={userName} class:smallIcon={isSmall} />

<style lang="scss">
  img {
    border-radius: 50%;
    background-color: grey;
    height: 100px;
    width: 100px;
  }
  .smallIcon {
    height: 30px;
    width: 30px;
  }
</style>
