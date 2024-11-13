<script lang="ts">
  import { Typography, Button } from "./../../ui";
  export let cardHeading: string;
  export let subHeading: string;
  export let imgSrc: string;
  export let buttonLabel: string;
  export let clickHandler: () => void;
  export let iconSrc: string;
</script>

<article>
  <Typography type="caption">{cardHeading}</Typography>
  <br />
  <Typography type="subtext" _fontweight="400">{subHeading}</Typography>
  <br />
  <img src={imgSrc} alt="plugin" />
  <br />
  <br />
  <div class="btn">
    <Button {iconSrc} type="secondary" {buttonLabel} onClick={clickHandler} />
  </div>
</article>

<style lang="scss">
  article {
    inline-size: 100%;
    block-size: 100%;
    background-color: var(--secondary-700);
    padding: 20px;
    border-radius: 16px;
    padding-block-start: 25px;
    box-shadow: inset 0 1px var(--secondary-500);

    & :global(.caption) {
      line-height: 0.7;
    }

    & > img {
      inline-size: 100%;
      object-fit: cover;
      image-rendering: optimizeSpeed;
      aspect-ratio: 16/9;
      border-radius: 6px;
    }
    & > .btn {
      inline-size: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
