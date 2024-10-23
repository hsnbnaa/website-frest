export default function HeroContent() {
  return (
    <div className="w-[670px] min-[2500px]:w-[870px] max-[1919px]:w-[470px] h-[532px] min-[2500px]:h-[732px] max-[1919px]:h-[332px] bg-white absolute top-[60px] right-[50px]">
      <div className="pt-10 px-[30px] flex flex-col gap-5 max-[1919px]:gap-3">
        <h2 className="uppercase text-[#5956E9] font-bold text-[56px] min-[2500px]:text-[76px] max-[1919px]:text-[26px]">
          A Great App Makes Your Life Better
        </h2>
        <p className="text-lg min-[2500px]:text-[24px] max-[1919px]:text-[12px] text-[#6C6C72]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          dolorem non vitae a, beatae repellat asperiores qui tenetur minus rem
          in impedit perferendis dignissimos ipsum! Dolor illo blanditiis aut
          saepe.
        </p>
        <div className="pt-8 max-[1919px]:pt-4 flex flex-col gap-5 min-[2500px]:gap-10 max-[1919px]:gap-3">
          <h5 className="uppercase text-[25px] min-[2500px]:text-[45px] max-[1919px]:text-[18px] font-semibold text-[#232233]">
            Order Beverage Now
          </h5>
          <img
            src="public/images/order-icon.png"
            className="w-[414px] min-[2500px]:w-[614px] max-[1919px]:w-[274px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
