<script lang="ts">
  import { Navbar, Typography } from "$lib/ui";
  let isOpen = false;
  let year = new Date().getFullYear();
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
        { name: "Collections", href: "/collections", target: "" },
        { name: "Pricing", href: "/pricing", target: "" },
        { name: "Contact", href: "/contact", target: "" },
        { name: "Documentation", href: "/docs", target: "" },
      ]}
    />
  </div>
  <slot />
  <footer>
    <Typography type="subtext" _fontweight="400" _color="var(--primary-500)"
      >Copyright © {year} ARTEKK, all rights reserved</Typography
    >
  </footer>
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
