import "./App.css";
import { Slot } from "./components/Slot";

const PRICE = 1977;

function App() {
  return (
    <div className="h-full w-full flex justify-center">
      <Slot price={PRICE} />
    </div>
  );
}

export default App;
