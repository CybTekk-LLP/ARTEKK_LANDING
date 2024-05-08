<script lang="ts">
  import { Typography } from "..";
  export let value: string[] = [];
  export let content: any;
  let uniqueId = "inputCheckbox" + Math.random().toString().split(".")[1];
</script>

<div class="checkbox-group">
  {#each content ?? [] as option, i}
    <input
      type="checkbox"
      name={uniqueId}
      id={uniqueId + option.title}
      value={option.title}
      bind:group={value}
    />
    <label class="custom-checkbox" for={uniqueId + option.title}>
      <img src={option.imgSrc} alt={option.title} />
      <Typography type="impact">{option.title}</Typography>
    </label>
  {/each}
</div>

<style lang="scss">
  .checkbox-group {
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
      inline-size: 350px;
      @media screen and (width < 768px) {
        inline-size: 100%;
      }
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
      border: 1px solid transparent;
      & > img {
        inline-size: 40px;
        block-size: 30px;
        border-radius: 2px;
        object-fit: cover;
      }
    }
    & > input[type="checkbox"]:checked + label {
      border: 1px solid var(--primary-300);
    }
  }
</style>
