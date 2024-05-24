<script lang="ts">
  export let text = "";

  let isAnimating = false;
  const copyToClipboard = () => {
    isAnimating = true;
    navigator.clipboard.writeText(text);

    setTimeout(() => {
      isAnimating = false;
    }, 3000);
  };
</script>

<a href="/" on:click|preventDefault={copyToClipboard}>
  <svg
    class:animate={isAnimating}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4403_26084"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white" />
    </mask>
    <g mask="url(#mask0_4403_26084)">
      <path
        d="M3.83465 16.1458V16.875C3.83465 18.1694 4.88398 19.2188 6.1784 19.2188H16.875C18.1695 19.2188 19.2187 18.1694 19.2187 16.875V6.19789C19.2187 4.90348 18.1695 3.85414 16.875 3.85414H16.1654M0.78125 13.8021V3.125C0.78125 1.83055 1.83059 0.781252 3.125 0.781252H13.8216C15.1161 0.781252 16.1654 1.83055 16.1654 3.125V13.8021C16.1654 15.0965 15.1161 16.1458 13.8216 16.1458H3.125C1.83059 16.1458 0.78125 15.0965 0.78125 13.8021Z"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      class="hide"
      d="M15 4L6.19269 13L2 8.71565"
      stroke="#00D03A"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</a>

<style lang="scss">
  a {
    text-decoration: none;
    & > svg {
      &.animate {
        & path:not(.hide) {
          opacity: 0;
        }
      }
      &:not(.animate) {
        & > path {
          &.hide {
            opacity: 0;
          }
        }
      }
    }
  }
</style>
