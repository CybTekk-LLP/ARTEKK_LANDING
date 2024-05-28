<script lang="ts">
    let query = new URL(window.location.href).searchParams.get("load");
</script>

<iframe
    src={`https://cybtekk-llp.github.io/ARTEKK/pages/getting-started.html?load=${query}`}
    title={query}
    frameborder="0"
></iframe>

<style lang="scss">
    iframe{
        display: block;
        inline-size: 100vw;
        block-size: 100vh;
        overflow: hidden;
    }
</style>