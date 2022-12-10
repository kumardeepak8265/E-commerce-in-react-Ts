import { useState } from "react";
import LpNavBar from "./LpNavBar";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FC } from "react";
import MbNavBar from "./MbNavBar";
import { Link } from "react-router-dom";
const NavBar: FC = () => {
  const [manuControl, setManuControl] = useState(true);
  const onhandleManueControle = () => setManuControl(!manuControl);
  return (
    <div className="top-0 sticky bg-white  sm:px-10">
      <div className="flex justify-between ">
        <div className=" w-20">
          <img
            className=" h-16 w-full"
            src="https://cdn.discordapp.com/attachments/937199046211305514/1009111634805002351/croppedImage_1660661295402.png"
          />
        </div>

        <div className=" h-16 flex space-x-4 items-center">
          <div className="hidden md:block  ">
            <LpNavBar></LpNavBar>
          </div>
          {manuControl && (
            <GiHamburgerMenu
              className=" text-3xl md:hidden "
              onClick={onhandleManueControle}
            />
          )}
          <Link to="/CartPage">
            <div className=" flex flex-col items-center mr-4">
              <span>10</span>
              <FiShoppingCart className=" text-4xl hover:bg-red-200  " />
            </div>
          </Link>
        </div>
      </div>
      {!manuControl && (
        <MbNavBar MobileViewStop={onhandleManueControle}></MbNavBar>
      )}
    </div>
  );
};
NavBar.defaultProps = {};
export default NavBar;
