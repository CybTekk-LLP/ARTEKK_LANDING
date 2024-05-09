<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Camera } from "..";

  export const meta = {
    title: "Components/Project/Camera",
    component: Camera,
  };
</script>

<Template let:args>
  <Camera {...args} />
</Template>

<Story name="Main" args={{}} />
