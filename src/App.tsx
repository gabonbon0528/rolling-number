import "./App.css";
import { Slot } from "./components/Slot";

function App() {
  return (
    <div className="h-full w-full flex flex-col gap-16 justify-center items-center">
      <Slot />
    </div>
  );
}

export default App;
