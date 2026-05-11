import { Bar } from "react-chartjs-2";

export default function Dashboard() {
  const data = {
    labels: ["Rice", "Wheat", "Maize"],
    datasets: [{ label: "Crops", data: [12, 19, 8] }]
  };

  return <Bar data={data} />;
}