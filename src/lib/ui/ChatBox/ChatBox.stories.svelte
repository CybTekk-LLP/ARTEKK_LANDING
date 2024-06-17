<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { ChatBox } from "..";

  export const meta = {
    title: "Components/UI/ChatBox",
    component: ChatBox,
  };
</script>

<Template let:args>
  <ChatBox {...args} />
</Template>

<Story name="Main" args={{}} />
