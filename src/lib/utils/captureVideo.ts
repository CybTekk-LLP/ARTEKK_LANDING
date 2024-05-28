export let mediaRecorder = null;
let chunks: BlobPart[] | undefined = [];
let startTime: number | null = null;
let timerInterval: string | number | NodeJS.Timeout | undefined;
const recordingIndicator = document.createElement("div");

export const captureVideo = () => {
  const videoButton = document.querySelector(".capture-button");
  // @ts-ignore
  videoButton.addEventListener("click", () => {
    // @ts-ignore
    const isVideoMode = document.querySelector(
      ".switch-camera-video-photo-mode input[type='checkbox']"
      // @ts-ignore
    ).checked;
    if (!isVideoMode) return;
    const facingModeButton = document.querySelector(
      ".switch-camera-facing-mode"
    );
    recordVideo(facingModeButton);
  });
};

const recordVideo = async (facingModeButton: Element | null) => {
  const video = document.getElementById("stream") as HTMLCanvasElement;
  // @ts-ignore
  if (mediaRecorder && mediaRecorder.state === "recording") {
    // @ts-ignore
    mediaRecorder.stop();
    clearInterval(timerInterval);
    return;
  }
  try {
    // @ts-ignore
    mediaRecorder = new MediaRecorder(video.captureStream(30));
    startTime = Date.now();
    // @ts-ignore
    mediaRecorder.start();
    // @ts-ignore
    mediaRecorder.ondataavailable = (event: { data: BlobPart }) => {
      const blob = new Blob([event.data], {
        type: "video/mp4",
      });
      // @ts-ignore
      chunks.push(blob);
    };

    recordingIndicator.textContent = "00:00:00";
    recordingIndicator.classList.add("record");
    recordingIndicator.setAttribute(
      "style",
      `display: block;
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
    border-radius: 30px;`
    );
    document.body.appendChild(recordingIndicator);

    timerInterval = setInterval(() => {
      // @ts-ignore
      const elapsedTime = Date.now() - startTime;
      recordingIndicator.textContent = formatTime(elapsedTime);
    }, 1000);
    // @ts-ignore
    mediaRecorder.onstop = () => {
      saveRecordedVideo();
      clearInterval(timerInterval);
    };

    const toggle = document.querySelector(
      ".switch-camera-video-photo-mode input[type='checkbox']"
    );
    // @ts-ignore
    toggle.addEventListener("change", () => {
      // @ts-ignore
      if (mediaRecorder && mediaRecorder.state === "recording") {
        // @ts-ignore
        mediaRecorder.stop();
        clearInterval(timerInterval);
      }
    });
    // @ts-ignore
    facingModeButton.addEventListener("click", () => {
      // @ts-ignore
      if (mediaRecorder && mediaRecorder.state === "recording") {
        // @ts-ignore
        mediaRecorder.stop();
        clearInterval(timerInterval);
      }
    });
  } catch (e) {
    console.error(e);
  }
};

const saveRecordedVideo = () => {
  recordingIndicator.remove();
  // @ts-ignore
  if (!chunks.length) {
    console.error("No recorded video data available.");
    return;
  }
  const blob = new Blob(chunks, { type: "video/mp4" });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "");
  const filename = `video_${timestamp}.mp4`;
  const videoUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = videoUrl;
  link.download = filename;
  link.click();
  chunks = [];
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const pad = (num: number) => {
  return num.toString().padStart(2, "0");
};
