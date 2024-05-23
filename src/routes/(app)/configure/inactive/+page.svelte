<script lang="ts">
  import { Status, Typography, InputText, Button } from "$lib/ui";

  let projectName: string;
</script>

<main>
  <form>
    <Typography type="cardTitle">Configure Your Project</Typography>
    <br /><br />
    <Status type="inActive" statusLabel="Inactive" />
    <br />
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      label="Project Name (2-32 Characters)"
      placeholder="Theresa Webb"
      bind:value={projectName}
    />
    <br />
    <br />
    <p class="domain-label">
      <Typography type="subtext" _fontweight="400"
        >Domain (Domain names once approved can’t be changed)</Typography
      >
    </p>
    {#each Array(5) as _}
      <div class="domains">
        <InputText
          variant="text"
          placeholder="Theresa Webb"
          bind:value={projectName}
        />
      </div>
    {/each}
    <br />
    <Button
      type="secondary"
      buttonLabel="Add a new domain"
      iconSrc="/images/Project/Create.svg"
      onClick={() => alert("asfa")}
    />
    <br />
    <Button
      type="primary"
      buttonLabel="SAVE MY CHANGES"
      onClick={() => alert("asfa")}
    />
  </form>
</main>

<style lang="scss">
  main {
    & > form {
      margin-block-start: 100px;
      max-inline-size: 550px;
      inline-size: 90vw;
      margin-inline: auto;
      & > .domain-label {
        margin-block-end: 5px;
      }
      & > .domains {
        margin-block-end: 10px;
      }
    }
  }
</style>
