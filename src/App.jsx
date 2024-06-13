import ImageGallery from "./components/ImageGallery";
import Header from "./components/header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer/Footer";
import WatchBanner from "./components/WatchBanner";
import TimepieceSection from "./components/TimepieceSection";
import WatchDisplay from "./components/WatchDisplay";
import Commonlayout from "./layout/commonlayout";

function App() {
  return (
    <div>
      <Header />
      <WatchBanner />
      <Commonlayout>
        <CardContainer />
        <TimepieceSection />
        <WatchDisplay />
        <ImageGallery />
        <Footer />
      </Commonlayout>
    </div>
  );
}

export default App;
