import SectionHeader from "../elements/SectionHeader";
import TeamsCard from "../elements/TeamsCard";

export default function Teams() {
  return (
    <section className="my-[170px] mx-[182px]" id="teams">
      <SectionHeader
        title="Our Reative Team"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
        color="text-[#232233]"
        descColor="text-[#6C6C72]"
      />
      <TeamsCard />
    </section>
  );
}
