export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center text-[20px] font-semibold text-[#232233] max-[1919px]:text-[18px]">
      <div className="uppercase flex flex-row gap-[38px] pl-[47px]">
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#features">Features</a>
        </span>
      </div>
      <div className="uppercase flex flex-row gap-[38px] items-center">
        <span>
          <a href="#products">Products</a>
        </span>
        <span>
          <a href="#teams">Our Team</a>
        </span>

        <span className="py-[12px] px-[15px] bg-[#5956E9] text-white rounded-[5px]">
          <a href="#">Order Now</a>
        </span>
      </div>
    </nav>
  );
}
