<script lang="ts">
  import { bootstrapCameraKit } from "@snap/camera-kit";

  (async function () {
    const cameraKit = await bootstrapCameraKit({
      apiToken:
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEzODAzNTY4LCJzdWIiOiIwZjBjYWY5Mi1hYjMyLTQyZWEtYjgwZC05ZDQ5N2VlOTYwMTV-U1RBR0lOR35kOTBiZGJkMS03MzU0LTRjNTYtYTYwMi1jMGEyMjJlNmJmYmYifQ.uDZfZL0qjbTggO8K1KWGLmIgYSc_n9A6fgC5-8zD0QQ",
    });
    const liveRenderTarget = document.getElementById(
      "stream"
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
      "1e54efe7-148c-4f74-a032-da5b3adef95b",
      "88100c29-c3e6-4deb-bce0-35e91383790e"
    );
    await session.applyLens(lens);
  })();
</script>

<section id="camera-section">
  <canvas id="stream" data-lens="none"></canvas>
  <div class="controls" role="button" tabindex="0">
    <div class="lenses">
      <div class="filters">
        <input type="checkbox" name="" id="filter-toggle" />
        <label for="filter-toggle"></label>

        <input type="radio" id="none" name="filters" value="none" checked />
        <label for="none" class="lens"></label>
        <input type="radio" id="monochrome" name="filters" value="monochrome" />
        <label for="monochrome" class="lens"></label>
        <input type="radio" id="gradient1" name="filters" value="gradient1" />
        <label for="gradient1" class="lens"></label>
        <input type="radio" id="gradient2" name="filters" value="gradient2" />
        <label for="gradient2" class="lens"></label>
        <input type="radio" id="gradient3" name="filters" value="gradient3" />
        <label for="gradient3" class="lens"></label>
        <input type="radio" id="gradient4" name="filters" value="gradient4" />
        <label for="gradient4" class="lens"></label>
      </div>
      <img
        class="cancel"
        src="../assets/camera/cancel.svg"
        alt=""
        height="20px"
      />
    </div>
    <div class="capture-button" role="button" tabindex="0">
      <svg
        width="72"
        height="72"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="31.3333"
          stroke="#2C2C2C"
          stroke-width="1.33333"
        />
        <circle cx="32" cy="32" r="24" fill="white" class="capture-icon" />
      </svg>
    </div>
    <div
      class="switch-camera-facing-mode"
      role="button"
      tabindex="0"
      data-facing-mode="front"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="23.5" stroke="#2C2C2C" />
        <mask
          id="mask0_63_76"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="11"
          y="11"
          width="26"
          height="26"
        >
          <path d="M11 11H37V37H11V11Z" fill="white" />
        </mask>
        <g mask="url(#mask0_63_76)">
          <g class="rotate">
            <path
              d="M18.2887 26.8558V25.2241C18.2887 22.0719 20.8478 19.5129 23.9999 19.5129C25.5758 19.5129 27.0036 20.1525 28.0377 21.1863"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6572 25.2241L18.289 26.8558L19.9208 25.2241"
              stroke="white"
              stroke-width="1.52344"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.7113 23.592V25.2237C29.7113 28.3759 27.1522 30.9349 24.0001 30.9349C22.4242 30.9349 20.9964 30.2952 19.9623 29.2615"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.3431 25.2236L29.7114 23.5919L28.0796 25.2236"
              stroke="white"
              stroke-width="1.52344"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            d="M11.7617 21.1445C11.7617 20.0627 12.1917 19.0249 12.9566 18.26C13.7215 17.4951 14.7593 17.0651 15.8411 17.0651H17.2804C17.8984 17.0651 18.4634 16.7159 18.74 16.1632C18.8273 15.9878 18.9223 15.7985 19.0186 15.6055C19.5714 14.5 20.7014 13.8016 21.9374 13.8016H26.0626C27.2986 13.8016 28.4286 14.5 28.9814 15.6055C29.0777 15.7985 29.1727 15.9878 29.26 16.1632C29.5366 16.7159 30.1016 17.0651 30.7196 17.0651H32.1589C33.2407 17.0651 34.2785 17.4951 35.0434 18.26C35.8083 19.0249 36.2383 20.0627 36.2383 21.1445V30.1193C36.2383 31.2012 35.8083 32.239 35.0434 33.0038C34.2785 33.7688 33.2407 34.1987 32.1589 34.1987H15.8411C14.7593 34.1987 13.7215 33.7688 12.9566 33.0038C12.1917 32.239 11.7617 31.2012 11.7617 30.1193V21.1445Z"
            stroke="white"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  </div>
  <div class="switch-camera-video-photo-mode" role="button" tabindex="0">
    <input type="checkbox" name="switch" id="switch" />
    <label for="switch">
      <div>
        <span>Photo</span>
        <span>Video</span>
      </div>
    </label>
  </div>
</section>

<style lang="scss">
  #camera-section {
    position: relative;
  }

  #stream {
    inline-size: 100vw;
    block-size: calc(100vh - 220px);
    object-fit: cover;
    object-position: center;
  }

  #stream.flip {
    scale: -1 1;
  }

  #stream.flip :is(video, canvas) {
    scale: -1 1;
  }

  /* Video Controls */
  .controls {
    display: flex;
    block-size: 100px;
    inline-size: 90vw;
    margin-inline: auto;
    justify-content: space-between;
    align-items: center;
  }

  /* Video filters */

  .lenses {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
  }

  .filters {
    position: relative;
    inline-size: 50px;
    block-size: 50px;
    display: flex;
    align-items: center;
    padding-block-start: 0;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    border: 1.5px solid transparent;
    background-color: rgba(0, 0, 0, 0.742);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 48px;
    overflow: hidden;
    cursor: pointer;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  .filters #filter-toggle:not(:checked) ~ input:not(:checked) + label {
    display: none;
  }

  .filters #filter-toggle:not(:checked) ~ label {
    pointer-events: none;
  }

  .filters #filter-toggle:not(:checked) + label {
    display: none;
  }

  .filters:has(#filter-toggle:checked) {
    block-size: 200px;
    padding-block-start: 80px;
    border: 1.5px solid white;
    overflow: scroll;
  }

  .lenses .cancel {
    cursor: pointer;
  }

  .lenses:has(.filters #filter-toggle:checked) {
    translate: 0 -50px;
  }

  .lenses:has(.filters #filter-toggle:not(:checked)) .cancel {
    display: none;
  }

  .filters::-webkit-scrollbar {
    display: none;
  }

  .filters input {
    display: none;
  }

  .filters label {
    inline-size: 48px;
    min-block-size: 48px;
    border-radius: 50%;
    cursor: pointer;
    aspect-ratio: 1/1;
  }

  .filters:has(#filter-toggle:checked) input:checked + label.lens {
    border: 2px solid rgb(55, 55, 249);
  }

  .filters label[for="none"] {
    background-image: linear-gradient(45deg, #111 48%, #171717 48%, #171717);
  }

  .filters label[for="monochrome"] {
    background-image: linear-gradient(45deg, #080808 50%, white 45%, white);
  }

  .filters label[for="gradient1"] {
    background-image: linear-gradient(pink 50%, blue);
  }

  .filters label[for="gradient2"] {
    background-image: linear-gradient(purple 50%, blue);
  }

  .filters label[for="gradient3"] {
    background-image: linear-gradient(lightgreen, royalblue);
  }

  .filters label[for="gradient4"] {
    background-image: linear-gradient(yellow, white);
  }

  /* Switch between video and photo capture modes */
  .switch-camera-video-photo-mode input[type="checkbox"] {
    display: none;
  }

  .switch-camera-video-photo-mode label {
    display: block;
    inline-size: max-content;
    margin-inline: auto;
    border-radius: 40px;
    padding: 0.6rem;
    background-color: #171717;
    cursor: pointer;
  }

  .switch-camera-video-photo-mode label span {
    color: white;
    padding-inline: 10px;
    text-align: center;
  }

  .switch-camera-video-photo-mode input[type="checkbox"] + label {
    background-image: linear-gradient(
      to right,
      #0a0030 0%,
      #2a002e 50%,
      #171717 50%
    );
  }

  .switch-camera-video-photo-mode input[type="checkbox"]:checked + label {
    background-image: linear-gradient(
      to right,
      #171717 50%,
      #0a0030 50%,
      #2a002e 100%
    );
  }

  /* Capture button */
  #camera-section:has(
      .switch-camera-video-photo-mode input[type="checkbox"]:checked
    )
    .capture-button
    .capture-icon {
    fill: red;
  }

  /* Switch between rear and front camera modes */
  .switch-camera-facing-mode {
    cursor: pointer;
    pointer-events: all;
  }

  .switch-camera-facing-mode:has(.rotating) {
    pointer-events: none;
  }

  .switch-camera-facing-mode .rotate {
    cursor: pointer;
  }

  .switch-camera-facing-mode .rotate:is(.rotating) {
    animation: rotate 1.5s both;
    transform-origin: 50% calc(50% + 1.1px);
  }

  @keyframes rotate {
    0% {
      rotate: 0deg;
    }

    100% {
      rotate: -180deg;
    }
  }

  /* Capture button to click and take photos */
  .capture-button {
    cursor: pointer;
  }

  .capture-button.click .capture-icon {
    animation: click 0.2s ease-in-out both;
    transform-origin: center;
  }

  @keyframes click {
    0% {
      scale: 1;
    }

    50% {
      scale: 0.85;
    }

    100% {
      scale: 1;
    }
  }

  .record {
    display: block;
    position: fixed;
    inset-block-start: 10px;
    inset-inline-start: 50%;
    translate: -50% 0;
    background-color: red;
    min-inline-size: 9.5ch;
    text-align: start;
    padding: 10px;
    color: white;
    font-kerning: none;
    letter-spacing: 0.1rem;
    border-radius: 30px;
  }

  /* Filter lens effect on video (does not retain for camera pics or recordings for now */

  #stream[data-lens="none"] {
    filter: unset;
  }

  #stream[data-lens="monochrome"] {
    filter: grayscale(1);
  }

  #stream[data-lens*="gradient"] {
    filter: saturate(0.1);
  }

  .filterLens:is(.none, .monochrome) {
    display: none;
  }

  .filterLens:is(.gradient1) {
    background-image: linear-gradient(
      rgba(255, 192, 203, 0.354) 50%,
      rgba(0, 0, 255, 0.12)
    );
  }

  .filterLens:is(.gradient2) {
    background-image: linear-gradient(
      rgba(128, 0, 128, 0.573) 50%,
      rgba(0, 0, 255, 0.59)
    );
  }

  .filterLens:is(.gradient3) {
    background-image: linear-gradient(
      rgba(147, 245, 139, 0.239),
      rgba(65, 105, 225, 0.284)
    );
  }

  .filterLens:is(.gradient4) {
    background-image: linear-gradient(
      rgba(255, 255, 0, 0.215),
      rgba(255, 255, 255, 0.436)
    );
  }
</style>
