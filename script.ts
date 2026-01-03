import {
  ObjectDetector,
  FilesetResolver,
  Detection,
  ObjectDetectionResult
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";

const demosSection = document.getElementById("demos") as HTMLElement;

let objectDetector: ObjectDetector;
let runningMode = "IMAGE";

// Initialize the object detector
const initializeObjectDetector = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
  );
  objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite`,
      delegate: "CPU"
    },
    scoreThreshold: 0.5,
    runningMode: runningMode
  });
  demosSection.classList.remove("invisible");
};
