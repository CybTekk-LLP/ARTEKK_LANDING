<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import { Accordion } from "..";

    export const meta = {
        title: "Components/UI/Accordion",
        component: Accordion,
    };
</script>

<Template let:args>
    <Accordion {...args} title="Summary Title" data={["dribble", "amazon", "nike", "oracle"]}/>
</Template>

<Story name="Main" />
