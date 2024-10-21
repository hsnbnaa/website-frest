import ProductsContent from "../elements/ProductsContent";
import ProductsHeader from "../elements/SectionHeader";

export default function Products() {
  return (
    <section
      className="mx-[202px] my-[120px] flex flex-col gap-[60px]"
      id="products"
    >
      <ProductsHeader
        title="Chekout Our Products Interface Look"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
        color="#232233"
        descColor="#6C6C72"
      />
      <ProductsContent />
    </section>
  );
}
