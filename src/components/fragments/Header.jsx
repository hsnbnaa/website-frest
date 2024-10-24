import React, { useState } from "react";
import Navbar from "../elements/Navbar";
import Dropdown from "../elements/Dropdown";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="pt-[70px] max-[900px]:pt-[50px] max-[430px]:pt-[40px] mx-[182px] max-[1426px]:mx-[112px] max-[1300px]:mx-[82px] max-[1100px]:mx-[50px] max-[430px]:mx-[20px] flex justify-center">
      <div
        className={`p-[5px] bg-white ${
          active ? "rounded-t-[5px]" : "rounded-[5px]"
        } w-[1580px] min-[2500px]:w-[1800px] max-[1919px]:w-[1280px] max-[430px]:w-[360px] z-30`}
      >
        <div className="flex justify-between relative min-[930px]:hidden">
          <img
            src="public/svg/ham-menu.svg"
            alt=""
            onClick={() => setActive(!active)}
          />
          <Dropdown active={active} setActive={setActive} />
          <span className="uppercase py-[8px] px-[6px] bg-[#5956E9] max-[430px]:text-[10px] max-[930px]:text-[20px] text-white rounded-[5px]">
            <a href="#">Order Now</a>
          </span>
        </div>
        <Navbar />
        <div className="w-full flex justify-center items-center relative">
          <img
            src="public/images/logo.png"
            className="absolute z-20 top-[-80px] max-[930px]:top-[-70px] max-[430px]:top-[-45px] max-[930px]:w-[200px] max-[430px]:w-[100px] max-[930px]:h-[90px] max-[430px]:h-[60px]"
          />
        </div>
      </div>

      {/* Overlay */}
      {active && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[5]"
          onClick={() => setActive(false)} // Click to close the dropdown
        ></div>
      )}
    </header>
  );
}
