<script lang="ts">
  import Button from "$lib/ui/Button/Button.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  export let direction: "left" | "right";
  export let heading: string;
  export let description: string;
  export let img: string;
  export let onClick = () => null;
</script>

<div class="featured-card" class:right={direction === "right"}>
  <div class="content">
    <Typography type="cardTitle">{heading}</Typography>
    <div aria-hidden="true"></div>
    <Typography type="body">{description}</Typography>
    <div aria-hidden="true"></div>
    <Button
      iconSrc="./images/Button/Icon.svg"
      buttonLabel="VIEW IN AR"
      type="secondary"
      {onClick}
    />
  </div>
  <div class="images">
    <img src={img} alt={heading} height="360px" />
    <img src={img} alt={heading} height="360px" />
  </div>
</div>

<style lang="scss">
  .featured-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin: 10px;
    &.right {
      flex-direction: row-reverse;
    }
    & > .content {
      max-inline-size: 440px;
      @media screen and (width < 768px) {
        inline-size: 100%;
      }
      & > div {
        margin-block: 14px;
      }
    }
    & > .images {
      position: relative;
      & > img {
        @media screen and (width < 768px) {
          max-inline-size: 100%;
        }
        &:last-of-type {
          position: absolute;
          inset-inline-start: 0;
        }
        &:first-of-type {
          rotate: 8deg;
          animation: shuffle 1.3s ease;
        }
        @keyframes shuffle {
          0% {
            rotate: 8deg;
          }
          10% {
            rotate: -4deg;
          }
          40% {
            rotate: 8deg;
          }
          60% {
            rotate: 0deg;
          }
          100% {
            rotate: 8deg;
          }
        }
      }
    }
  }
</style>
