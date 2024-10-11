<script lang="ts">
  import { onMount } from "svelte";
  import { InputText, Typography } from "../../ui";
  import { clickOutside } from "$lib/utils";
  export let value: string;
  export let sendMessage: () => void = () => null;
  export let messageEl: HTMLDivElement;
  export let heading: string;

  let dialog: HTMLDialogElement;
  let openChatbox: boolean | undefined = undefined;
  const hideChatbox = () => {
    openChatbox = false;
    dialog.close();
  };
  const handleSendMessage = () => {
    sendMessage();
    value = "";
  };
  const handleClickOutside = () => {
    dialog.close();
    openChatbox = false;
  };
  onMount(() => {
    dialog.addEventListener("click_outside", () => {
      handleClickOutside();
    });
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="chatbox-icon"
  role="button"
  tabindex="0"
  aria-label="open chatbot"
  aria-live="polite"
  class:hideIcon={openChatbox}
  on:click={() => {
    openChatbox = true;
    dialog.show();
  }}
>
  <img
    src="/images/ChatBox/AI.gif"
    alt="chat bot assistant"
    height="40px"
    width="40px"
    draggable="false"
  />
</div>

<dialog bind:this={dialog} class="dialog" use:clickOutside>
  <div class="chatbox">
    <div class="chatbox-heading">
      <img src="/images/ChatBox/AI.gif" alt="" height="40px" width="40px" draggable="false" />
      <Typography type="body">{heading}</Typography>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        src="/images/ChatBox/Close.svg"
        alt=""
        on:click|preventDefault={() => hideChatbox()}
      />
    </div>
    <div class="message" bind:this={messageEl}>
      <slot />
    </div>
    <div class="input-message-box">
      <InputText
        variant="text"
        placeholder="Having any doubts ?"
        bind:value
        onKeyDown={() => {
          if (value) handleSendMessage();
        }}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        src="/images/ChatBox/Send.svg"
        alt=""
        on:click={() => {
          if (value) handleSendMessage();
        }}
        draggable="false"
      />
    </div>
  </div>
</dialog>

<style lang="scss">
  .chatbox-icon {
    background-color: var(--card-background);
    padding-inline: 10px;
    padding-block-start: 10px;
    padding-block-end: 5px;
    inline-size: max-content;
    border: none;
    border-radius: 50% 50% 50% 0%;
    margin: 15px;
    position: fixed;
    inset-block-end: 0;
    inset-inline-end: 0;
    cursor: pointer;
    z-index: 4;
    & > img {
      object-fit: cover;
      border-radius: 50%;
      @media (prefers-reduced-motion) {
        content: url("/images/ChatBox/AI.png");
      }
    }
  }
  .hideIcon {
    display: none;
  }

  .dialog {
    background-color: var(--card-background);
    block-size: 852px;
    max-block-size: 50vh;
    inline-size: 400px;
    max-inline-size: 80%;
    border: 1px solid var(--primary-900);
    border-radius: 10px;
    position: fixed;
    inset-block-end: 0;
    inset-inline-end: 0;
    outline: 2px solid var(--transparent);
    padding: 15px;
    margin: 5px;
    margin-inline-start: auto;
    z-index: 4;
    .chatbox {
      inline-size: 100%;
      block-size: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > .chatbox-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        padding-block: 8px;
        & > img {
          object-fit: cover;
          border-radius: 50%;
          @media (prefers-reduced-motion) {
            content: url("/images/ChatBox/AI.png");
          }
        }
      }
      & > .message {
        overflow-y: scroll;
        scrollbar-width: none;
        block-size: 100%;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      & > .input-message-box {
        position: relative;
        & img {
          position: absolute;
          inset-block-end: 10px;
          inset-inline-end: 10px;
          cursor: pointer;
        }
      }
    }
  }
</style>
