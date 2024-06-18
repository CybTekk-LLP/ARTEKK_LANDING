<script lang="ts">
  import { Typography } from "../../ui";
  export let messageType: string;
  export let message: string;
  export let messageTime: string;
  export let index: number;
</script>

<div
  class="chat-message"
  class:messageUser={messageType === "user"}
  id={"chat-" + index}
>
  <p class="message" class:message-heading-user={messageType === "user"}>
    <Typography type="subtext">{message}</Typography>
  </p>
  <p class:chat-time={messageType === "user"}>
    <Typography type="subtext">{messageTime}</Typography>
  </p>
</div>

<style lang="scss">
  .chat-message {
    inline-size: 100%;
    display: grid;
    margin-block: 8px;

    & > .message {
      background-color: var(--secondary-700);
      padding-block: 12px;
      padding-inline: 16px;
      border-radius: 10px;
      min-inline-size: 220px;
      max-inline-size: max-content;
      margin-block-end: 4px;
    }
    & > .message-heading-user {
      background-color: var(--brand-300);
    }
    & > .chat-time {
      text-align: end;
    }
  }
  .messageUser {
    justify-content: end;
  }
</style>
