import "./index.css";
// eslint-disable-next-line react/prop-types
const Commonlayout = ({ children }) => {
  return (
    <div>
      <div className="common-layout">{children}</div>
    </div>
  );
};

export default Commonlayout;
