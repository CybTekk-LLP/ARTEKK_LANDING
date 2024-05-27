<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputRadio } from "..";

  export const meta = {
    title: "Components/UI/InputRadio",
    component: InputRadio,
  };
</script>

<Template let:args>
  <InputRadio {...args} />
</Template>

<Story
  name="Main"
  args={{
    projects: [
      "Chat cube",
      "Foodie -3 ",
      "Nykaa 2.0",
      "Blinkit",
      "Swiggy",
      "Foodie",
      "Nykaa 2.0 Nykaa ",
      "wrkble",
    ],
  }}
/>
