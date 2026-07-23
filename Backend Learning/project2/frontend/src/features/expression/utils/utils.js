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
        streamRef.current = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = streamRef.current;
          await videoRef.current.play();
        }
        setModelLoading(false);
      } catch (err) {
        console.error("Error initializing model or camera:", err);
        setExpression("Initialization failed ❌");
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