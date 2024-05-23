<script lang="ts">
  import { Status, Typography, InputText, Button } from "$lib/ui";

  let projectName: string;
  let status: "active" | "inActive";
</script>

<main>
  <form>
    <Typography type="cardTitle">Configure Your Project</Typography>
    <br /><br />
    <div class="status">
      <div class="tool-label">
        <Typography type="subtext" _fontweight="400"
          >Use our <Typography
            type="subtext"
            _fontweight="400"
            _color="var(--tertiary-700)"
            renderInline>Generator</Typography
          > Tool for the Code</Typography
        >
      </div>
      <Status
        type={status !== "active" ? "inActive" : "active"}
        statusLabel={status !== "active" ? "InActive" : "active"}
      />
    </div>
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
      & > .status {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .tool-label {
          border: 1px solid var(--secondary-500);
          border-radius: 10px;
          padding-inline: 16px;
          padding-block: 8px;
        }
      }
      & > .domain-label {
        margin-block-end: 5px;
      }

      & > .domains {
        margin-block-end: 10px;
      }
    }
  }
</style>
