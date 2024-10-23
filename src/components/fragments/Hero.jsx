import HeroContent from "../elements/HeroContent";

export default function Hero() {
  return (
    <div className="pt-[120px] mx-[182px] max-[415px]:mx-0 flex max-[415px]:flex-col justify-between items-center">
      <div className="relative ml-[50px]">
        <img
          src="public/images/shadow-hero.png"
          className="w-[670px] min-[2500px]:w-[870px] max-[1919px]:w-[470px] max-[415px]:w-[323px] h-[635px] min-[2500px]:h-[835px] max-[1919px]:h-[435px] max-[415px]:h-[358px]"
        />
        <HeroContent />
      </div>
      <img
        src="public/images/hero-image.png"
        alt=""
        className="min-[2500px]:w-[570px] max-[1919px]:w-[370px] max-[415px]:w-[300px] max-[415px]:pt-[40px] h-auto"
      />
    </div>
  );
}
