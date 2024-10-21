export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center text-[20px] font-semibold text-[#232233] shrink">
      <div className="uppercase flex flex-row gap-[38px] pl-[47px]">
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#">Features</a>
        </span>
      </div>
      <div className="uppercase flex flex-row gap-[38px] items-center">
        <span>
          <a href="#">Products</a>
        </span>
        <span>
          <a href="#">Our Teamm</a>
        </span>

        <span className="py-[12px] px-[15px] bg-[#5956E9] text-white rounded-[5px]">
          <a href="#">Order Now</a>
        </span>
      </div>
    </nav>
  );
}
