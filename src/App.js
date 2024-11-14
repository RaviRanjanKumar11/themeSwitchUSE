import { ThemeContext } from "./components/contexts/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import DataComponent from "./components/DataComponent";
import { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeComponent canShow={true} />
        <DataComponent />
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
