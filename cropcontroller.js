exports.recommendCrop = async (req, res) => {
  const { ph, temperature, humidity, rainfall } = req.body;

  // Dummy ML logic (replace with Python call)
  let crop = "Rice";

  if (ph > 7) crop = "Wheat";

  res.json({
    recommended_crop: crop,
    confidence: 92,
    fertilizer_suggestions: "Use NPK fertilizers"
  });
};