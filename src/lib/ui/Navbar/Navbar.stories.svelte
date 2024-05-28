<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Navbar } from "..";

  export const meta = {
    title: "Components/UI/Navbar",
    component: Navbar,
  };

  let navOptions = [
    { name: "About", href: "/about", target: "" },
    { name: "Collections", href: "/collections", target: "" },
    { name: "Pricing", href: "/pricing", target: "" },
    { name: "Contact", href: "/contact", target: "" },
    { name: "FAQ", href: "/faq", target: "" },
  ];
</script>

<Template let:args>
  <Navbar {...args} />
</Template>

<Story
  name="main"
  args={{
    logo: "/images/Home/Logo.svg",
    navOptions: navOptions,
  }}
/>
