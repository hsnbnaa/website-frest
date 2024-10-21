export default function HeroContent() {
  return (
    <div className="w-[670px] h-[532px] bg-white absolute top-[60px] right-[50px]">
      <div className="pt-10 px-[30px] flex flex-col gap-5">
        <h2 className="uppercase text-[#5956E9] font-bold text-[56px]">
          A Great App Makes Your Life Better
        </h2>
        <p className="text-lg text-[#6C6C72]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          dolorem non vitae a, beatae repellat asperiores qui tenetur minus rem
          in impedit perferendis dignissimos ipsum! Dolor illo blanditiis aut
          saepe.
        </p>
        <div className="pt-8 flex flex-col gap-5">
          <h5 className="uppercase text-[25px] font-semibold text-[#232233]">
            Order Beverage Now
          </h5>
          <img
            src="public/images/order-icon.png"
            className="w-[414px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
