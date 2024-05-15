<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { HealthBar } from "..";

  export const meta = {
    title: "Components/Project/HealthBar",
    component: HealthBar,
  };
</script>

<Template let:args>
  <HealthBar {...args} progressValue="100"></HealthBar>
</Template>

<Story name="main" args={{}} />
