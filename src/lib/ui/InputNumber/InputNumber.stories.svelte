<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputNumber } from "..";

  export const meta = {
    title: "Components/ui/InputNumber",
    component: "InputNumber",
  };
</script>

<Template let:args>
  <InputNumber {...args} />
</Template>

<Story name="main" args={{}} />
