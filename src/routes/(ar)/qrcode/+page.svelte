<script lang="ts" type="text/javascript">
  import { Button } from "$lib/ui";

  let query = new URL(window.location.href).searchParams.get("load");
  const generateQR = () => {
    const text =
      "https://cybtekk-llp.github.io/ARTEKK/pages/getting-started.html?load=" +
      query;
    if (text === "") {
      return;
    }
    $("#qrcode").empty().qrcode(text);
  };
  generateQR();
</script>

<main>
  <section>
    <h1>Continue on a mobile phone</h1>
    <p>
      Looks like you are on a desktop/laptop device. please scan the QR code
      below to open it on a mobile device and get the full experience.
    </p>
    <div id="qrcode"></div>
    <p class="qr-sub">Scan this to visit ARTEKK</p>
    <Button
      type="primary"
      buttonLabel="Continue Anyway"
      onClick={() => (window.location.href = "./" + query + ".html")}
    />
  </section>
</main>

<style lang="scss">
  main > section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main > section > img {
    margin-top: 10px;
  }

  main > section > p {
    font-weight: 500;
  }

  main > section > p {
    text-align: center;
    max-width: 548px;
    padding: 0 60px;
    margin: 20px 0;
  }

  main > section > .qr-sub {
    max-width: 250px;
  }

  main > section > .continue {
    font-weight: 700;
    background-color: transparent;
    padding: 15px 60px;
    color: white;
    border: 1px solid #222;
    cursor: pointer;
    border-radius: 5px;
  }
  #qrcode {
    text-align: center;
  }
  .qr-sub {
    text-align: center;
  }
</style>
