import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import AppHeader from './components/AppHeader';
import HeroParticles from './components/HeroParticles';

function App() {
  return (
    <>
      <HeroParticles />
      <AppHeader />
      <Hero />
    </>
  );
}

export default App;
