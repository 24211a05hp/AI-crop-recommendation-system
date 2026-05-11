import { useState } from "react";
import axios from "axios";

export default function CropRecommendation() {
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/recommend-crop", form);
    setResult(res.data);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Crop Recommendation</h1>

      <input placeholder="pH" onChange={e => setForm({...form, ph: e.target.value})}/>
      <input placeholder="Temperature" onChange={e => setForm({...form, temperature: e.target.value})}/>
      <input placeholder="Humidity" onChange={e => setForm({...form, humidity: e.target.value})}/>
      <input placeholder="Rainfall" onChange={e => setForm({...form, rainfall: e.target.value})}/>

      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <div className="card">
          <h2>{result.recommended_crop}</h2>
          <p>Confidence: {result.confidence}%</p>
          <p>{result.fertilizer_suggestions}</p>
        </div>
      )}
    </div>
  );
}