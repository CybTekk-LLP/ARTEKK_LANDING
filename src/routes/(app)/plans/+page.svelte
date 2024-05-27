<script lang="ts">
  import { ApexCharts, SummaryCard } from "$lib/project";
  import { Typography } from "$lib/ui";
  import InputRadio from "$lib/ui/InputRadio/InputRadio.svelte";

  let options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: true,
        tools: {
          download: false, // Hides the download option
          selection: true, // Shows the selection option
          zoom: true, // Shows the zoom option
          zoomin: true, // Shows the zoom-in option
          zoomout: true, // Shows the zoom-out option
          pan: false, // Shows the pan option
          reset: false, // Shows the reset option
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: "#ffffff", // Change x-axis label color
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ffffff", // Change x-axis border color
      },
      axisTicks: {
        show: true,
        color: "#ffffff", // Change x-axis ticks color
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // Change y-axis label color
          fontSize: "12px",
        },
      },
      //   axisBorder: {
      //     show: true,
      //     color: "#ffffff", // Change y-axis border color
      //   },
      axisTicks: {
        show: true,
        color: "#ffffff", // Change y-axis ticks color
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      marker: {
        fillColors: ["#9a89ff"],
      },
      theme: "dark",
    },

    colors: ["#9a89ff"],
  };
</script>

<main>
  <Typography type="cardTitle">Monthly API calls</Typography>
  <br />
  <InputRadio
    projects={[
      "Chat cube",
      "Foodie -3 ",
      "Nykaa 2.0",
      "Blinkit",
      "Swiggy",
      "Foodie",
      "Nykaa 2.0 Nykaa ",
      "wrkble",
    ]}
    selectedProject="Swiggy"
  />
  <br />
  <br />
  <section class="analytics">
    <ApexCharts bind:options />
    <div class="card">
      <SummaryCard
        cardHeading="Current Month Summary"
        tableHeadings={["Plan Name", "Billing Date", "Amount Due", "Last Paid"]}
        tableData={[
          {
            planName: "Custom",
            billingDate: new Date().toLocaleString().slice(0, 9),
            amountDue: 3000,
            lastPaid: new Date().toLocaleString().slice(0, 9),
          },
          {
            planName: "Custom",
            billingDate: new Date().toLocaleString().slice(0, 9),
            amountDue: 2300,
            lastPaid: new Date().toLocaleString().slice(0, 9),
          },
        ]}
      />
    </div>
  </section>
  <br />
  <section class="payment-history">
    <Typography type="caption" _fontweight="700">Payment History</Typography>
    <br />
    <ul class="payments-table headings">
      <li>
        <Typography type="subtext" _color="var(--secondary-300)"
          >Date</Typography
        >
      </li>
      <li>
        <Typography type="subtext" _color="var(--secondary-300)"
          >Plan</Typography
        >
      </li>
      <li>
        <Typography type="subtext" _color="var(--secondary-300)"
          >Amount</Typography
        >
      </li>
    </ul>
    <br />
    {#each Array(4) as _}
      <ul class="payments-table">
        <li>
          <Typography type="subtext"
            >{new Date().toLocaleString().slice(0, 9)}</Typography
          >
        </li>
        <li>
          <Typography type="subtext">Custom</Typography>
        </li>
        <li>
          <Typography type="subtext">20000</Typography>
        </li>
      </ul>
      <br />
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    inline-size: 90vw;
    margin-inline: auto;
    padding-block-start: 70px;
    & > .analytics {
      display: grid;
      grid-template-columns: auto 40%;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 50px;
      @media screen and (width < 950px) {
        display: block;
        & > .card {
          max-inline-size: 500px;
          inline-size: 100%;
        }
      }
    }
    & > .payment-history {
      & > ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        &.headings {
          & > li:nth-of-type(2) {
            padding-inline-start: 20px;
          }
        }
      }
    }
  }
</style>
