<script lang="ts">
    let query = new URL(window.location.href).searchParams.get("load");
    let isMakeup = false;

    let brand = new URL(window.location.href).searchParams.get("brand")
    if (brand === "swati") {
        isMakeup = true;
    }
</script>

{#if isMakeup}
    <div></div>
{/if}

<iframe
    src={`https://cybtekk-llp.github.io/ARTEKK/pages/getting-started.html?load=${query}`}
    allow="camera;accelerometer;gyroscope;xr-spatial-tracking"
    title={query}
    frameborder="0"
></iframe>

<style lang="scss">
    iframe {
        display: block;
        inline-size: 100vw;
        block-size: 100vh;
        overflow: hidden;
    }
    div {
        position: fixed;
        display: block;
        inline-size: 200px;
        block-size: 50px;
        background-image: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 111.39 21.02%27 fill=%27%23292b2c%27><g><path d=%27m110.05 19.44a.51.51 0 0 0 .33-.5.55.55 0 0 0 -.62-.55h-.69v1.74h.36v-.63h.27l.32.63h.39zm-.31-.27h-.31v-.44h.3c.14 0 .29.05.29.22s-.15.22-.28.22z%27/><path d=%27m109.69 17.59a1.7 1.7 0 1 0 1.7 1.7 1.7 1.7 0 0 0 -1.7-1.7zm0 3.09a1.39 1.39 0 0 1 0-2.78 1.39 1.39 0 0 1 0 2.78z%27/><path d=%27m9.9 8.67-2.84-.52c-1.49-.28-2.06-1.15-2.06-2.15 0-1.2 1.22-2.26 3-2.26a3.37 3.37 0 0 1 3.57 2.78l3.83-1.14c-.4-2.57-2.74-5.38-7.46-5.38-3.94 0-7.21 2.71-7.21 6.36 0 3.1 2.14 5.2 5.44 5.86l2.89.57c1.41.29 2.32 1.12 2.32 2.13 0 1.26-1.12 2.3-3.07 2.3a4.1 4.1 0 0 1 -4.38-3.47l-3.93.94c.65 3.86 3.28 6.31 8.18 6.31s7.47-3.2 7.47-6.36c0-2.87-1.98-5.29-5.75-5.97z%27/><path d=%27m77.14 4.4h5.41v16.31h4.19v-16.31h5.43v-4.09h-15.03z%27/><path d=%27m99.55.31h4.22v20.39h-4.22z%27/><path d=%27m66.32.31h-5.08l-7.48 19.59 3.9 1.1 1.73-4.69h8.75l1.76 4.69 3.92-1.13zm-5.55 12.11 3-8 3 8z%27/><path d=%27m30.93 20.71h-4.54l-5.99-20.4h4.51l3.88 14.49 4.4-14.49h4.51l4.4 14.59 4-14.59h4.35l-6 20.4h-4.59l-4.43-14.8z%27/></g></svg>");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 70%;
        background-color: var(--primary-900);
        border-radius: 20px;
        inset-block-start: 20px;
        inset-inline-start: 20px;
    }
</style>
