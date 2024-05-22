<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputText } from "..";

  export const meta = {
    title: "Components/UI/InputText",
    component: InputText,
  };
</script>

<Template let:args>
  <InputText {...args} />
</Template>

<Story name="main" args={{ variant: "text", placeholder: "Name" }} />
<Story name="email" args={{ variant: "email", placeholder: "Email" }} />
<Story
  name="withLabel"
  args={{
    labelNeeded: true,
    label: "Email",
    variant: "email",
    placeholder: "Email",
  }}
/>
