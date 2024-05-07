<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { TextArea } from "..";

  export const meta = {
    title: "Components/UI/TextArea",
    component: TextArea,
  };
</script>

<Template let:args>
  <TextArea {...args} />
</Template>

<Story name="main" args={{ placeholder: "Description" }} />
