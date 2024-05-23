<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { ProgressBar } from "..";

  export const meta = {
    title: "Components/Project/ProgressBar",
    component: ProgressBar,
  };
</script>

<Template let:args>
  <ProgressBar {...args} />
</Template>

<Story name="main" args={{ value: 40 }} />
