import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-row justify-between items-center text-[20px] min-[2500px]:text-2xl max-[1300px]:text-[16px] max-[1100px]:text-[14px] font-semibold text-[#232233] max-[1919px]:text-[18px] max-[900px]:hidden">
      <div className="uppercase flex flex-row gap-[38px] max-[1100px]:gap-[30px] pl-[47px]">
        <span>
          <a className="cursor-pointer" onClick={() => scrollToSection("")}>
            Home
          </a>
        </span>
        <span>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
        </span>
        <span>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection("features")}
          >
            Features
          </a>
        </span>
      </div>
      <div className="uppercase flex flex-row gap-[38px] max-[1100px]:gap-[30px] items-center">
        <span>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection("products")}
          >
            Products
          </a>
        </span>
        <span>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection("teams")}
          >
            Our Team
          </a>
        </span>

        <span className="py-[12px] px-[15px] bg-[#5956E9] text-white rounded-[5px]">
          <a href="#">Order Now</a>
        </span>
      </div>
    </nav>
  );
}
