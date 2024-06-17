<script lang="ts">
  import InputText from "../InputText/InputText.svelte";
  import Typography from "../Typography/Typography.svelte";
  let value: string;
  let openChatbox: boolean | undefined = undefined;

  const hideChatbox = () => {
    openChatbox = false;
  };
</script>

<button
  class="chatbox-icon"
  class:hideIcon={openChatbox}
  on:click={() => (openChatbox = true)}
>
  <img src="/images/ChatBox/ChatboxIcon.svg" alt="" />
</button>

<div class="chatbox" class:openChatbox>
  <div class="chatbox-heading">
    <img src="/images/ChatBox/ChatboxImg.svg" alt="" />
    <Typography>ARTEKK Chatbot</Typography>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src="/images/ChatBox/Close.svg"
      alt=""
      on:click|preventDefault={() => hideChatbox()}
    />
  </div>
  <slot />
  <div class="message-box">
    <InputText variant="text" placeholder="Write a question ?" bind:value />
    <img src="/images/ChatBox/Send.svg" alt="" />
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
    }
    & > .message-box {
      position: relative;
      & img {
        position: absolute;
        inset-block-end: 10px;
        inset-inline-end: 10px;
      }
    }
  }
  .openChatbox {
    display: flex;
  }
</style>
