import "./style.css";
import bigWatch from "../../assets/images/watch-big-single.svg";

const WatchDisplay = () => {
  return (
    <div>
      <div className="watch-display">
        <div className="image-container">
          <img src={bigWatch} alt="Watch" />
        </div>
        <div className="details">
          <div className="detail">
            <div className="number">01</div>
            <div className="text">
              Built to last, our watches offer durability and longevity, making
              them a valuable investment.
            </div>
          </div>
          <div className="detail">
            <div className="number">02</div>
            <div className="text">
              Every timepiece is made with the highest quality materials and
              meticulous attention to detail.
            </div>
          </div>
          <div className="detail">
            <div className="number">03</div>
            <div className="text">
              Designed for both aesthetics and comfort, our watches are as
              pleasing to wear as they are to look at.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchDisplay;
