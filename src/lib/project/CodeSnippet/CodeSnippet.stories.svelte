<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import { CodeSnippet } from "..";

    export const meta = {
        title: "Components/Project/CodeSnippet",
        component: CodeSnippet,
    };
</script>

<Template let:args>
    <CodeSnippet {...args} code={"<div>Hello, world!</div>"} language="html"/>
</Template>

<Story name="Main" />
