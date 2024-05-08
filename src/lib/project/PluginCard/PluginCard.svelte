<script lang="ts">
  import { Typography, Button } from "./../../ui";
  export let cardHeading: string;
  export let imgSrc: string;
  export let buttonLabel: string;
  export let clickHandler: () => void;
  export let iconSrc: string;
</script>

<article>
  <Typography type="caption">{cardHeading}</Typography>
  <br />
  <img height="196px" src={imgSrc} alt="plugin" />
  <br />
  <br />
  <div class="btn">
    <Button {iconSrc} type="secondary" {buttonLabel} onClick={clickHandler} />
  </div>
</article>

<style lang="scss">
  article {
    background-color: var(--secondary-700);
    padding: 20px;
    border-radius: 16px;
    padding-block-start: 25px;
    & :global(.caption) {
      line-height: 0.7;
    }

    & > img {
      inline-size: 100%;
      object-fit: cover;
      image-rendering: optimizeSpeed;
      border-radius: 6px;
    }
    & > .btn {
      inline-size: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
