import { useEffect, useState } from "react";

import Confetti from "react-confetti";
import Hero from "./components/Hero";
import AppHeader from "./components/AppHeader";
import HeroParticles from "./components/HeroParticles";
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let confettiTimeout;
    if (showConfetti) {
      confettiTimeout = setTimeout(() => setShowConfetti(false), 10000);
    }
    return () => clearTimeout(confettiTimeout); // clean up on unmount
  }, [showConfetti]);
  return (
    <>
      {showConfetti && <Confetti numberOfPieces={200} />}
      <HeroParticles />
      <AppHeader />
      <Hero setShowConfetti={setShowConfetti} />
    </>
  );
}

export default App;
