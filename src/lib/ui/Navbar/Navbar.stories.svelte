<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Navbar } from "..";

  export const meta = {
    title: "Navbar",
    component: Navbar,
  };
</script>

<Template let:args>
  <Navbar {...args} />
</Template>

<Story name="main" args={{}} />
