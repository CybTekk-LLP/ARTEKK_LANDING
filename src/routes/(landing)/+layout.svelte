<script lang="ts">
  import { Navbar, Footer } from "$lib/ui";
  let isOpen = false;
  let isSignedIn = true;
  let userName = "Gourav";
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
        { name: "Pricing", href: "/pricing", target: "" },
        { name: "Contact", href: "/contact", target: "" },
        { name: "FAQ", href: "/faq", target: "" },
      ]}
    />
  </div>
  <slot />
  <br /><br /><br />
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
            { name: "+919888688244", url: "tel:+919888688244" },
          ],
        },
        {
          name: "Policies",
          subOptions: [
            { name: "Privacy Policy", url: "/" },
            { name: "Terms of Use", url: "/" },
            { name: "Legal", url: "/" },
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
