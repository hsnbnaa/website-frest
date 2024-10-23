import FeaturesContent from "../elements/FeaturesContent";
import FeaturesHeader from "../elements/SectionHeader";

export default function Features() {
  return (
    <section
      className="px-[182px] py-[120px] flex flex-col bg-bgFeatures bg-cover bg-no-repeat min-h-screen gap-[60px]"
      id="features"
    >
      <FeaturesHeader
        title="App Features"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
        color="text-white"
        descColor="text-white"
      />
      <div className="flex flex-col items-center relative">
        <FeaturesContent text="text-center" items="items-center" />
        <div className="flex h-[850px] max-[1919px]:h-[550px] w-[90%] my-[120px] justify-between">
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
          className="w-auto h-[1200px] max-[1919px]:h-[900px] items-center ml-14 absolute top-[244px] max-[1919px]:top-[200px] left-[-20px]"
        />
      </div>
    </section>
  );
}
