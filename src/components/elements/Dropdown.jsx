import React from "react";

export default function Dropdown({ setActive }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute z-10 left-[-5px] top-9 flex flex-col text-center bg-white rounded-[5px] w-[360px] py-4 px-[25px]">
      <nav>
        <ul onClick={() => setActive(false)}>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase">
            <a onClick={() => scrollToSection("")}>Home</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase">
            <a onClick={() => scrollToSection("features")}>Features</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase">
            <a onClick={() => scrollToSection("products")}>Products</a>
          </li>
          <li className="py-[10px] text-[20px] text-[#232233] font-medium cursor-pointer uppercase">
            <a onClick={() => scrollToSection("teams")}>Our Teams</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
