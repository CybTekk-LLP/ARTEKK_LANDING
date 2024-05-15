<script lang="ts">
  import { onMount } from "svelte";

  export let progressValue;
  let progressBar: HTMLProgressElement;

  onMount(() => {
    progressBar.value = progressValue;

    if (progressValue > 50) {
      progressBar.style.setProperty(
        "--progress-bar-bg",
        "repeating-linear-gradient(45deg, #0000FF, #0000FF 10px, #1E90FF 10px, #1E90FF 20px)"
      );
    } else if (progressValue > 20) {
      progressBar.style.setProperty(
        "--progress-bar-bg",
        "repeating-linear-gradient(45deg, #FFFF00, #FFFF00 10px, #FFD700 10px, #FFD700 20px)"
      );
    } else {
      progressBar.style.setProperty(
        "--progress-bar-bg",
        "repeating-linear-gradient(45deg, #FF0000, #FF0000 10px, #B22222 10px, #B22222 20px)"
      );
    }
  });
</script>

<progress id="bar" bind:this={progressBar} value="0" max="100"></progress>

<style lang="scss">
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
  }

  progress::-webkit-progress-bar {
    background-color: #e6e6e6;
    border-radius: 20px;
  }

  progress::-webkit-progress-value {
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

  progress::-moz-progress-bar {
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
</style>
