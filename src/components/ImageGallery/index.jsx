import image1 from "../../assets/images/Rectangle-small-1.svg";
import image2 from "../../assets/images/Rectangle-small-2.svg";
import image3 from "../../assets/images/Rectangle-small-3.svg";
import "./style.css";

const ImageGallery = () => {
  return (
    <div>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="image-wrapper">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="image-wrapper">
          <img src={image3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
