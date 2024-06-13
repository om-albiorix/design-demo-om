import "./style.css";
import rectangleImage1 from "../../assets/images/Rectangle-watch-1.svg";
import rectangleImage2 from "../../assets/images/Rectangle-watch-2.svg";

const TimepieceSection = () => {
  return (
    <div>
      <div className="timepiece-banner">
        <div className="content">
          <h1>Elegant Timepieces Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolor
          </p>
          <button className="explore-button">Explore</button>
        </div>
        <div className="images">
          <img src={rectangleImage1} alt="Watch 1" className="image1" />
          <img src={rectangleImage2} alt="Watch 2" className="image2" />
        </div>
      </div>
    </div>
  );
};

export default TimepieceSection;
