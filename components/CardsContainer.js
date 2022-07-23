
import Image from "next/image";
import product1 from "../public/image_product_1.png";
import product2 from "../public/image_product_2.png";
import product3 from "../public/image_product_3.png";
import Card from "./globalComponents/Card";

const Cards = () => {

  const cards = [
    {
      pathImage: product1,
      description: 'intibiome wellness daily intimate wash',
      title: 'wellness',
      color: '#389CD6',
    },
    {
      pathImage: product2,
      description: 'intibiome active extra protection intimate wash',
      title: 'active',
      color: '#309D5F',
    },
    {
      pathImage: product3,
      description: 'intibiome agecare dryness relief intimate wash',
      title: 'agecare',
      color: '#EE6381',
    },
  ]

  return (
    <div className="container mx-auto lg:grid lg:grid-cols-3 gap-6 py-12 px-12 pl-44 pr-44 items-center place-content-center justify-center">
      <Card
        cardDetails={cards}
      />
    </div>
  );
};
export default Cards;
