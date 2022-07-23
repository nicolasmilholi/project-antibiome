import CardsContainer from "./CardsContainer";
const ContentTwo = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
        <p className="text-2xl font-bold text-[#389CD6] pl-96 pr-96">Our products</p>
        </div>
        <CardsContainer />
      </div>
  );
};
export default ContentTwo;
