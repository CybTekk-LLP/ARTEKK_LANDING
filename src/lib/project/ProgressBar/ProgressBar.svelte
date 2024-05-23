<script lang="ts">
  export let value: number;
</script>

<progress id="bar" {value} max="100"></progress>

<style>
  #bar {
    display: inline-block;
    width: 100%;
    height: 40px;
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
      background-color: #e6e6e6;
      border-radius: 20px;
    }

    &::-webkit-progress-value {
      background: var(
        --progress-bar-bg,
        repeating-linear-gradient(
          45deg,
          #4caf50,
          #4caf50 10px,
          #8bc34a 10px,
          #8bc34a 20px
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
          #4caf50,
          #4caf50 10px,
          #8bc34a 10px,
          #8bc34a 20px
        )
      );
      border-radius: 20px;
      transition: background-color 0.1s ease-out;
    }
  }
</style>
