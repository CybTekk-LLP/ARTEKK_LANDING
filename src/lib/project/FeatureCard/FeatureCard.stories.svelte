<script context="module" lang="ts">
    import { Template, Story } from "@storybook/addon-svelte-csf";
    import { FeatureCard } from "..";
  
    export const meta = {
      title: "Components/Project/FeatureCard",
      component: FeatureCard,
    };
  </script>
  
  <Template let:args>
    <FeatureCard {...args} />
  </Template>
  
  <Story name="main" />
  