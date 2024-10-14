<script lang="ts">
  import type {
    IGalleryCardI18n,
    IGalleryCardContent,
    IGalleryCardArgs,
  } from "../../types";
  import { PUBLIC_BASE_URI } from "$env/static/public";

  export let content: IGalleryCardContent;
  export let args: IGalleryCardArgs;
  export let i18n: IGalleryCardI18n;

  let isMuted = true;
  let currentTime = 0;
  let duration = 0;
  let video: HTMLVideoElement;
  let parentEl: HTMLDivElement;

  function formatTimestamp(seconds: number) {
    if (typeof seconds !== "number" || seconds < 0) {
      return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }
</script>

<div class="parent" bind:this={parentEl}>
  {#if args.variant === "photo"}
    <img class={args.variant} src={content.urls[0]} alt={i18n.alt[0]} />
  {/if}

  {#if args.variant === "video"}
    <div
      class={args.variant}
      role="button"
      on:click={() => {
        isMuted = !isMuted;
      }}
      on:keydown={(e) => {
        if (e.key === " ") isMuted = !isMuted;
      }}
      tabindex="0"
    >
      <video
        src={content.urls[0]}
        muted={isMuted}
        autoplay
        playsinline
        bind:this={video}
        bind:currentTime
        bind:duration
      >
        <p>{i18n.alt[0]}</p>
        <track kind="captions" />
      </video>
      <img
        class={args.variant}
        src={isMuted
          ? "/images/GalleryCard/VolumeMuted.svg"
          : "/images/GalleryCard/VolumeIcon.svg"}
        alt={isMuted ? "muted volume icon" : "volume icon"}
        height="20px"
      />

      <p class={args.variant}>
        {formatTimestamp(~~duration - ~~currentTime)}
      </p>
    </div>
  {/if}
</div>

<style lang="scss">
  :global(.pinch-zoom-container) {
    block-size: 400px;
    overflow: auto;
  }
  .parent {
    overflow: auto;
  }
  img.photo {
    inline-size: 100%;
    block-size: 500px;
    object-fit: cover;
  }
  div {
    position: relative;
  }

  video {
    inline-size: 100%;
    object-fit: cover;
    block-size: 500px;
  }
  img.video {
    position: absolute;
    display: block;
    box-sizing: content-box;
    z-index: 1;
    width: 20px;
    inset-block-end: 20px;
    inset-inline-end: 20px;
    background-color: #11192885;
    border-radius: 5px;
    padding: 5px;
  }
  p.video {
    position: absolute;
    inset-block-start: 20px;
    inset-inline-end: 20px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    filter: drop-shadow(16px 16px 20px #111928);
    font-family: var(--body-font);
  }
  video::-webkit-media-controls-overlay-play-button {
    display: none;
  }
</style>
