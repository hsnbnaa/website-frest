import React from "react";

export default function Dropdown({ active, setActive }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`absolute z-10 left-[-5px] max-[430px]:top-[35px] max-[930px]:top-[48px] flex flex-col text-center bg-white overflow-hidden rounded-b-[5px] max-[430px]:w-[102.8%] max-[930px]:w-[101.4%] max-[430px]:${
        active ? "py-4" : "py-0"
      } max-[930px]:${active ? "py-6" : "py-0"} shrink ${
        active ? "max-h-[400px]" : "max-h-0"
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="w-full">
        <ul onClick={() => setActive(false)} className="w-full">
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a onClick={() => scrollToSection("")}>Home</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a onClick={() => scrollToSection("features")}>Features</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a onClick={() => scrollToSection("products")}>Products</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a onClick={() => scrollToSection("teams")}>Our Teams</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
