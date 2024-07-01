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
  data-message={messageType}
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
    position: relative;

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
    &[data-message="user"]:last-of-type::after{
      position: absolute;
      content: url("data:image/svg+xml,%3Csvg width='50' height='6.75' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg' fill='%234c32b2'%3E%3Ccircle cx='15' cy='15' r='15'%3E%3Canimate attributeName='r' from='15' to='9' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='fill-opacity' from='1' to='0.5' begin='0s' dur='0.8s' values='1;0.5;1' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='60' cy='15' r='9' fill-opacity='0.3'%3E%3Canimate attributeName='r' from='9' to='15' begin='0s' dur='0.8s' values='9;15;9' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='fill-opacity' from='0.5' to='1' begin='0s' dur='0.8s' values='0.5;1;0.5' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='105' cy='15' r='15'%3E%3Canimate attributeName='r' from='15' to='9' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='fill-opacity' from='1' to='0.5' begin='0s' dur='0.8s' values='1;0.5;1' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3C/svg%3E%0A");
      background-color: var(--secondary-700);
      border-radius: 10px;
      padding: 5px 10px 10px 10px;
      inset-block-start: 20px;
      inset-inline-start: 10px;
    }
  }
  .messageUser {
    justify-content: end;
  }

</style>
