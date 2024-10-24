import FeaturesContent from "../elements/FeaturesContent";
import FeaturesHeader from "../elements/SectionHeader";

export default function Features() {
  return (
    <section
      className="px-[182px] max-[1426px]:px-[142px] max-[1300px]:px-[82px] max-[1100px]:px-[50px] max-[930px]:px-[10px] max-[430px]:px-[50px] max-[430px]:h-[2060px] py-[120px] flex flex-col bg-bgFeatures bg-cover bg-no-repeat min-h-screen gap-[60px]"
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
      <div className="flex flex-col max-[430px]:gap-10 items-center relative">
        <FeaturesContent text="text-center" items="items-center" />
        <div className="flex max-[430px]:flex-col max-[430px]:h-full max-[430px]:gap-10 h-[850px] min-[2500px]:h-[820px] max-[1919px]:h-[550px] w-[90%] min-[2500px]:w-[85%] max-[1441px]:w-[95%] my-[120px] max-[1426px]:mb-[160px] max-[1100px]:my-[40px] max-[430px]:my-0 justify-between">
          <div className="flex flex-col max-[430px]:gap-10 justify-between max-[430px]:items-center">
            <FeaturesContent text="text-right" items="items-end" />
            <FeaturesContent text="text-right" items="items-end" />
          </div>
          <div className="flex flex-col max-[430px]:gap-10 max-[430px]:mt-[488px] justify-between max-[430px]:items-center">
            <FeaturesContent text="text-left" items="items-start" />
            <FeaturesContent text="text-left" items="items-start" />
          </div>
        </div>
        <FeaturesContent text="text-center" items="items-center" />
        <img
          src="public/svg/feature-image.svg"
          className="w-auto h-[1200px] max-[1919px]:h-[930px] max-[1100px]:h-[700px] max-[430px]:h-full items-center ml-14 absolute top-[244px] min-[2500px]:top-[210px] max-[1919px]:top-[200px] max-[930px]:top-[160px] max-[430px]:top-[20px] left-[-20px] max-[1100px]:left-[-28px] max-[430px]:left-[-35px]"
        />
      </div>
    </section>
  );
}
