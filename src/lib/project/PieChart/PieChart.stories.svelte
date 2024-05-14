<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { PieChart } from "..";

  export const meta = {
    title: "Components/Project/PieChart",
    component: PieChart,
  };
</script>

<Template let:args>
  <PieChart {...args} />
</Template>

<Story name="main" />
