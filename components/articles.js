import article1 from "../public/article_1.png";
import article2 from "../public/article_2.png";
import article3 from "../public/article_3.png";
import Card from "./globalComponents/card";

const Discoveries = () => {

  const cardsDetails = [
    {
      pathImage: article1,
      description: 'intibiome wellness daily intimate wash',
    },
    {
      pathImage: article2,
      description: 'intibiome active extra protection intimate wash',
    },
    {
      pathImage: article3,
      description: 'intibiome agecare dryness relief intimate wash',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
    <div className="text-center">
    <p className="text-2xl font-bold text-[#389CD6] py-12 pl-96 pr-96">keep up to date with our discoveries</p>
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
