<script context="module" lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import GalleryCard from "./GalleryCard.svelte";

  export const meta = {
    title: "Components/Project/GalleryCard",
    component: GalleryCard,
  };
</script>

<Template let:args>
  <GalleryCard {...args}></GalleryCard>
</Template>

<Story
  name="photo"
  args={{
    args: { variant: "photo" },
    i18n: { alt: ["support text"] },
    content: { urls: ["https://picsum.photos/400/400"] },
  }}
/>

<Story
  name="video"
  args={{
    args: { variant: "video" },
    i18n: { alt: ["support text"] },
    content: {
      urls: [
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Pauvre_Pierrot_%28Emile_Reynaud%2C_1892%29.webm/Pauvre_Pierrot_%28Emile_Reynaud%2C_1892%29.webm.360p.vp9.webm",
      ],
    },
  }}
/>
