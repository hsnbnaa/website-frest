import ProductsContent from "../elements/ProductsContent";
import ProductsHeader from "../elements/SectionHeader";

export default function Products() {
  return (
    <section
      className="mx-[202px] max-[415px]:mx-0 min-[2500px]:mx-[300px] mt-[120px] min-[2500px]:mt-0 min-[2500px]:pt-[120px] flex flex-col gap-[60px]"
      id="products"
    >
      <div className="max-[415px]:mx-[50px]">
        <ProductsHeader
          title="Chekout Our Products Interface Look"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia,
        laborum iste placeat illo odio nesciunt nostrum cupiditate incidunt
        exercitationem est expedita? Pariatur nulla voluptatem accusantium,
        vitae omnis cumque non."
          color="text-[#232233]"
          descColor="text-[#6C6C72]"
        />
      </div>
      <ProductsContent />
    </section>
  );
}
