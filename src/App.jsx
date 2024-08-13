import LoadByAxios from "./components/LoadByAxios/LoadByAxios";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import { LineChart, Line } from "recharts";

function App() {
  const studentMarks = [
    { name: "John", math: 85, science: 78 },
    { name: "Alice", math: 92, science: 89 },
    { name: "Bob", math: 78, science: 74 },
    { name: "Eve", math: 88, science: 90 },
    { name: "Charlie", math: 95, science: 92 },
    { name: "David", math: 67, science: 70 },
    { name: "Grace", math: 73, science: 75 },
    { name: "Henry", math: 82, science: 85 },
    { name: "Ivy", math: 91, science: 94 },
    { name: "Jack", math: 79, science: 80 },
  ];

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center bg-green-500 text-red-500">
        bangladesh 2.0
      </h1>
      <PriceOptions></PriceOptions>
      <LineChart width={400} height={400} data={studentMarks}>
        <Line type="monotone" dataKey="math" stroke="red" />
        <Line type="monotone" dataKey="science" stroke="yellow" />
      </LineChart>
      <LoadByAxios></LoadByAxios>
    </>
  );
}

export default App;
