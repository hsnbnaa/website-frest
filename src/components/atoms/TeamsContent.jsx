export default function TeamsContent() {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <img
          src="public/images/profile-circle.png"
          alt=""
          className="min-[2500px]:w-[250px] max-[1919px]:w-[180px] max-[415px]:w-[150px] h-auto"
        />
        <img
          src="public/images/profile-image.png"
          className="absolute min-[2500px]:w-[228px] max-[1919px]:w-[158px] max-[415px]:w-[128px] h-auto"
        />
      </div>
      <div className="mt-[60px] max-[1919px]:mt-[40px] flex flex-col items-center">
        <h4 className="text-[36px] min-[2500px]:text-[46px] max-[1919px]:text-[26px] max-[415px]:text-[24px] font-bold uppercase text-[#232233]">
          Craig Gouse
        </h4>
        <h6 className="text-[24px] min-[2500px]:text-[30px] max-[1919px]:text-[12px] max-[415px]:text-[16px] text-[#6C6C72] uppercase font-semibold">
          UI/UX Designer
        </h6>
      </div>
      <p className="mt-[20px] min-[2500px]:text-[26px] max-[1919px]:text-[10px] text-[16px]  text-[#6C6C72] w-[70%] text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        minima vitae quia maxime debitis numquam vel placeat dolor ipsum eos
        fugit sit, aliquam a, sequi molestiae animi, porro doloremque iste.
      </p>
      <div className="flex mt-[40px]">
        <img
          src="/svg/fb-icon.svg"
          alt=""
          className="px-[35px] max-[415px]:px-[25px] min-[2500px]:h-[34px] max-[415px]:h-[20px] w-auto"
        />
        <img
          src="/svg/ig-icon.svg"
          alt=""
          className="border-x border-[#6C6C72] px-[35px] max-[415px]:px-[25px] min-[2500px]:h-[34px] max-[415px]:h-[20px] w-auto"
        />
        <img
          src="/svg/tw-icon.svg"
          alt=""
          className="px-[35px] max-[415px]:px-[25px] border-r border-[#6C6C72] min-[2500px]:h-[34px] max-[415px]:h-[20px] w-auto"
        />
        <img
          src="/svg/yt-icon.svg"
          alt=""
          className="px-[35px] max-[415px]:px-[25px] min-[2500px]:h-[34px] max-[415px]:h-[20px] w-auto"
        />
      </div>
    </>
  );
}
