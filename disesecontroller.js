exports.detectDisease = async (req, res) => {
  res.json({
    disease_name: "Leaf Blight",
    confidence: 88,
    treatment: "Use fungicide spray"
  });
};