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
  name="Main"
  args={{
    message:
      "Hello, I would like to know more about the pricing plans of ARTEKK.",
    messageTime: "9:21",
    messageType: "",
  }}
/>
<Story
  name="User"
  args={{
    message:
      "Hello, I would like to know more about the pricing plans of ARTEKK.",
    messageTime: "9:21",
    messageType: "user",
  }}
/>
