import TeaserHeader from "../elements/TeaserHeader";

export default function Teaser() {
  return (
    <section className="h-[700px] max-[430px]:h-[375px] relative flex justify-center items-center">
      <TeaserHeader />
      <img
        src="public/images/teaser-image.png"
        className="absolute max-[1426px]:w-[670px] max-[1300px]:w-[570px] max-[430px]:w-[343px] max-[430px]:rounded-lg bottom-[-80px] max-[1426px]:bottom-[-60px] max-[1300px]:bottom-[-40px] max-[1100px]:bottom-[-20px] max-[430px]:bottom-[-70px] max-[361px]:bottom-[-70px]"
      />
    </section>
  );
}
