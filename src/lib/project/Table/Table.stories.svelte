<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Table } from "..";

  export const meta = {
    title: "Components/Project/Table",
    component: Table,
  };
</script>

<Template let:args>
  <Table {...args} />
</Template>

<Story
  name="main"
  args={{
    tableHeadings: {
      headingOne: "Project",
      headingTwo: "Domain",
      headingThree: "Status",
      headingFour: "Action",
    },
    tableData: [
      {
        rowDataOne: "Amazon",
        rowDataTwo: "https://www.amazon.in",
        status: "Active",
      },
      {
        rowDataOne: "Amazon",
        rowDataTwo: "https://www.amazon.in",
        status: "Active",
      },
      {
        rowDataOne: "Amazon",
        rowDataTwo: "https://www.amazon.in",
        status: "Inactive",
      },
    ],
  }}
/>
