import FeaturesContent from "../elements/FeaturesContent";
import FeaturesHeader from "../elements/FeaturesHeader";

export default function Features() {
  return (
    <section className="px-[182px] py-[120px] flex flex-col bg-bgFeatures bg-cover bg-no-repeat min-h-screen gap-[60px]">
      <FeaturesHeader />
      <div className="flex flex-col items-center relative">
        <FeaturesContent text="text-center" items="items-center" />
        <div className="flex h-[850px] w-[90%] my-[120px] justify-between">
          <div className="flex flex-col justify-between">
            <FeaturesContent text="text-right" items="items-end" />
            <FeaturesContent text="text-right" items="items-end" />
          </div>
          <div className="flex flex-col justify-between">
            <FeaturesContent text="text-left" items="items-start" />
            <FeaturesContent text="text-left" items="items-start" />
          </div>
        </div>
        <FeaturesContent text="text-center" items="items-center" />
        <img
          src="public/svg/feature-image.svg"
          className="w-auto h-[1200px] items-center ml-14 absolute top-[244px] left-[-10px]"
        />
      </div>
    </section>
  );
}
