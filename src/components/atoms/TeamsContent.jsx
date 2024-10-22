export default function TeamsContent() {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <img src="public/images/profile-circle.png" alt="" />
        <img src="public/images/profile-image.png" className="absolute" />
      </div>
      <div className="mt-[60px] flex flex-col items-center">
        <h4 className="text-[36px] font-bold uppercase text-[#232233]">
          Craig Gouse
        </h4>
        <h6 className="text-[24px] text-[#6C6C72] uppercase font-semibold">
          UI/UX Designer
        </h6>
      </div>
      <p className="mt-[20px] text-[16px] text-[#6C6C72] w-[70%] text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        minima vitae quia maxime debitis numquam vel placeat dolor ipsum eos
        fugit sit, aliquam a, sequi molestiae animi, porro doloremque iste.
      </p>
      <div className="flex mt-[40px]">
        <img src="/svg/fb-icon.svg" alt="" className="px-[35px]" />
        <img
          src="/svg/ig-icon.svg"
          alt=""
          className="border-x border-[#6C6C72] px-[35px]"
        />
        <img
          src="/svg/tw-icon.svg"
          alt=""
          className="px-[35px] border-r border-[#6C6C72]"
        />
        <img src="/svg/yt-icon.svg" alt="" className="px-[35px]" />
      </div>
    </>
  );
}
