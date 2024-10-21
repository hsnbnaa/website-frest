import Navbar from "../elements/Navbar";

export default function Header() {
  return (
    <header className="pt-[70px] mx-[182px]">
      <div className="p-[5px] bg-white rounded-[5px] w-[1580px] ">
        <Navbar />
        <div className="w-full relative">
          <img
            src="public/images/logo.png"
            className="absolute translate-x-[300%] top-[-80px]"
          />
        </div>
      </div>
    </header>
  );
}
