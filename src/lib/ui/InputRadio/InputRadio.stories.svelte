<script context="module" lang="ts">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { InputRadio } from "..";

  export const meta = {
    title: "Components/UI/InputRadio",
    component: InputRadio,
  };
</script>

<Template let:args>
  <InputRadio {...args} />
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
        imgSrc: "./images/InputRadio/Shoes.svg",
        title: "Clothes",
      },
      {
        imgSrc: "./images/InputRadio/Shoes.svg",
        title: "Gloves",
      },
      {
        imgSrc: "./images/InputRadio/Shoes.svg",
        title: "Cars",
      },
      {
        imgSrc: "./images/InputRadio/Shoes.svg",
        title: "Watches",
      },
    ],
  }}
/>
