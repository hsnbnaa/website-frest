import Navbar from "../elements/Navbar";

export default function Header() {
  return (
    <header className="pt-[70px] mx-[182px] flex justify-center">
      <div className="p-[5px] bg-white rounded-[5px] min-w-[1580px] min-[2500px]:min-w-[1800px] max-[1919px]:min-w-[1280px]">
        <Navbar />
        <div className="w-full relative">
          <img
            src="public/images/logo.png"
            className="absolute translate-x-[300%] top-[-80px] max-[1919px]:translate-x-[230%]"
          />
        </div>
      </div>
    </header>
  );
}
