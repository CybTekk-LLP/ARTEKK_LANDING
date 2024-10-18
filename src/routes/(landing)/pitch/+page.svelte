<script lang="ts">
  import { Typography, Button } from "$lib/ui";
</script>

<main>
  <h1>
    <Typography type="cardTitle">Pitch</Typography>
  </h1>
  <br />
  <img width="100%" height="800px" src="./images/Pitch/Pitch.jpg" alt="pitch" />
  <br /><br /><br />
  <a href="/images/Pitch/ARtekkPitch.pdf" download class="download">
    <Button type="primary" buttonLabel="Download" onClick={() => null} />
  </a>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    inline-size: 90vw;
    margin-inline: auto;
    text-align: center;
    & > h1 {
      text-align: start;
    }
    & > img {
      height: auto;
      border: 1px solid var(--secondary-300);
      border-radius: 10px;
    }
    & > .download {
      display: inline-block;
      inline-size: 300px;
      max-inline-size: 100%;
      text-decoration: none;
    }
  }
</style>
