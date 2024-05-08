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

<Story
  name="Left"
  args={{
    direction: "left",
    heading: "Watches",
    description:
      "Explore our 3D watch feature and find the perfect timepiece that suits your style!",
    img: "./images/FeatureCard/cars.webp",
  }}
/>
<Story
  name="Right"
  args={{
    direction: "right",
    heading: "Watches",
    description:
      "Explore our 3D watch feature and find the perfect timepiece that suits your style!",
    img: "./images/FeatureCard/cars.webp",
  }}
/>
