import product1 from "../public/image_product_1.png";
import product2 from "../public/image_product_2.png";
import product3 from "../public/image_product_3.png";
import Card from "./card";

const Discoveries = () => {

  const cardsDetails = [
    {
      pathImage: product1,
      description: 'intibiome wellness daily intimate wash',
      title: 'wellness',
      color: 'bg-[#389CD6]',
    },
    {
      pathImage: product2,
      description: 'intibiome active extra protection intimate wash',
      title: 'active',
      color: 'bg-[#309D5F]',
    },
    {
      pathImage: product3,
      description: 'intibiome agecare dryness relief intimate wash',
      title: 'agecare',
      color: 'bg-[#EE6381]',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
    <div className="text-center">
    <p className="text-2xl font-bold text-[#389CD6] py-12 pl-96 pr-96">Our products</p>
    </div>
      <div className="container mx-auto lg:grid lg:grid-cols-6 gap-6 py-2 px-12 pl-44 pr-44 items-center place-content-center justify-center">
        <Card
          cardDetails={cardsDetails}
        />
      </div>
  </div>
  );
};
export default Discoveries;
