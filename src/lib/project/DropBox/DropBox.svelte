<script lang="ts">
  import { Typography } from "./../../ui";
  import { ProgressBar } from "..";
  export let uniqueId = "inputText" + Math.random().toString().split(".")[1];

  let files: File[] = [];
  let imgSrc: string;
  let DropBoxLabel: string;
  let dropbox: HTMLElement;

  export let fileInfo: Record<string, any> = { files: files, fileSize: 1 };
  export let onFileInput: (file: File) => Promise<void>;
  export let uploadingProgress: number = 0;
  export let isUploading: boolean;

  const handleFileInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    //@ts-ignore
    const { files: selectedFiles } = input;
    if (selectedFiles !== null) {
      for (let file of selectedFiles) {
        fileInfo.files = [file];
        onFileInput(file);
      }
    }
    input.value = "";
  };

  const handleFileDrop = (event: DragEvent) => {
    const droppedFiles = event.dataTransfer;
    if (droppedFiles !== null) {
      for (let file of droppedFiles.files) {
        fileInfo.files = [file];
        onFileInput(file);
      }
    }
    dropbox.style.display = "none";
  };

  $: if (uploadingProgress === 0) {
    imgSrc = "/images/DropBox/Add.svg";
    DropBoxLabel = "Drag And Drop Your Model Here";
  } else if (uploadingProgress > 0 && uploadingProgress < 100) {
    imgSrc = "/images/DropBox/Uploading.svg";
    DropBoxLabel = "Uplaoding Your Model";
  } else if (uploadingProgress === 100) {
    imgSrc = "/images/DropBox/Completed.svg";
    DropBoxLabel = "Model Successfully uploaded";
  }

  setTimeout(() => {
    uploadingProgress = 50;
  }, 3000);

  setTimeout(() => {
    uploadingProgress = 100;
  }, 8000);
</script>

<svelte:window on:drop|preventDefault={handleFileDrop} />
<div class="dropbox-wrapper" bind:this={dropbox} data-drop={"drop-wrapper"}>
  <div class="dropbox">
    <label for={uniqueId}
      ><img src={imgSrc} alt="add" />
      <Typography type="body">{DropBoxLabel}</Typography></label
    >
    <div class="progress">
      <ProgressBar value={uploadingProgress} />
    </div>

    <input type="file" id={uniqueId} accept="*" on:change={handleFileInput} />
  </div>
</div>

<style lang="scss">
  //   .dropbox-wrapper {
  //     position: fixed;
  //     display: none;
  //     inset-block-start: 0;
  //     inset-inline-start: 0;
  //     inline-size: 100vw;
  //     block-size: 100vh;
  //     background-color: rgba(31, 178, 100, 0.1);
  //     border: 4px dashed var(--secondary-300);
  //     -webkit-backdrop-filter: blur(10px);
  //     backdrop-filter: blur(10px);
  //     z-index: 1;
  //     &:before {
  //       content: attr(data-drop);
  //       color: var(--secondary-300);
  //       font-family: var(--body-font);
  //       font-size: 2rem;
  //       position: absolute;
  //       inset-block-start: 50%;
  //       inset-inline-start: 50%;
  //       -webkit-transform: translate(-50%, -50%);
  //       -moz-transform: translate(-50%, -50%);
  //       -o-transform: translate(-50%, -50%);
  //       transform: translate(-50%, -50%);
  //     }
  //   }
  .dropbox {
    inline-size: 100%;
    min-block-size: 150px;
    background-color: var(--secondary-700);
    border-radius: 6px;
    display: grid;
    place-items: center;
    padding-inline: 40px;
    padding-block: 20px;
    label {
      display: inline-block;
      margin-block-end: 5px;
      text-align: center;
      cursor: pointer;
    }
    & > input {
      display: none;
    }
    & > .progress {
      max-inline-size: 350px;
      inline-size: 100%;
    }
  }
</style>
