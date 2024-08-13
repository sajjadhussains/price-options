import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center bg-green-500 text-red-500">
        bangladesh 2.0
      </h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
