<script context="module" lang="ts">
    import { Template, Story } from "@storybook/addon-svelte-csf";
    import { Button } from "..";
  
    export const meta = {
      title: "Components/UI/Button",
      component: Button
    };
  </script>
  
  <Template let:args>
    <Button {...args} />
  </Template>
  
  <Story name="primary" args={{type: "primary" ,buttonLabel : "GETTING STARTED"}} />
  <Story name="secondary" args={{type: "secondary",buttonLabel : "CONFIGURE"}} />
  