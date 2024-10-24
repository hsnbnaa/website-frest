export default function HeroContent() {
  return (
    <div className="w-[670px] min-[2500px]:w-[870px] max-[1919px]:w-[470px] max-[930px]:w-[356px] max-[430px]:w-[323px] max-[361px]:w-[300px] h-[532px] min-[2500px]:h-[732px] max-[1919px]:h-[332px] max-[930px]:h-[318px] max-[430px]:h-[318px] max-[361px]:h-[295px] bg-white absolute top-[60px] max-[930px]:top-[30px] max-[430px]:top-[20px] right-[50px] max-[930px]:right-[35px] max-[430px]:right-[20px]">
      <div className="pt-10 max-[430px]:pt-[30px] px-[30px] max-[430px]:px-[18px] flex flex-col gap-5 max-[1919px]:gap-3">
        <h2 className="uppercase text-[#5956E9] font-bold text-[56px] min-[2500px]:text-[76px] max-[1919px]:text-[26px] max-[930px]:text-[22px] max-[430px]:text-[25px] max-[361px]:text-[20px]">
          A Great App Makes Your Life Better
        </h2>
        <p className="text-lg min-[2500px]:text-[24px] max-[1919px]:text-[12px] max-[430px]:text-[16px] max-[361px]:text-[14px] max-[430px]:leading-6 text-[#6C6C72]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className="pt-8 max-[1919px]:pt-4 max-[930px]:pt-2 max-[430px]:pt-[5px] flex flex-col gap-5 min-[2500px]:gap-10 max-[1919px]:gap-3">
          <h5 className="uppercase text-[25px] min-[2500px]:text-[45px] max-[1919px]:text-[18px] max-[430px]:text-[20px] max-[361px]:text-[16px] font-semibold text-[#232233]">
            Order Beverage Now
          </h5>
          <img
            src="public/images/order-icon.png"
            className="w-[414px] min-[2500px]:w-[614px] max-[1919px]:w-[274px] max-[430px]:w-[228px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
