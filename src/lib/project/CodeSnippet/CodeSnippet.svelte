<script lang="ts">
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import "highlight.js/styles/atom-one-dark.css"; // You can choose any style you like

    export let code: string = "";
    export let language: string | null = null;
    let codeElement: HTMLElement;
    let highlightedCode: string = "";

    onMount(() => {
        if (language) {
            highlightedCode = hljs.highlight(language, code).value;
        } else {
            highlightedCode = hljs.highlightAuto(code).value;
        }
    });
</script>

<pre>
    <code class="hljs" bind:this={codeElement}>{@html highlightedCode}</code>
  </pre>

<style lang="scss">
    pre {
        & > code {
            border-radius: 4px;
        }
    }
</style>
