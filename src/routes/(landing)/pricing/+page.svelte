<script lang="ts">
  // @ts-ignore
  import { goto } from "$app/navigation";
  import { Modal, PricingCard } from "$lib/project";
  import { Button, InputCheckbox, Typography } from "$lib/ui";
  let dialog: HTMLDialogElement;
  let showBackdrop: boolean;
  let heading: string;
  let pluginsValue: any;
  let value: any;
  // let buttonType: "primary" | "secondary";
  let content = [
    {
      imgSrc: "./images/Collections/Shoes.webp",
      title: "Shoes",
    },
    {
      imgSrc: "./images/Collections/Clothes.webp",
      title: "Clothes",
    },
    {
      imgSrc: "./images/Collections/Gloves.webp",
      title: "Gloves",
    },
    {
      imgSrc: "./images/Collections/Cars.webp",
      title: "Cars",
    },
    {
      imgSrc: "./images/Collections/Watch.webp",
      title: "Watches",
    },
    {
      imgSrc: "./images/Collections/Furniture.webp",
      title: "Furniture",
    },
    {
      imgSrc: "./images/Collections/Jewellery.webp",
      title: "Jewellery",
    },
    {
      imgSrc: "./images/Collections/Newspapers.webp",
      title: "Newspaper",
    },
    {
      imgSrc: "./images/Collections/Billboards.webp",
      title: "Billboard",
    },
    {
      imgSrc: "./images/Collections/Caps.webp",
      title: "Caps",
    },
    {
      imgSrc: "./images/Collections/Makeup.webp",
      title: "Makeup",
    },
    {
      imgSrc: "./images/Collections/Glasses.webp",
      title: "Glasses",
    }
  ];
</script>

<main>
  <div class="pricing-box">
    <Typography type="cardTitle">Plans and Pricing</Typography>
    <div class="pricing-list">
      <PricingCard
        planLabel="Builder"
        amount="₹4Lakhs/year"
        descriptions={[
          "Place any number of 3d models into the real space.",
          "Gives the best quality AR experience for real time object placement",
          "A must try before going for custom",
          "Only pay the difference to upgrade to custom for switching to more complex AR experiences.",
        ]}
        onClick={() => {
          null;
        }}
        buttonType="primary"
        buttonLabel="Get this plan"
      />
      <PricingCard
        planLabel="Custom"
        amount="₹9Lakhs/year"
        descriptions={[
          "Get full access to all the AR models.",
          "fully customizable as per your needs",
          "Get the exact implementation of AR as needed free of hassles using our AR platform.",
          "Track surface, human body, face, hand, feet and gestures with no limits to it’s customization",
        ]}
        onClick={() => {
          goto(`/contact?plans=all`);
        }}
        buttonType="secondary"
        buttonLabel="Get this plan"
      />
    </div>
  </div>
  <div class="plan-box">
    <Typography type="cardTitle">Buy Plans A-La-Carte  (₹2Lakhs each)</Typography
    >
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
  </div>
</main>
<Modal bind:dialog bind:showBackdrop>
  <Typography type="cardTitle">{heading}</Typography>
  <br />
  <InputCheckbox bind:value={pluginsValue} {content} /> <br />
  <Button
    buttonLabel="Buy"
    type="primary"
    onClick={() => alert("ahsdjhab")}
  /></Modal
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
