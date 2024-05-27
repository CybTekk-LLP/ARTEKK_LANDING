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
  <section class="analytics">
    <ApexCharts bind:options />
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
      grid-template-columns: repeat(2, auto);
      align-items: center;
      @media screen and (width < 900px) {
        grid-template-columns: 100%;
      }
    }
  }
</style>
