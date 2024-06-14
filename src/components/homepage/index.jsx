import Commonlayout from "../../layout/commonlayout";
import CardContainer from "../CardContainer";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery";
import TimepieceSection from "../TimepieceSection";
import WatchBanner from "../WatchBanner";
import WatchDisplay from "../WatchDisplay";
import Header from "../header";

const Homepage = () => {
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
};
export default Homepage;
