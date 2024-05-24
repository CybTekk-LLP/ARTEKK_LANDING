<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Suggestion } from "..";

  export const meta = {
    title: "Components/Project/Suggestion",
    component: Suggestion,
  };
</script>

<Template let:args>
  <Suggestion {...args} />
</Template>

<Story name="main" args={{ value: 60 }} />
