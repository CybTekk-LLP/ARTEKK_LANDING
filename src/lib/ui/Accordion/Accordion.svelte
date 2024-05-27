<script lang="ts">
  import { stringToColor } from "../../utils";
  import { Typography } from "..";
  export let title: string;
  export let data: string[] = [];
</script>

<details>
  <summary
    ><Typography type="subtext" renderInline={true}>{title}</Typography
    ></summary
  >
  {#each data as datum}
    <p><span style={`color: ${stringToColor(datum)}`}>•</span> {datum}</p>
  {/each}
</details>

<style lang="scss">
  p {
    display: flex;
    align-items: center;
    inline-size: max-content;
    padding-inline-start: 20px;
    margin: 10px;
    border: 1px solid var(--secondary-700);
    padding: 5px 20px;
    border-radius: 5px;
    & > span {
      font-size: 1rem;
      margin-inline-end: 5px;
    }
  }
</style>
