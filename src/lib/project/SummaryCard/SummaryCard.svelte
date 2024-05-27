<script lang="ts">
  import { Typography } from "$lib/ui";

  export let cardHeading: string;
  export let tableHeadings: string[] = [];
  export let tableData: ISummaryData[] = [];

  interface ISummaryData {
    planName: string;
    billingDate: string;
    amountDue: number;
    lastPaid: string;
  }
</script>

<div class="card">
  <Typography type="body">{cardHeading}</Typography>
  <br />
  <ul class="table-headings">
    {#each tableHeadings as heading}
      <li>
        <Typography type="subtext" _color="var(--secondary-500)"
          >{heading}</Typography
        >
      </li>
    {/each}
  </ul>
  <br />
  <ul class="table-data">
    {#each tableData as data}
      <li>
        <Typography type="subtext" _fontweight="700">{data.planName}</Typography
        >
      </li>
      <li>
        <Typography type="subtext" _fontweight="700"
          >{data.billingDate}</Typography
        >
      </li>
      <li>
        <Typography type="subtext" _fontweight="700"
          >{data.amountDue}</Typography
        >
      </li>
      <li>
        <Typography type="subtext" _fontweight="700">{data.lastPaid}</Typography
        >
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .card {
    border: 1px solid var(--secondary-500);
    padding: 20px;
    border-radius: 6px;
    & > .table-headings {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    & > .table-data {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      list-style: none;
      gap: 10px;
    }
  }
</style>
