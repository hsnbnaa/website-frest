import HeroContent from "../elements/HeroContent";

export default function Hero() {
  return (
    <div className="pt-[70px] ml-[182px] flex justify-between items-center">
      <div className="relative ml-[50px]">
        <img
          src="public/images/shadow-hero.png"
          className="w-[670px] min-[2500px]:w-[870px] max-[1919px]:w-[470px] h-[635px] min-[2500px]:h-[835px] max-[1919px]:h-[435px]"
        />
        <HeroContent />
      </div>
      <img
        src="public/images/hero-image.png"
        alt=""
        className="min-[2500px]:w-[770px] max-[1919px]:w-[370px] min-[2500px]:h-auto"
      />
    </div>
  );
}
