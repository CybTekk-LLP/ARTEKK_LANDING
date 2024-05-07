<script lang="ts">
  import PricingCard from "$lib/project/PricingCard/PricingCard.svelte";
  import Button from "$lib/ui/Button/Button.svelte";
  import InputCheckbox from "$lib/ui/InputCheckbox/InputCheckbox.svelte";
  import Typography from "$lib/ui/Typography/Typography.svelte";
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
        onClick={() => alert("Button clicked")}
        buttonType="secondary"
      />

      <PricingCard
        planLabel="Basic"
        amount="₹6Lakhs"
        description="Choose any 5 AR models "
        onClick={() => alert("Button clicked")}
        buttonType="secondary"
      />

      <PricingCard
        planLabel="Pro"
        amount="₹9Lakhs"
        description="Get full access to all the AR models "
        onClick={() => alert("Button clicked")}
        buttonType="primary"
      />
    </div>
  </div>
  <div class="plan-box">
    <Typography type="cardTitle">Buy Individual Plans(2Lakhs each)</Typography>
    <div class="plan-option">
      <InputCheckbox {content} />
    </div>
  </div>
  <div class="btn">
    <Button buttonLabel="BUY" onClick={() => null} />
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 80vh;
    inline-size: 100vw;
    margin-inline: auto;
    padding-inline: 2rem;
    & > .pricing-box {
      margin-block-end: 2rem;
      & > .pricing-list {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 20px;
        margin-block-start: 1rem;
        @media screen and (width <= 1200px) {
          grid-template-columns: 50%;
          justify-content: center;
        }
        @media screen and (width <= 768px) {
          grid-template-columns: 100%;
          justify-content: center;
        }
      }
    }
    & > .plan-box {
      & > .plan-option {
        margin-block-start: 1rem;
      }
    }
    & > .btn {
      margin-block-start: 2rem;
      inline-size: 300px;
    }
  }
</style>
