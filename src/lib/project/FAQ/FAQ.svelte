<script lang="ts">
  import { Typography } from "$lib/ui";
  export let content: any;
</script>

{#each content ?? [] as faq}
  <details>
    <summary>
      <Typography type="impact">{faq.title}</Typography>
    </summary>
    <p>
      <Typography type="impact" _color="var(--primary-700)"
        >{faq.description}</Typography
      >
    </p>
  </details>
{/each}

<style lang="scss">
  details {
    position: relative;
    margin-inline: 1rem;
    border: 1px solid var(--transparent);
    margin-block: 0.8rem;
    &[open] {
      padding-bottom: 1em;
      border: 1px solid var(--primary-300);
      &::after {
        content: url("/images/FAQ/minus.svg");
        position: absolute;
        inset-inline-end: 15px;
        inset-block-start: 15px;
        pointer-events: none;
      }
      & > summary {
        border: 1px solid var(--transparent);
        & :global(.impact) {
          color: #924df3;
        }
      }
    }
    &::after {
      content: url("/images/FAQ/plus.svg");
      position: absolute;
      inset-inline-end: 15px;
      inset-block-start: 15px;
      pointer-events: none;
    }
    & > summary::before,
    & > summary::after {
      -webkit-transition: 200ms;
      -o-transition: 200ms;
      -moz-transition: 200ms;
      transition: 200ms;
    }
    & > summary {
      padding-block: 12px;
      padding-inline: 16px;
      border: 1px solid var(--secondary-500);
      cursor: pointer;
      padding-inline-end: 50px;
      &::-webkit-details-marker {
        display: none;
      }
    }
    & > summary::marker {
      content: none;
    }
    & > p {
      padding-inline: 1em;
    }
  }
</style>
