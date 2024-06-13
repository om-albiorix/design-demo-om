import "./style.css";
import SiteLogo from "../../assets/images/SiteLogo.svg";
import facebookLogo from "../../assets/images/facebook-icons.svg";
import telegramLogo from "../../assets/images/twitter-icons.svg";
import figmaLogo from "../../assets/images/figma-icons.svg";
import InstagramLogo from "../../assets/images/instagram-icons.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-branding">
            <img
              src={SiteLogo}
              alt="SiteLogoFooter"
              className="footer-heading"
            />
            <p>
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <hr />
            <p>&copy; 2024 All Rights Reserved</p>
          </div>
          <div className="footer-sections">
            <div className="footer-column">
              <h3 className="footer-heading">Follow us</h3>
              <div className="social-icons">
                <img src={facebookLogo} alt="facebookLogo" />
                <img src={telegramLogo} alt="telegramLogo" />
                <img src={figmaLogo} alt="figmaLogo" />
                <img src={InstagramLogo} alt="InstagramLogo" />
              </div>
              <p>
                Call us
                <br />
                +1 800 854-36-80
              </p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Customer Care</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery & Returns</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Product Return</a>
                </li>
                <li>
                  <a href="#">Wholesale Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Quick Shop</h3>
              <ul>
                <li>
                  <a href="#">Pagination</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Address Store</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Receivers</a>
                </li>
                <li>
                  <a href="#">Store Locations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
