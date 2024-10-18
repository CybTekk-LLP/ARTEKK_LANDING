<script lang="ts">
  import { ChatBox, ChatMessage } from "$lib/project";
  import { Navbar, Footer } from "$lib/ui";
  import { onMount } from "svelte";
  import * as apiService from "$lib/services/api.service";
  let isOpen = false;
  let isSignedIn = true;
  let userName = "Gourav";
  let chatbox: any = [];
  let chat = [];
  let messageEl: HTMLDivElement;
  let value: "";

  const handleChatMessage = async () => {
    chat.push({
      message: value,
      messageType: "user",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
    let data;
    try {
      data = await apiService.chatboxMessage(value);
      if (!data) throw new Error("failed to generate message");
    } catch {
      data = {
        response:
          "Oh, that's unfortunate. The Chatbot might be down at the moment, you can send us a contact message in the meanwhile.",
      };
    }
    chat.push({
      message: data.response,
      messageType: "ai",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
    setTimeout(() => {
      const element = messageEl.lastElementChild;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 800);
  };

  onMount(() => {
    chat.push({
      message: "Hi am your AI assistant for ARTekk, drop me any questions!",
      messageType: "ai",
      messageTime: new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(Date.now()),
    });
    chatbox = chat;
  });
</script>

<main>
  <div class="nav-bar">
    <Navbar
      bind:isOpen
      bind:isSignedIn
      bind:userName
      logo={"/images/Logo/Logo.svg"}
      navOptions={[
        { name: "About", href: "/about", target: "" },
        { name: "Products", href: "/products", target: "" },
        { name: "Samples", href: "/samples", target: "" },
        { name: "Pricing", href: "/pricing", target: "" },
        { name: "Pitch", href: "/pitch", target: "" },
        { name: "FAQ", href: "/faq", target: "" },
        { name: "Contact", href: "/contact", target: "" },
      ]}
    />
  </div>
  <slot />
  <br /><br /><br />
  <ChatBox
    heading="Start Talking"
    sendMessage={() => handleChatMessage()}
    bind:value
    bind:messageEl
  >
    {#each Array(chatbox.length) as _, i}
      <ChatMessage
        message={chatbox[i].message}
        messageTime={chatbox[i].messageTime ??
          new Intl.DateTimeFormat("en-US", {
            timeStyle: "short",
          }).format(Date.now())}
        messageType={chatbox[i].messageType ?? ""}
        index={i}
      ></ChatMessage>
    {/each}
  </ChatBox>
  <Footer
    i18n={{
      copyrightLabel: "Copyright © All rights reserved.",
      productLabel: "is a product of",
    }}
    content={{
      appStoreLink: "/",
      googlePlayLink: "/",
      navigationOptions: [
        {
          name: "Pages",
          subOptions: [
            { name: "About", url: "/about" },
            { name: "Products", url: "/products" },
            { name: "Pricing", url: "/pricing" },
            { name: "FAQ", url: "/faq" },
          ],
        },
        {
          name: "Contact",
          subOptions: [
            {
              name: "CybTEKK, Plot No. 10, Sector 13,Rajiv Gandhi IT Park, Chandigarh",
              url: "https://maps.app.goo.gl/6PmTzFpYniaMRe3MA",
            },
            { name: "hello@cybtekk.com", url: "mailto:hello@cybtekk.com" },
            { name: "+917233029581", url: "tel:+917233029581" },
          ],
        },
        {
          name: "Policies",
          subOptions: [
            { name: "Privacy Policy", url: "/privacypolicy" },
            { name: "Terms of Use", url: "/terms" },
            { name: "Legal", url: "/legal" },
          ],
        },
      ],
    }}
  />
</main>

<style lang="scss">
  main {
    overflow: hidden;
    & > .nav-bar {
      margin-block-end: 10rem;
      @media screen and (width < 768px) {
        margin-block-end: 8rem;
      }
    }
    & > footer {
      text-align: center;
      margin-block: 2rem;
    }
  }
</style>
