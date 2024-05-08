<script lang="ts">
  import { Modal, PricingCard } from "$lib/project";
  import { Button, InputCheckbox, Typography } from "$lib/ui";
  let dialog: HTMLDialogElement;
  let showBackdrop: boolean;
  let heading: string;
  let pluginsValue: any;
  let value: any;
  let buttonType: "primary" | "secondary";
  let content = [
    {
      imgSrc: "./images/InputRadio/Shoes.svg",
      title: "Shoes",
    },
    {
      imgSrc: "./images/InputRadio/Clothes.svg",
      title: "Clothes",
    },
    {
      imgSrc: "./images/InputRadio/Gloves.svg",
      title: "Gloves",
    },
    {
      imgSrc: "./images/InputRadio/Car.svg",
      title: "Cars",
    },
    {
      imgSrc: "./images/InputRadio/Watches.svg",
      title: "Watches",
    },
    {
      imgSrc: "./images/InputRadio/Furniture.svg",
      title: "Furniture",
    },
    {
      imgSrc: "./images/InputRadio/Jewellery.svg",
      title: "Jewellery",
    },
    {
      imgSrc: "./images/InputRadio/Newspaper.svg",
      title: "Newspaper",
    },
    {
      imgSrc: "./images/InputRadio/Billboard.svg",
      title: "Billboard",
    },
    {
      imgSrc: "./images/InputRadio/Caps.svg",
      title: "Caps",
    },
  ];
</script>

<main>
  <div class="pricing-box">
    <Typography type="cardTitle">Plans and Pricing</Typography>
    <div class="pricing-list">
      <PricingCard
        planLabel="Starter"
        amount="₹4Lakhs"
        description="Choose any 3 AR models "
        onClick={() => {
          heading = "Choose 3 plugins";
          dialog.show();
          showBackdrop = true;
        }}
        buttonType="secondary"
        buttonLabel="Get this plan"
      />

      <PricingCard
        planLabel="Basic"
        amount="₹6Lakhs"
        description="Choose any 5 AR models "
        onClick={() => {
          heading = "Choose 5 plugins";
          dialog.show();
          showBackdrop = true;
        }}
        buttonType="secondary"
        buttonLabel="Get this plan"
      />

      <PricingCard
        planLabel="Pro"
        amount="₹9Lakhs"
        description="Get full access to all the AR models "
        onClick={() => {
          null;
        }}
        buttonType="primary"
        buttonLabel="Get this plan"
      />
    </div>
  </div>
  <div class="plan-box">
    <Typography type="cardTitle">Buy Individual Plans (₹2Lakhs each)</Typography
    >
    <div class="plan-option">
      <InputCheckbox {content} bind:value />
    </div>
  </div>
  <div class="btn">
    <Button buttonLabel="BUY" onClick={() => null} />
  </div>
</main>
<Modal bind:dialog bind:showBackdrop>
  <Typography type="cardTitle">{heading}</Typography>
  <br />
  <InputCheckbox bind:value={pluginsValue} {content} /> <br />
  <Button buttonLabel="BUY" onClick={() => alert("asdfjkbs")} /></Modal
>

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
