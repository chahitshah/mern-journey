import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export const init = async ({ landmarkerRef, videoRef, streamRef, setModelLoading, setExpression }) => {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    landmarkerRef.current = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1
      }
    );
  } catch (err) {
    console.error("Error initializing face landmarker model:", err);
    setExpression("Model loading failed ❌");
    setModelLoading(false);
    return;
  }

  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Camera API not supported in this browser (or context is not secure/HTTPS)");
    }
    streamRef.current = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
      await videoRef.current.play();
    }
    setExpression("Ready to detect");
  } catch (err) {
    console.error("Error accessing camera:", err);
    if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
      setExpression("Camera not found: Please connect a webcam 📷❌");
    } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
      setExpression("Camera permission denied 🔒");
    } else {
      setExpression("Camera access failed 📷❌");
    }
  } finally {
    setModelLoading(false);
  }
};


 export   const detect = ({landmarkerRef,videoRef,setExpression}) => {
    if (!landmarkerRef.current) {
      console.warn("Model not loaded yet.");
      return;
    }
    if (!videoRef.current || videoRef.current.readyState !== 4) {
      console.warn("Video not ready yet.");
      return;
    }

    const results = landmarkerRef.current.detectForVideo(
      videoRef.current,
      performance.now()
    );

    if (results.faceBlendshapes?.length > 0) {
      const blendshapes = results.faceBlendshapes[0].categories;
      const getScore = (name) =>
        blendshapes.find((b) => b.categoryName === name)?.score || 0;
      const smileLeft = getScore("mouthSmileLeft");
      const smileRight = getScore("mouthSmileRight");
      const jawOpen = getScore("jawOpen");
      const browUp = getScore("browInnerUp");
      const frownLeft = getScore("mouthFrownLeft");
      const frownRight = getScore("mouthFrownRight");

      let currentExpression = "Neutral 😐";
      if (smileLeft > 0.5 && smileRight > 0.5) {
        currentExpression = "Happy 😄";
      } else if (jawOpen > 0.2 && browUp > 0.2) {
        currentExpression = "Surprised 😲";
      } else if (frownLeft > 0.0001 && frownRight > 0.0001) {
        currentExpression = "Sad 😢";
      }
      setExpression(currentExpression);
    } else {
      setExpression("No face detected");
    }
  };