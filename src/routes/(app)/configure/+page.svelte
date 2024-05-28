<script lang="ts">
  import { Status, Typography, InputText, Button } from "$lib/ui";
  import { CopyPaste, CautionCard, DropBox } from "$lib/project";

  let projectName: string;
  let domainValue: string[] = ["domain One", "doman Two", "domain Three"];
  let apikey: string;
  let fileArray: string[] = [];
  let files: string[] = [];
  let domainCount = 0;
  let fileInfo: Record<string, any>;

  let statusActive = true;
  const addInput = () => {
    domainCount++;
  };

  const addFilesToArray = () => {
    if (fileInfo?.files[0]?.name) {
      fileArray.push(fileInfo.files[0]?.name);
      files = fileArray;
    }
  };
  const deleteFileFromArray = (deleteFileIndex: any) => {
    files = files.filter((_, index) => index !== deleteFileIndex);
    fileArray = files;
  };
  $: load = files;
  $: domainCount = domainValue.length;
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
        statusLabel={statusActive ? "active" : "inactive"}
      />
    </div>
    <br />
    <br />
    <InputText
      variant="text"
      labelNeeded={true}
      label="Project Name (2-32 Characters)"
      placeholder="Theresa Webb"
      readonly={statusActive}
      bind:value={projectName}
    />
    <br />
    <br />
    <p class="domain-label">
      <Typography type="subtext" _fontweight="400">
        {statusActive
          ? "Authorised Domain"
          : "Domain (Domain names once approved can’t be changed)"}</Typography
      >
    </p>
    {#each Array(domainCount) as _, i}
      <div class="domains">
        <InputText
          variant="text"
          placeholder="Theresa Webb"
          readonly={statusActive}
          bind:value={domainValue[i]}
        />
      </div>
    {/each}
    <div class="apiKey-copy-extra" aria-hidden="true" style:display="none">
      <CopyPaste bind:text={apikey} />
    </div>
    {#if statusActive}
      <div class="apiLabel-key">
        <InputText
          variant="text"
          labelNeeded={true}
          label="Api Key"
          placeholder="XXXXX-XXXXX-XXXXXX"
          bind:value={apikey}
        />
        <div class="apiKey-copy">
          <CopyPaste bind:text={apikey} />
        </div>
      </div>
      <br />
      <div class="drop-box">
        <Typography type="subtext" _fontweight="400">Upload model</Typography>
        <DropBox bind:fileInfo onChange={() => addFilesToArray()} />
      </div>
      {#if files.length}
        <Typography type="subtext" _fontweight="400"
          >Uploaded model link</Typography
        >
        <br />
      {/if}
      {#each load ?? [] as file, i}
        <div class="apiLabel-key">
          <InputText
            variant="text"
            labelNeeded={false}
            placeholder="XXXXX-XXXXX-XXXXXX"
            bind:value={file}
          />
          <div class="upload-model-link">
            <CopyPaste text={file} />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
              on:click|preventDefault={() => deleteFileFromArray(i)}
              src="/images/Cancel.svg"
              alt=""
            />
          </div>
        </div>
        <br />
      {/each}
    {:else}
      <Button
        type="secondary"
        buttonLabel="Add a new domain"
        iconSrc="/images/Project/Create.svg"
        onClick={() => addInput()}
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
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 10px;
        align-items: center;

        & > .tool-label {
          border: 1px solid var(--secondary-500);
          border-radius: 10px;
          padding-inline: 16px;
          padding-block: 8px;
        }
      }
      & > .drop-box {
        inline-size: 100%;
      }
      & > .apiLabel-key {
        position: relative;
        display: block;
        & > .apiKey-copy {
          position: absolute;
          top: 55%;
          right: 20px;
        }
        & > .upload-model-link {
          position: absolute;
          top: 25%;
          right: -20px;
          & > img {
            padding-inline-start: 15px;
          }
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
