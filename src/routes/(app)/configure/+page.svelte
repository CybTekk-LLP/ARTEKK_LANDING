<script lang="ts">
  import { Status, Typography, InputText, Button } from "$lib/ui";
  import { CopyPaste, CautionCard } from "$lib/project";

  let projectName: string;
  let statusActive = false;
</script>

<main>
  <form>
    <Typography type="cardTitle">Configure Your Project</Typography>
    <br /><br />
    <div class="status">
      <div class:tool-label={statusActive}>
        {#if statusActive}
          <Typography type="subtext" _fontweight="400"
            >Use our <Typography
              type="subtext"
              _fontweight="400"
              _color="var(--tertiary-700)"
              renderInline>Generator</Typography
            > Tool for the Code</Typography
          >
        {/if}
      </div>
      <Status
        type={statusActive ? "active" : "inActive"}
        statusLabel={statusActive ? "active" : "InActive"}
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
      <Typography type="subtext" _fontweight="400">
        {statusActive
          ? "Domain (Domain names once approved can’t be changed)"
          : "Authorised Domain"}</Typography
      >
    </p>
    {#each Array(3) as _}
      <div class="domains">
        <InputText
          variant="text"
          placeholder="Theresa Webb"
          bind:value={projectName}
        />
      </div>
    {/each}
    {#if statusActive}
      <!-- <div class="api-key"> -->
      <InputText
        variant="text"
        labelNeeded={true}
        label="Api Key"
        placeholder="XXXXX-XXXXX-XXXXXX"
        bind:value={projectName}
      />
      <CopyPaste />
      <!-- </div> -->
    {:else}
      <br />
      <Button
        type="secondary"
        buttonLabel="Add a new domain"
        iconSrc="/images/Project/Create.svg"
        onClick={() => alert("asfa")}
      />
      <br />
      <CautionCard
        content="Remember you cannot change the Domain and project name after it has been approved, however you can create a new project."
        imgSrc="/images/CautionCard/Caution.svg"
      />
      <br />
      <Button
        type="primary"
        buttonLabel="SAVE MY CHANGES"
        onClick={() => alert("asfa")}
      />
    {/if}
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
      & > .api-key {
        display: flex;
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
