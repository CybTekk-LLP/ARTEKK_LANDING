<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import hljs, { type HighlightOptions } from "highlight.js";
  import "highlight.js/styles/atom-one-dark.css"; // You can choose any style you like

  export let code: string = "";
  export let language: string | null = null;
  export let highlightCode: (code: string) => void = () => null;
  // @ts-ignore
  let codeElement: HTMLElement;
  let highlightedCode: string = "";

  highlightCode = (code: string) => {
    if (language) {
      highlightedCode = hljs.highlight(language, code).value;
    } else {
      highlightedCode = hljs.highlightAuto(code).value;
    }
  };

  onMount(() => {
    highlightCode(code);
  });
</script>

<pre>
  <code class="hljs" bind:this={codeElement}>
 <svg
      width="46"
      height="12"
      viewBox="0 0 46 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="#E54F48" />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.93152 8.92543C9.25671 8.60023 9.25671 8.05091 8.9447 7.73451L7.20886 5.99427L8.9447 4.26283C9.25671 3.94642 9.25671 3.39271 8.93152 3.06752C8.60193 2.73793 8.05261 2.74232 7.73621 3.05433L6.00037 4.78578L4.26013 3.04994C3.9613 2.75111 3.39001 2.73353 3.06482 3.06312C2.73962 3.38832 2.75281 3.95961 3.05164 4.25843L4.79187 5.99427L3.05164 7.7389C2.75281 8.03773 2.73962 8.60463 3.06482 8.92982C3.39001 9.25941 3.9613 9.24623 4.26013 8.943L6.00037 7.20277L7.73621 8.93861C8.05261 9.25502 8.60193 9.25502 8.93152 8.92543Z"
        fill="#430300"
      />
    <circle
        cx="6"
        cy="6"
        r="6"
        transform="matrix(-1 0 0 1 46 0)"
        fill="#27C93F"
      />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.9998 5.62161C42.9999 5.1761 42.4612 4.95296 42.1462 5.26802L39.2681 8.14673C38.9532 8.4617 39.1763 9.00018 39.6217 9.00024L41.9995 9.0006C42.5518 9.0006 42.9995 8.55288 42.9995 8.0006L42.9998 5.62161Z"
        fill="#003A09"
      />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.9984 3.00053C37.4461 3.00053 36.9984 3.44825 36.9984 4.00053L36.9988 6.37852C36.9988 6.82388 37.5372 7.04693 37.8522 6.73208L40.7318 3.85381C41.0469 3.53883 40.8237 3.00011 40.3782 3.00018L37.9984 3.00053Z"
        fill="#003A09"
      />
    <circle cx="23" cy="6" r="6" fill="#FFBD2E" />
    <rect
        x="18.9004"
        y="5.09961"
        width="8.2"
        height="1.8"
        rx="0.9"
        fill="#503700"
      />
    </svg>      
    {@html highlightedCode}
 </code>
  </pre>

<style lang="scss">
  pre {
    & > code {
      border-radius: 4px;
      & > svg {
        translate: 0 -12px;
        & > path {
          opacity: 0;
        }
        & > rect {
          opacity: 0;
        }
        &:hover {
          & > path {
            opacity: 1;
          }
          & > rect {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
