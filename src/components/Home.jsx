import React from "react";
import { SiApple } from "react-icons/si";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsArrowDown, BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";
import {
  homeCube,
  homeCubes,
  homePhone,
  homePillar,
  homeStairs,
  rays,
} from "../Assets/assets";

const Home = () => {
  return (
    <div className="flex w-full px-2 items-center justify-center bg-black overflow-visible h-[100vh]">
      <img src={rays} alt="rays" className="w-full h-full z-0" />
      <div className="absolute w-[80%] h-[20%] md:h-[30%] top-20 flex items-start justify-between lg:w-[90%] z-10 mx-auto overflow-hidden px-0 lg:px-10">
        <img src={homeCube} alt="cube" />
        <img src={homeStairs} alt="Stairs" className="h-full" />
      </div>
      <div className="absolute bottom-0 w-[80%] h-[15%]  md:h-[20%] flex items-start justify-between lg:w-[75%] lg:h-[25%] z-10 mx-auto overflow-hidden px-0 lg:px-10">
        <img src={homeCubes} alt="cubes" className="h-full" />
        <img src={homePillar} alt="Pillar" className="h-full" />
      </div>
      {/* Main heading  */}
      <div className="absolute text-white text-7xl md:text-[120px] lg:text-[180px] h-52 md:h-[60%] lg:h-auto font-extrabold flex items-center justify-center">
        <p className="absolute top-10 md:top-1/4 lg:top-0 z-10 headings">CASH</p>
        <img src={homePhone} alt="Phone" className=" h-full top-0 z-20 md:h-[80%] " />
        <p className="absolute bottom-0 md:bottom-20 md:opacity-95 z-30 headings">APP</p>
      </div>
      {/* Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between absolute bottom-2 w-full z-20 px-4 py-24 md:py-6">
        {/* Buttons */}
        <div className="flex flex-row text-white headings mb-4 md:mb-0">
          <button className="flex items-center justify-around uppercase p-3 lg:p-4 border-[1px] border-white bg-black rounded-lg mx-4">
            <SiApple className="text-[#00D54B] lg:mr-4 text-2xl lg:text-3xl " />{" "}
            <p >APP STORE</p>
          </button>
          <button className="flex items-center justify-around uppercase p-3 lg:p-4 border-[1px] border-white bg-black rounded-lg mx-4">
            <BiLogoPlayStore className="text-[#00D54B] lg:mr-4 text-2xl lg:text-3xl " />{" "}
            <p>GOOGLE PLAY</p>
          </button>
        </div>
        {/* Go down button */}
        <a className="hidden lg:inline" href="#payment">
          <BsArrowDown size={30} className="text-[#00D54B]" />
        </a>
        {/* Text */}
        <div className="flex w-2/5 text-[10px] text-[#B6B6B6] items-center justify-center mt-4 ">
          <p className="hidden lg:block w-[60%]">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex text-white text-2xl lg:text-4xl ml-4">
            <BsTwitch />
            <BsTwitter className="mx-4" />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
