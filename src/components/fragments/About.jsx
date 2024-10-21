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
      className="mx-[182px] my-[120px] flex flex-col gap-[60px]"
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
      <div className="flex flex-row justify-between w-full">
        <img src="public/images/about-image.png" />
        <div className="flex flex-col gap-10">
          {item.map((item, index) => (
            <AboutContent key={index} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
