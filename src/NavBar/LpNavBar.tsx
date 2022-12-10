import { Link } from "react-router-dom";
import { FC } from "react";
const LpNavBar: FC = () => {
  return (
    <div className="  flex  sm:flex-row p-4  sm:space-x-8 ">
      <Link to="/home">Home</Link>
      <Link to="/">ALL PRODUCTS</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/Contact">CONTACT</Link>
      <Link to="/login">LOGIN</Link>
    </div>
  );
};
LpNavBar.defaultProps = {};
export default LpNavBar;
