<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import { ApexCharts } from "..";

    export const meta = {
        title: "Components/Project/ApexCharts",
        component: ApexCharts,
    };
</script>

<Template let:args>
    <ApexCharts {...args} />
</Template>

<Story name="Main" />
