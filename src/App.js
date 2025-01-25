import './App.css';
import HeroBlock from "./components/HeroBlock"
import IntroBlock from './components/IntroBlock';
import StatsBlock from './components/StatsBlock';
import SelectedProjects from './components/SelectedProject';
import BrandExperience from './components/BrandExperience';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <HeroBlock />
        <IntroBlock />
        <StatsBlock />
        <SelectedProjects />
        <BrandExperience />
        <Footer />
      </main>
    </div>
  );
}

export default App;
