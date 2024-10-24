import HeroContent from "../elements/HeroContent";

export default function Hero() {
  return (
    <div className="pt-[120px] max-[930px]:pt-[221px] max-[430px]:pt-[100px] pb-[80px] mx-[182px] max-[1426px]:mx-[112px] max-[1300px]:mx-[82px] max-[930px]:mx-0 max-[930px]:mr-5 max-[430px]:mx-0 flex max-[430px]:flex-col justify-between items-center">
      <div className="relative ml-[50px] max-[361px]:ml-[30px]">
        <img
          src="public/images/shadow-hero.png"
          className="w-[670px] min-[2500px]:w-[870px] max-[1919px]:w-[470px] max-[930px]:w-[375px] max-[430px]:w-[323px] max-[361px]:w-[300px] h-[635px] min-[2500px]:h-[835px] max-[1919px]:h-[435px] max-[930px]:h-[381px] max-[430px]:h-[358px] max-[361px]:h-[335px]"
        />
        <HeroContent />
      </div>
      <img
        src="public/images/hero-image.png"
        alt=""
        className="min-[1920px]:w-[570px] max-[1919px]:w-[370px] max-[1300px]:w-[300px] max-[930px]:w-[328px] max-[430px]:w-[300px] max-[430px]:pt-[40px] h-auto"
      />
    </div>
  );
}
