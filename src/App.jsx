import HeaderTopBar from './components/HeaderTopBar';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GovtSchemes from './components/GovtSchemes/GovtSchemes';
import AgroProduce from './components/AgroProduce/AgroProduce';
import TenderSection from './components/Tenders/TenderSection';
import TourismSection from './components/Tourism/TourismSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <HeaderTopBar />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GovtSchemes />
      <AgroProduce />
      <TenderSection />
      <TourismSection />
      <Footer />
      
      
    </div>
  );
}

export default App;