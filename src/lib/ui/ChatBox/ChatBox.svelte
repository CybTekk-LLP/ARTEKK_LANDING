<script lang="ts">
  import InputText from "../InputText/InputText.svelte";
  import Typography from "../Typography/Typography.svelte";
  export let value: string;
  let openChatbox: boolean | undefined = undefined;
  export let sendMessage: () => void;

  const hideChatbox = () => {
    openChatbox = false;
  };
  const handleSendMessage = () => {
    value = "";
    sendMessage();
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="chatbox-icon"
  class:hideIcon={openChatbox}
  on:click={() => (openChatbox = true)}
>
  <img src="/images/ChatBox/ChatboxIcon.svg" alt="" />
</div>

<div class="chatbox" class:openChatbox>
  <div class="chatbox-heading">
    <img src="/images/ChatBox/ChatboxImg.svg" alt="" />
    <Typography type="body">ARTEKK Chatbot</Typography>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src="/images/ChatBox/Close.svg"
      alt=""
      on:click|preventDefault={() => hideChatbox()}
    />
  </div>
  <div class="message">
    <slot />
  </div>
  <div class="input-message-box">
    <InputText
      variant="text"
      placeholder="Write a question ?"
      bind:value
      onKeyDown={() => handleSendMessage()}
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src="/images/ChatBox/Send.svg"
      alt=""
      on:click={() => handleSendMessage()}
    />
  </div>
</div>

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
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 0;
    cursor: pointer;
  }
  .hideIcon {
    display: none;
  }

  .chatbox {
    block-size: 852px;
    max-block-size: 70vh;
    inline-size: 400px;
    max-inline-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--primary-900);
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 0;
    display: none;

    & > .chatbox-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      padding-block: 8px;
      & > img {
        cursor: pointer;
      }
    }
    & > .message {
      overflow-y: scroll;
      scrollbar-width: none;
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
  .openChatbox {
    display: flex;
  }
</style>
