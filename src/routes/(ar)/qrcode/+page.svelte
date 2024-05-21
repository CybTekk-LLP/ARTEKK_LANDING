<script lang="ts" type="text/javascript">
  import { Button } from "$lib/ui";
  import Typography from "$lib/ui/Typography/Typography.svelte";
  import QRCode from "@castlenine/svelte-qrcode";
  let query = new URL(window.location.href).searchParams.get("load");
</script>

<main>
  <section>
    <Typography type="caption">Continue on a mobile phone</Typography>
    <p>
      <Typography type="body">
        Looks like you are on a desktop/laptop device. please scan the QR code
        below to open it on a mobile device and get the full experience.
      </Typography>
    </p>
    <QRCode
      color="#ffffff"
      backgroundColor="#000000"
      data={"https://cybtekk-llp.github.io/ARTEKK/pages/getting-started.html?load=" +
        query}
    />
    <p class="qr-sub">Scan this to visit ARTEKK</p>
    <div class="btn">
      <Button
        type="secondary"
        buttonLabel="Continue Anyway"
        onClick={() => (window.location.href = "./" + query + ".html")}
      />
    </div>
  </section>
</main>

<style lang="scss">
  main {
    inline-size: 100vw;
    block-size: 100vh;
    margin-inline: auto;

    section {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin-top: 10px;
      }
      p {
        text-align: center;
        max-width: 548px;
        margin: 20px 0;
      }

      .qr-sub {
        max-width: 250px;
      }

      #qrcode {
        text-align: center;
      }
      .qr-sub {
        text-align: center;
      }
      & > .btn {
        :global(button) {
          padding-inline: 50px;
        }
      }
    }
  }
</style>
