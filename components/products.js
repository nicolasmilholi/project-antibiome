import product1 from "../public/image_product_1.png";
import product2 from "../public/image_product_2.png";
import product3 from "../public/image_product_3.png";
import Card from "./globalComponents/card";

const Cards = () => {

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
    <>
      <div className="text-center">
        <p className="text-2xl font-bold text-[#389CD6] px-0 sm:px-96">Our products</p>
      </div>
      <div className="flex flex-nowrap overflow-x-auto md:flex-col md:items-center md:justify-center">
        <div className="flex md:grid md:grid-cols-6 gap-6 py-12 px-10 sm:px-44 items-center justify-center">
          <Card
            cardDetails={cardsDetails}
          />
        </div>
      </div>
    </>
  );
};
export default Cards;
