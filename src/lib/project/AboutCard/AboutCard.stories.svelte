<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { AboutCard } from "..";

  export const meta = {
    title: "AboutCard",
    component: AboutCard,
  };
</script>

<Template let:args>
  <AboutCard {...args} />
</Template>

<Story
  name="Main"
  args={{
    heading: "Who we are",
    description:
      " Founded by a team of passionate technologists, creatives, and visionaries, ARTEKK brings together diverse expertise to deliver cutting-edge VR solutions. With backgrounds in gaming, software development, design, and beyond, our team is united by a shared passion for innovation and a commitment to excellence.",
  }}
/>
