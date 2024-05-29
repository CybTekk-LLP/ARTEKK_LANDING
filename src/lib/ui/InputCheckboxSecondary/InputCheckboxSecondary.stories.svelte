<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputCheckboxSecondary } from "..";

  export const meta = {
    title: "Components/Ui/InputCheckboxSecondary",
    components: InputCheckboxSecondary,
  };
</script>

<Template let:args>
  <InputCheckboxSecondary {...args} />
</Template>

<Story name="main" args={{ inputLabel: "Projects" }} />
