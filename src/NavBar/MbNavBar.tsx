import { Link } from "react-router-dom";
import { FC } from "react";
import { BiCaretUp } from "react-icons/bi";
type MbNavBarprops = {
  MobileViewStop: () => void;
};
const MbNavBar: FC<MbNavBarprops> = ({ MobileViewStop }) => {
  return (
    <div className=" w-full flex flex-col space-y-4 md:hidden mx-2">
      <Link to="/home">Home</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/">ALL PRODUCTS</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/about">ABOUT</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/Contact">CONTACT</Link>
      <hr className="sm:hidden"></hr>
      <Link to="/login">LOGIN</Link>
      <hr className="sm:hidden"></hr>

      <BiCaretUp onClick={MobileViewStop} className="text-3xl self-center" />
    </div>
  );
};
MbNavBar.defaultProps = {};

export default MbNavBar;
