import FeedbackCard from "../elements/FeedbackCard";
import SectionHeader from "../elements/SectionHeader";

export default function Feedback() {
  return (
    <section
      className="px-[182px] max-[1426px]:px-[112px] max-[1100px]:px-[50px] max-[430px]:px-[50px] min-[2500px]:px-[282px] py-[120px] max-[430px]:py-[60px] bg-bgHero bg-cover bg-no-repeat"
      id="feedback"
    >
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
