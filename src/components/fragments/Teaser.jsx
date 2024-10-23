import TeaserHeader from "../elements/TeaserHeader";

export default function Teaser() {
  return (
    <section className="h-[700px] max-[415px]:h-[375px] relative flex justify-center items-center">
      <TeaserHeader />
      <img
        src="public/images/teaser-image.png"
        className="absolute max-[415px]:w-[343px] max-[415px]:rounded-lg bottom-[-80px]"
      />
    </section>
  );
}
