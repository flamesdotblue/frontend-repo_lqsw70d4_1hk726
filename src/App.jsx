import Hero from './components/Hero';
import UseCases from './components/UseCases';
import SecretSanta from './components/SecretSanta';
import BottomSections from './components/BottomSections';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <UseCases />
      <SecretSanta />
      <BottomSections />
    </div>
  );
}

export default App;
