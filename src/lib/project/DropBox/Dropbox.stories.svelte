<script lang="ts" context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { DropBox } from "..";

  export const meta = {
    title: "Components/Project/DropBox",
    component: DropBox,
  };
</script>

<Template let:args>
  <DropBox {...args} />
</Template>

<Story name="main" args={{}} />
