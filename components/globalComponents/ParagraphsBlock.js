
function ParagraphsBlock({title, paragraphs}) {
  return (
    <div className="container mx-auto py-16 px-12 items-center place-content-center justify-center">
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <p className="text-2xl font-bold text-[#389CD6] pl-96 pr-96 ">{title}</p>
        {
          paragraphs && (
            paragraphs.map((item, index) => {
              return (
                <p key={index} className="text-[#7B7070] pl-96 pr-96">
                  {item}
                </p>
              )
            })
          )
        }
      </div>
    </div >
  );
};
export default ParagraphsBlock;
