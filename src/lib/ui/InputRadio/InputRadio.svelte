<script lang="ts">
  import { Typography } from "..";
  export let value: string[] = [];
  export let content: any;
  let uniqueId = "inputRadio" + Math.random().toString().split(".")[1];
</script>

<div class="radio-group">
  {#each content ?? [] as option, i}
    <input
      type="checkbox"
      name={uniqueId + i}
      id={uniqueId + i}
      value={option.title}
      multiple
      bind:group={value}
    />
    <label class="custom-radio" for={uniqueId + i}>
      <img src={option.imgSrc} alt={option.title} />
      <Typography type="impact" _color="var(--outline)" _fontweight="400"
        >{option.title}</Typography
      >
    </label>
  {/each}
</div>

<style lang="scss">
  .radio-group {
    display: flex;
    inline-size: 100%;
    flex-wrap: wrap;
    border-radius: 6px;
    gap: 16px;
    text-transform: capitalize;
    & > input {
      display: none;
    }
    & > label {
      background-color: var(--secondary-700);
      max-inline-size: 100%;
      min-inline-size: 323px;
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
      border: 1px solid transparent;
      & > img {
        inline-size: 40px;
        block-size: 24px;
        border-radius: 2px;
      }
    }
    & > input[type="checkbox"]:checked + label {
      border: 1px solid var(--primary-300);
    }
  }
</style>
