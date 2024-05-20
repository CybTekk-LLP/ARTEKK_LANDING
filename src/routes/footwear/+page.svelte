<script context="module" lang="ts">
  import { bootstrapCameraKit } from "@snap/camera-kit";

  (async function () {
    const cameraKit = await bootstrapCameraKit({
      apiToken:
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEzODAzNTY4LCJzdWIiOiIwZjBjYWY5Mi1hYjMyLTQyZWEtYjgwZC05ZDQ5N2VlOTYwMTV-U1RBR0lOR35kOTBiZGJkMS03MzU0LTRjNTYtYTYwMi1jMGEyMjJlNmJmYmYifQ.uDZfZL0qjbTggO8K1KWGLmIgYSc_n9A6fgC5-8zD0QQ",
    });
    const liveRenderTarget = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    const session = await cameraKit.createSession({ liveRenderTarget });
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: "environment" },
      },
    });
    await session.setSource(mediaStream);
    await session.play();

    const lens = await cameraKit.lensRepository.loadLens(
      "324ffc1d-1407-45ce-b2c5-1fad38de7d18",
      "88100c29-c3e6-4deb-bce0-35e91383790e"
    );
    await session.applyLens(lens);
  })();
</script>

<canvas id="canvas"></canvas>

<style lang="scss">
  canvas {
    /* scale: -1 1; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
