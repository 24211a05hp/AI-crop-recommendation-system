import { useState } from "react";
import axios from "axios";

export default function DiseaseDetection() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post("http://localhost:5000/api/detect-disease", formData);
    setResult(res.data);
  };

  return (
    <div className="p-5">
      <input type="file" onChange={e => setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>

      {result && (
        <div>
          <h2>{result.disease_name}</h2>
          <p>{result.confidence}%</p>
          <p>{result.treatment}</p>
        </div>
      )}
    </div>
  );
}