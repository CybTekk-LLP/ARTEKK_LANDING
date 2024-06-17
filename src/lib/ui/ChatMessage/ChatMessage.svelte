<script lang="ts">
  import Typography from "../Typography/Typography.svelte";
  export let messageType: string;
  messageType = "user";
</script>

<div class="chat-message" class:messageUser={messageType === "user"}>
  <p class="message" class:message-heading-user={messageType === "user"}>
    <Typography type="subtext"
      >Hello, I would like to know more about the pricing plans of ARTEKK.</Typography
    >
  </p>
  <p class:chat-time={messageType === "user"}>
    <Typography type="subtext">9:23</Typography>
  </p>
</div>

<style lang="scss">
  .chat-message {
    inline-size: 100%;
    display: grid;

    & > .message {
      background-color: var(--secondary-700);
      padding-block: 12px;
      padding-inline: 16px;
      border-radius: 10px;
      inline-size: max-content;
      margin-block: 5px;
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
