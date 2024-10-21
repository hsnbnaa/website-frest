import TeaserHeader from "../elements/TeaserHeader";

export default function Teaser() {
  return (
    <section className="mt-[120px] h-[700px] relative flex justify-center items-center">
      <TeaserHeader />
      <img
        src="public/images/teaser-image.png"
        className="absolute bottom-[-80px]"
      />
    </section>
  );
}
