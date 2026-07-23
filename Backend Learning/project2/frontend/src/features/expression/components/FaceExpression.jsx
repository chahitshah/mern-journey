import { useEffect, useRef, useState } from "react";
import { detect,init } from "../utils/utils";


export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const [expression, setExpression] = useState("Ready to detect");
  const [modelLoading, setModelLoading] = useState(true);
  const streamRef = useRef(null);
  useEffect(() => {
    
    

    init({ landmarkerRef, videoRef, streamRef, setModelLoading, setExpression });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{modelLoading ? "Loading Model..." : expression}</h2>
      <button onClick={()=>{detect({landmarkerRef,videoRef,setExpression})}} disabled={modelLoading} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Detect Expression
      </button>
    </div>
  );
}