<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { PricingCard } from "..";

  export const meta = {
    title: "Components/Project/PricingCard",
    component: PricingCard,
  };
</script>

<Template let:args>
  <PricingCard {...args} />
</Template>

<Story
  name="main"
  args={{
    planLabel: "Starter",
    amount: "₹4Lakhs",
    description: "Choose any 3 AR models ",
    onClick: () => alert("Button clicked"),
    buttonType: "secondary",
  }}
/>
