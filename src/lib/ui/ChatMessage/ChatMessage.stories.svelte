<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { ChatMessage } from "..";

  export const meta = {
    title: "Components/UI/ChatMessage",
    component: ChatMessage,
  };
</script>

<Template let:args>
  <ChatMessage {...args} />
</Template>

<Story
  name="primary"
  args={{
    type: "primary",
    buttonLabel: "GETTING STARTED",
    onClick: () => alert("clicked"),
  }}
/>
