<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { TopBanner } from "..";

  export const meta = {
    title: "Components/UI/TopBanner",
    component: TopBanner,
  };
</script>

<Template let:args>
  <TopBanner {...args} />
</Template>

<Story name="main" args={{ bannerText: "Schedule a meeting with us" }} />
