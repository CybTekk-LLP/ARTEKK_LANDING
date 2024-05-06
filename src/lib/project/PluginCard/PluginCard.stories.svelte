<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { PluginCard } from "..";

  export const meta = {
    title: "PluginCard",
    component: PluginCard,
  };
</script>

<Template let:args>
  <PluginCard {...args} />
</Template>

<Story name="main" args={{}} />
