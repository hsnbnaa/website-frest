import AboutContent from "../elements/AboutContent";
import AboutHeader from "../elements/SectionHeader";

const item = [
  {
    title: "Creative Design",
  },
  {
    title: "Easy to Use",
  },
  {
    title: "Best User Experience",
  },
];

export default function About() {
  return (
    <section
      className="mx-[182px] max-[1426px]:mx-[112px] max-[1100px]:mx-[50px] max-[430px]:mx-[50px] min-[2500px]:mx-[282px] max-[1300px]:mx-[82px] py-[120px] max-[1441px]:py-0 max-[1441px]:my-[120px] flex flex-col gap-[60px]"
      id="about"
    >
      <AboutHeader
        title="About Our Product"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
        color="text-[#232233]"
        descColor="text-[#6C6C72]"
      />
      <div className="flex flex-row max-[430px]:flex-col justify-between max-[430px]:justify-normal max-[430px]:gap-10 items-center w-full">
        <img
          src="public/images/about-image.png"
          className="min-[2500px]:w-[686px] max-[930px]:w-[238px] h-auto"
        />
        <div className="flex flex-col gap-10">
          {item.map((item, index) => (
            <AboutContent key={index} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
