<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { FAQ } from "..";

  export const meta = {
    title: "Components/UI/FAQ",
    component: FAQ,
  };
</script>

<Template let:args>
  <FAQ {...args} />
</Template>

<Story
  name="main"
  args={{
    content: [
      {
        title: "How to know the status of my order?",
        description:
          "StoneTEKK offers real-time order tracking, and also assists the users to monitor their order status in one-go.",
      },
      {
        title: "How to know the status of my order?",
        description:
          "StoneTEKK offers real-time order tracking, and also assists the users to monitor their order status in one-go.",
      },
      {
        title: "How to know the status of my order?",
        description:
          "StoneTEKK offers real-time order tracking, and also assists the users to monitor their order status in one-go.",
      },
      {
        title: "How to know the status of my order?",
        description:
          "StoneTEKK offers real-time order tracking, and also assists the users to monitor their order status in one-go.",
      },
    ],
  }}
/>
