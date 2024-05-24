<script lang="ts">
  let files: File[] = [];
  export let fileInfo: Record<string, any> = { files: files, fileSize: 1 };

  let dragTimer: NodeJS.Timeout;
  let fileInput: HTMLInputElement;
  let isDropping = false;
  export let onChange: () => void;

  const handleFileInput = () => {
    const { files: selectedFiles } = fileInput;
    if (selectedFiles !== null) {
      for (let file of selectedFiles) {
        fileInfo.files = [file];
      }
    }
    onChange();
    fileInput.value = "";
  };

  function handleDragOver(event: DragEvent) {
    const dt = event.dataTransfer;
    // @ts-ignore
    if (
      dt?.types &&
      (dt.types.indexOf
        ? dt.types.indexOf("Files") !== -1
        : // @ts-ignore
          dt.types.contains("Files"))
    ) {
      for (let file of dt.files) {
        fileInfo.files = [file];
      }
      isDropping = true;
      clearTimeout(dragTimer);
    }
  }

  function handleFileDrop() {
    dragTimer = setTimeout(() => {
      isDropping = false;
    }, 25);
  }

  function handleDragLeave() {
    dragTimer = setTimeout(() => {
      isDropping = false;
    }, 25);
  }
</script>

<svelte:window
  on:dragover|preventDefault={handleDragOver}
  on:dragleave|preventDefault={handleDragLeave}
  on:drop={handleFileDrop}
/>
<section class="file-upload">
  <button
    class="file-upload-btn"
    type="button"
    on:click={() => fileInput.click()}
  >
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.8438 30.8564H37.8203C41.8761 30.8564 45.1641 27.5685 45.1641 23.5127C45.1641 19.4567 42.2433 16.1689 38.1875 16.1689C38.1875 12.1129 34.8995 8.8252 30.8438 8.8252C29.9693 8.8252 29.142 9.00402 28.3641 9.28464C26.3446 6.78446 23.2923 5.15332 19.8281 5.15332C13.7444 5.15332 8.8125 10.0852 8.8125 16.1689C4.75673 16.1689 1.83594 19.4567 1.83594 23.5127C1.83594 27.5685 5.12392 30.8564 9.17969 30.8564H16.1562"
        stroke="#F0F0F0"
        stroke-width="1.7625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.8438 30.8564H37.8203C41.8761 30.8564 45.1641 27.5685 45.1641 23.5127C45.1641 19.4567 42.2433 16.1689 38.1875 16.1689C38.1875 12.1129 34.8995 8.8252 30.8438 8.8252C29.9693 8.8252 29.142 9.00402 28.3641 9.28464C26.3446 6.78446 23.2923 5.15332 19.8281 5.15332C13.7444 5.15332 8.8125 10.0852 8.8125 16.1689C4.75673 16.1689 1.83594 19.4567 1.83594 23.5127C1.83594 27.5685 5.12392 30.8564 9.17969 30.8564H16.1562"
        stroke="#F0F0F0"
        stroke-width="1.7625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.5 41.8455V19.8408"
        stroke="#F0F0F0"
        stroke-width="1.7625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9922 24.5881L22.2018 20.3785C22.9187 19.6616 24.0813 19.6616 24.7982 20.3785L29.0078 24.5881"
        stroke="#F0F0F0"
        stroke-width="1.7625"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <br /><br />
    Drag and drop your model here or <u>browse</u>
  </button>
  <div class="image-upload-wrap" class:image-dropping={isDropping}>
    <input
      class="file-upload-input"
      bind:this={fileInput}
      type="file"
      on:change={handleFileInput}
      accept="*"
    />
    <h3 class="drag-text">Drop it here!</h3>
  </div>
</section>

<style lang="scss">
  .file-upload {
    max-width: 600px;
    inline-size: 100%;
    margin: 0 auto;
    padding-block: 20px;
  }

  .file-upload-btn {
    width: 100%;
    margin: 0;
    color: var(--white);
    background: var(--secondary-700);
    border: none;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.2s ease;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    padding: 50px;

    &:hover {
      background: var(--secondary-500);
      color: var(--white);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    &:active {
      border: 0;
      transition: all 0.2s ease;
    }
  }

  .file-upload-content {
    display: none;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    left: 0;
    opacity: 0;
  }

  .image-upload-wrap {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 4px dashed transparent;
    position: absolute;
    cursor: default;
    display: none;
  }

  .image-dropping {
    display: block;
    background-color: rgba(31, 178, 100, 0.1);
    border: 4px dashed var(--primary-900);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    .drag-text {
      color: var(--primary-900);
    }
  }

  .image-title-wrap {
    padding: 0 15px 15px 15px;
    color: var(--secondary-700);
  }

  .drag-text {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    pointer-events: none;
    text-transform: uppercase;
    color: transparent;
  }

  .file-upload-image {
    max-height: 200px;
    max-width: 200px;
    margin: auto;
    padding: 20px;
  }
</style>
