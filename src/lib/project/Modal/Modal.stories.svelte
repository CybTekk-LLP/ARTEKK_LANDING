<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Modal } from "..";
  import { Typography, Button } from "./../../ui";

  export const meta = {
    title: "Components/Project/Modal",
    component: Modal,
  };
</script>

<Template let:args>
  <Modal {...args}>
    <Typography type="heading">This is Modal</Typography>
    <br />
    <Button type="primary" buttonLabel="Buy" onClick={() => alert("sdafg")} />
  </Modal>
</Template>

<Story name="main" args={{}} />
