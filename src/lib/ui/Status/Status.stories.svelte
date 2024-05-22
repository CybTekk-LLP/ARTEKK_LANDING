<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Status } from "..";

  export const meta = {
    title: "Components/UI/Status",
    component: Status,
  };
</script>

<Template let:args>
  <Status {...args} />
</Template>

<Story name="Active" args={{ statusLabel: "Active", type: "active" }} />
<Story name="Inactive" args={{ statusLabel: "Inactive", type: "inActive" }} />
