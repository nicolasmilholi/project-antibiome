import article1 from "../public/article_1.png";
import article2 from "../public/article_2.png";
import article3 from "../public/article_3.png";
import Card from "./globalComponents/card";

const Discoveries = () => {

  const cardsDetails = [
    {
      pathImage: article1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      pathImage: article2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      pathImage: article3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <>
      <div className="text-center">
        <p className="text-2xl font-bold text-[#389CD6] px-10 sm:pt-12 sm:px-96">keep up to date with our discoveries</p>
      </div>
      <div className="flex flex-nowrap overflow-x-auto sm:flex-col sm:items-center sm:justify-center">
        <div className="flex sm:grid sm:grid-cols-6 gap-6 py-12 px-10 sm:px-44 items-center justify-center">
          <Card
            cardDetails={cardsDetails}
          />
        </div>
      </div>
    </>
  );
};

export default Discoveries;
