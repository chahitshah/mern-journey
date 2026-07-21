import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
    FilesetResolver,
    FaceLandmarker,
} from "@mediapipe/tasks-vision";

const FaceExpression = () => {
    const webcamRef = useRef(null);
    const faceLandmarkerRef = useRef(null);
    const isRunningRef = useRef(false);

    const [expression, setExpression] = useState("Loading Model...");

    const detect = () => {
        if (isRunningRef.current) return;
        if (!faceLandmarkerRef.current) {
            console.warn("Model not loaded yet.");
            return;
        }
        isRunningRef.current = true;

        const run = () => {
            if (!isRunningRef.current) return;

            if (
                webcamRef.current?.video &&
                webcamRef.current.video.readyState === 4
            ) {
                const result = faceLandmarkerRef.current.detectForVideo(
                    webcamRef.current.video,
                    performance.now()
                );

                if (result.faceBlendshapes.length > 0) {
                    const blendshapes =
                        result.faceBlendshapes[0].categories;

                    const scores = {};

                    blendshapes.forEach((item) => {
                        scores[item.categoryName] = item.score;
                    });

                    // Default Expression
                    let currentExpression = "😐 Neutral";

                    // 😊 Happy
                    if (
                        (scores.mouthSmileLeft || 0) > 0.6 &&
                        (scores.mouthSmileRight || 0) > 0.6
                    ) {
                        currentExpression = "😊 Happy";
                    }

                    // ☹️ Sad
                    else if (
                        (scores.mouthFrownLeft || 0) > 0.002 &&
                        (scores.mouthFrownRight || 0) > 0.002
                    ) {
                        currentExpression = "☹️ Sad";
                    }

                    // 😲 Surprised
                    else if (
                        (scores.jawOpen || 0) > 0.1 &&
                        (scores.browInnerUp || 0) > 0.1
                    ) {
                        currentExpression = "😲 Surprised";
                    }

                    // 😐 Neutral
                    else {
                        currentExpression = "😐 Neutral";
                    }

                    setExpression(currentExpression);
                }
            }

            requestAnimationFrame(run);
        };

        run();
    };

    const handleDetectClick = () => {
        console.log("Detect Expression button clicked! Current expression in state:", expression);
        detect();
    };

    useEffect(() => {
        let active = true;

        const loadModel = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
                );

                const landmarker = await FaceLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath:
                            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
                    },
                    runningMode: "VIDEO",
                    numFaces: 1,
                    outputFaceBlendshapes: true,
                });

                if (!active) return;

                faceLandmarkerRef.current = landmarker;
                setExpression("😐 Neutral");
            } catch (error) {
                console.error(error);
                if (active) {
                    setExpression("❌ Model Load Failed");
                }
            }
        };

        loadModel();

        return () => {
            active = false;
            isRunningRef.current = false;
        };
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Face Expression Detection</h1>

            <Webcam
                ref={webcamRef}
                audio={false}
                mirrored={true}
                width={640}
                height={480}
            />

            <h2>{expression}</h2>
            <button onClick={handleDetectClick} >Detect Expression</button>
        </div>
    );
};

export default FaceExpression;