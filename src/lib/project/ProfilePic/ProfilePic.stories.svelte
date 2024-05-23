<script context="module" lang="ts">
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import { ProfilePic } from "..";

    export const meta = {
        title: "Components/Project/ProfilePic",
        component: ProfilePic,
    };
</script>

<Template let:args>
    <ProfilePic {...args} userName="laurent"/>
</Template>

<Story name="Main" />
