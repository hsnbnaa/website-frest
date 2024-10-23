import Navbar from "../elements/Navbar";

export default function Header() {
  return (
    <header className="pt-[70px] max-[415px]:pt-[40px] mx-[182px] max-[415px]:mx-[50px] flex justify-center">
      <div className="p-[5px] bg-white rounded-[5px] min-w-[1580px] min-[2500px]:min-w-[1800px] max-[1919px]:min-w-[1280px] max-[415px]:min-w-[360px]">
        <div className="flex justify-between min-[1024px]:hidden">
          <img src="public/svg/ham-menu.svg" alt="" />
          <span className="uppercase py-[8px] px-[6px] bg-[#5956E9] text-[10px] text-white rounded-[5px]">
            <a href="#">Order Now</a>
          </span>
        </div>
        <Navbar />
        <div className="w-full relative">
          <img
            src="public/images/logo.png"
            className="absolute translate-x-[300%] top-[-80px] max-[415px]:top-[-45px] min-[2500px]:translate-x-[370%] max-[1919px]:translate-x-[230%] max-[415px]:translate-x-[130%] max-[415px]:w-[100px] max-[415px]:h-[60px]"
          />
        </div>
      </div>
    </header>
  );
}
