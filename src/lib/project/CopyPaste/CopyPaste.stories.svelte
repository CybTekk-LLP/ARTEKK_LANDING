<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import { CopyPaste } from "..";

    export const meta = {
        title: "Components/Project/CopyPaste",
        component: CopyPaste,
    };
</script>

<Template let:args>
    <CopyPaste {...args} text="Copied to Clipboard"/>
</Template>

<Story name="Main" />
