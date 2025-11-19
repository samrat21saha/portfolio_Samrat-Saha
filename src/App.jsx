import { useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <ThemeProvider>
        <div
          className={`min-h-screen bg-[var(--bg-primary)] transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Layout />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
