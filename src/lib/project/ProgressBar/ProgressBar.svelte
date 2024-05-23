<script lang="ts">
  export let value: number;
</script>

<progress id="bar" {value} max="100"></progress>

<style lang="scss">
  #bar {
    display: inline-block;
    width: 100%;
    height: 10px;
    border-radius: 20px;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  progress {
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 20px;

    &::-webkit-progress-bar {
      background-color: var(--primary-500);
      border-radius: 20px;
    }

    &::-webkit-progress-value {
      background: var(
        --progress-bar-bg,
        repeating-linear-gradient(
          45deg,
          var(--tertiary-900),
          var(--tertiary-900) 10px,
          var(--tertiary-700) 10px,
          var(--tertiary-700) 20px
        )
      );
      border-radius: 20px;
      transition: background-color 0.1s ease-out;
    }

    &::-moz-progress-bar {
      background: var(
        --progress-bar-bg,
        repeating-linear-gradient(
          45deg,
          var(--tertiary-900),
          var(--tertiary-900) 10px,
          var(--tertiary-700) 10px,
          var(--tertiary-700) 20px
        )
      );
      border-radius: 20px;
      transition: background-color 0.1s ease-out;
    }
  }
</style>
