export const capturePhoto = () => {
  const photoButton = document.querySelector(".capture-button");
  // @ts-ignore
  photoButton.addEventListener("click", () => {
    // @ts-ignore
    const isVideoMode = document.querySelector(
      ".switch-camera-video-photo-mode input[type='checkbox']"
      // @ts-ignore
    ).checked;
    if (isVideoMode) return;
    const facingModeButton = document.querySelector(
      ".switch-camera-facing-mode"
    );
    // @ts-ignore
    photoButton.classList.add("click");
    setTimeout(() => {
      // @ts-ignore
      photoButton.classList.remove("click");
    }, 500);
    // @ts-ignore
    drawOnCanvasAndSavePhoto(facingModeButton.dataset.facingMode === "front");
  });
};

const drawOnCanvasAndSavePhoto = async (isMirrored = false) => {
  const canvas = document.getElementById("stream") as HTMLCanvasElement;

  const flashElement = document.createElement("div");
  flashElement.style.position = "fixed";
  flashElement.style.top = "0";
  flashElement.style.left = "0";
  flashElement.style.width = "100%";
  flashElement.style.height = "calc(100vh - 220px)";
  flashElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.appendChild(flashElement);

  setTimeout(() => {
    flashElement.remove();
  }, 200);

  try {
    const imageDataUrl = canvas.toDataURL("image/png", 0.9);
    const link = document.createElement("a");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "");
    link.href = imageDataUrl;
    link.download = `photo_${timestamp}.png`;
    link.click();
  } catch (error) {
    console.error("Error capturing photo:", error);
  }
};
