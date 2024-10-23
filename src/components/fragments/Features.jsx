import FeaturesContent from "../elements/FeaturesContent";
import FeaturesHeader from "../elements/SectionHeader";

export default function Features() {
  return (
    <section
      className="px-[182px] max-[415px]:px-[50px] max-[415px]:h-[2060px] py-[120px] flex flex-col bg-bgFeatures bg-cover bg-no-repeat min-h-screen gap-[60px]"
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
      <div className="flex flex-col max-[415px]:gap-10 items-center relative">
        <FeaturesContent text="text-center" items="items-center" />
        <div className="flex max-[415px]:flex-col max-[415px]:h-full max-[415px]:gap-10 h-[850px] min-[2500px]:h-[820px] max-[1919px]:h-[550px] w-[90%] min-[2500px]:w-[85%] max-[1441px]:w-[95%] my-[120px] max-[415px]:my-0 justify-between">
          <div className="flex flex-col max-[415px]:gap-10 justify-between max-[415px]:items-center">
            <FeaturesContent text="text-right" items="items-end" />
            <FeaturesContent text="text-right" items="items-end" />
          </div>
          <div className="flex flex-col max-[415px]:gap-10 max-[415px]:mt-[488px] justify-between max-[415px]:items-center">
            <FeaturesContent text="text-left" items="items-start" />
            <FeaturesContent text="text-left" items="items-start" />
          </div>
        </div>
        <FeaturesContent text="text-center" items="items-center" />
        <img
          src="public/svg/feature-image.svg"
          className="w-auto h-[1200px] max-[1919px]:h-[900px] max-[415px]:h-full items-center ml-14 absolute top-[244px] min-[2500px]:top-[210px] max-[1919px]:top-[200px] max-[415px]:top-[20px] left-[-20px] max-[415px]:left-[-35px]"
        />
      </div>
    </section>
  );
}
