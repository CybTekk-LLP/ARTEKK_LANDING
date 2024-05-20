<script lang="ts">
  import { Typography } from "..";
  export let buttonLabel: string;
  export let type: "primary" | "secondary" = "primary";
  export let onClick: () => void;
  export let iconSrc: string | undefined = undefined;

  let button: HTMLButtonElement;

  function createRipple(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.classList.add("ripple");
    circle.setAttribute(
      "style",
      `width:${diameter}px; height: ${diameter}px;left: ${event.clientX - button.offsetLeft - radius}px; top:${event.clientY - button.offsetTop - radius}px; position: absolute;display: inline-block;border-radius: 50%;transform: scale(0);background-color: rgba(255, 255, 255, 0.7);`
    );
    circle.animate(
      [
        { transform: "scale(0)", opacity: 0.7 },
        { transform: "scale(4)", opacity: 0 },
      ],
      {
        duration: 600,
        iterations: 1,
      }
    );
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }
    //  @ts-ignore
    button?.appendChild(circle);
  }
</script>

<button
  bind:this={button}
  on:click={(e) => {
    onClick();
    if (type === "primary") createRipple(e);
  }}
  class="button primary"
  class:secondary={type === "secondary"}
>
  {#if iconSrc}
    <img src={iconSrc} alt="icon" />
  {/if}
  <Typography type="impact" _fontweight="700">{buttonLabel}</Typography>
</button>

<style lang="scss">
  .primary {
    inline-size: 100%;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: var(--primary-900);
    font-weight: 700;
    background-color: #6200ee;
    background-image: linear-gradient(to right, #0a0030, #2a002e);
    padding: 15px 20px;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow:
      1px 1px 2px 0px #000,
      0px 6px 12px 0px #000,
      0px 1px 2px 0px rgba(255, 255, 255, 0.1) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.24) inset;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    &.secondary {
      background: var(--transparent);
      box-shadow: unset;
      border: 1px solid var(--primary-900);
      border-radius: 4px;
    }
    & :global(.impact) {
      font-size: clamp(0.75rem, 0.6786rem + 0.3571vw, 1rem);
    }
  }
</style>
