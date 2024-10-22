import FeedbackCard from "../elements/FeedbackCard";
import SectionHeader from "../elements/SectionHeader";

export default function Feedback() {
  return (
    <section className="px-[182px] py-[120px] h-screen bg-bgHero bg-cover bg-no-repeat">
      <SectionHeader
        title="Our Happy Customers"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
        color="text-white"
        descColor="text-white"
      />
      <FeedbackCard />
    </section>
  );
}
