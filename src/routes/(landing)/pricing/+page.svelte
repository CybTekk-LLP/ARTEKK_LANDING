<script lang="ts">
  // @ts-ignore
  import { goto } from "$app/navigation";
  import { PricingCard } from "$lib/project";
  import { Typography } from "$lib/ui";
</script>

<main>
  <div class="pricing-box">
    <Typography type="cardTitle">Plans and Pricing</Typography>
    <div class="pricing-list">
      <PricingCard
        planLabel="FREE"
        amount=""
        descriptions={[
          "AR Setup: Basic setup of AR for products.",
          "3D Model Integration: Easily integrate 3D models provided by your designer into the AR experience.",
          "Product Display in AR: Display your products in AR FREE of cost.",
          "Platform Integration: Full integration with major e-commerce platforms like Shopify, WordPress, and others.",
          "Basic Support: Full support to assist in integrating AR on your platform.",
        ]}
        onClick={() => {
          goto(`/contact?plans=builder`);
        }}
        buttonType="secondary"
        buttonLabel="Get this plan"
      />
      <PricingCard
        planLabel="PRO"
        amount=""
        descriptions={[
          "Personalized AR Setup: Custom AR integration tailored to your codebase for seamless use.",
          "Initial Setup & Integration: Full AR setup, including 3D model integration.",
          "Advanced Platform Support: Integration with major platforms like Shopify, WordPress, Magento, etc.",
          "Priority Support: Faster customer support for troubleshooting and updates.",
          "Analytics & Insights: Track and optimize AR interactions with detailed stats.",
          "Custom 3D Models: Personalized 3D models from product photos or modal images.",
          "Tailored Design: Accurate, detailed models created to match your specifications.",
          "Quick Delivery: Fast turnaround on 3D models for AR use.",
          "Minimal Cost: Affordable pricing for enhanced product AR experiences.",
        ]}
        onClick={() => {
          goto(`/contact?plans=all`);
        }}
        buttonType="primary"
        buttonLabel="Get this plan"
      />
    </div>
  </div>
  <!-- <div class="plan-box">
    <Typography type="cardTitle">Buy Plans A-La-Carte (2500$ each)</Typography>
    <div class="plan-option">
      <InputCheckbox {content} bind:value />
    </div>
  </div>
  <div class="btn">
    <Button
      buttonLabel="Contact Sales"
      type="secondary"
      onClick={() => goto(`/contact?plans=${value}`)}
    />
  </div> -->
</main>

<!-- <Modal bind:dialog bind:showBackdrop>
  <Typography type="cardTitle">{heading}</Typography>
  <br />
  <InputCheckbox bind:value={pluginsValue} {content} /> <br />
  <Button
    buttonLabel="Buy"
    type="primary"
    onClick={() => alert("ahsdjhab")}
  /></Modal
> -->

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 80vh;
    inline-size: 90vw;
    margin-inline: auto;
    & > .pricing-box {
      margin-block-end: 4rem;
      & > .pricing-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
        margin-block-start: 2rem;
      }
    }
    & > .plan-box {
      & > .plan-option {
        margin-block-start: 2rem;
        inline-size: 100%;
      }
    }
    & > .btn {
      margin-block-start: 15px;
      inline-size: 100%;
      max-inline-size: 350px;
      @media screen and (width < 768px) {
        max-inline-size: 100%;
      }
    }
  }
</style>
