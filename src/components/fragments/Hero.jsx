import HeroContent from "../elements/HeroContent";

export default function Hero() {
  return (
    <div className="pt-[70px] ml-[182px] flex justify-between items-center">
      <div className="relative ml-[50px]">
        <img
          src="public/images/shadow-hero.png"
          className="w-[670px] h-[635px]"
        />
        <HeroContent />
      </div>
      <img src="public/images/hero-image.png" alt="" />
    </div>
  );
}
