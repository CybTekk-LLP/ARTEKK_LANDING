<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { CautionCard } from "..";

  export const meta = {
    title: "Components/Project/Caution Card",
    component: CautionCard,
  };
</script>

<Template let:args>
  <CautionCard {...args} />
</Template>

<Story
  name="Main"
  args={{
    content:
      "Remember you cannot change the Domain and project name after it has been approved, however you can create a new project.",
    imgSrc: "/images/CautionCard/Caution.svg",
  }}
/>
