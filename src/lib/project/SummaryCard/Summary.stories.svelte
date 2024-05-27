<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { SummaryCard } from "..";

  export const meta = {
    title: "Components/Project/SummaryCard",
    components: SummaryCard,
  };
</script>

<Template let:args>
  <SummaryCard {...args} />
</Template>

<Story
  name="main"
  args={{
    cardHeading: "Current month summary",
    tableHeadings: ["Plan Name", "Billing Date", "Amount Due", "Last Paid"],
    tableData: [
      {
        planName: "Custom",
        billingDate: new Date().toDateString(),
        amountDue: 3000,
        lastPaid: new Date().toDateString(),
      },
      {
        planName: "Custom",
        billingDate: new Date().toDateString(),
        amountDue: 2300,
        lastPaid: new Date().toDateString(),
      },
      {
        planName: "Custom",
        billingDate: new Date().toDateString(),
        amountDue: 20030,
        lastPaid: new Date().toDateString(),
      },
      {
        planName: "Custom",
        billingDate: new Date().toDateString(),
        amountDue: 30000,
        lastPaid: new Date().toDateString(),
      },
    ],
  }}
/>
