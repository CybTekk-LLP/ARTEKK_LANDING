<!-- <script lang="ts">
  import { Button, InputText, Typography } from "$lib/ui";
  import TextArea from "$lib/ui/TextArea/TextArea.svelte";

  let name: string;
  let email: string;
  let company: string;
  let budget: string; //change it when input number is ready
  let comment: string;
</script>

<main>
  <Typography type="cardHeading">Contact Sales</Typography>
  <form>
    <InputText
      bind:value={name}
      variant="text"
      placeholder="Please enter your name"
    />
    <br />
    <InputText
      bind:value={email}
      variant="email"
      placeholder="Please enter your email"
    />
    <br />
    <InputText
      bind:value={company}
      variant="text"
      placeholder="Please enter company name"
    />
    <br />
    <InputText
      bind:value={budget}
      variant="text"
      placeholder="Please enter your name"
    />
    <br />
    <input type="checkbox" name="Open for Negotitaion" id="checkbox" />
    <br />
    <TextArea
      bind:value={comment}
      placeholder="Write any additional comments or requests"
    />
    <Button
      type="primary"
      buttonLabel="Submit"
      onClick={() => alert("sdafgasfg")}
    />
  </form>
</main> -->
