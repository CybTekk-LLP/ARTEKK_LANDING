<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputCheckbox } from "..";

  export const meta = {
    title: "Components/UI/InputCheckbox",
    component: InputCheckbox,
  };
</script>

<Template let:args>
  <InputCheckbox {...args} />
</Template>

<Story
  name="main"
  args={{
    content: [
      {
        imgSrc: "./images/InputRadio/Shoes.svg",
        title: "Shoes",
      },
      {
        imgSrc: "./images/InputRadio/Clothes.svg",
        title: "Clothes",
      },
      {
        imgSrc: "./images/InputRadio/Gloves.svg",
        title: "Gloves",
      },
      {
        imgSrc: "./images/InputRadio/Car.svg",
        title: "Cars",
      },
      {
        imgSrc: "./images/InputRadio/Watches.svg",
        title: "Watches",
      },
    ],
  }}
/>
