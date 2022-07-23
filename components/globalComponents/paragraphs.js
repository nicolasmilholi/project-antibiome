
function Paragraphs({ structure }) {
  return (
    <div className="container mx-auto py-16 px-12 items-center place-content-center justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center text-center">
        <p className="text-2xl font-bold text-[#389CD6] pl-96 pr-96">{structure.title}</p>
        {
          structure.paragraphs && (
            structure.paragraphs.map((item, index) => {
              return (
                <div key={index}>
                  <p className={`text-[#7B7070] ${structure.padding}`}>
                    {item}
                  </p>
                </div>
              )
            })
          )
        }
      </div>
    </div >
  );
};
export default Paragraphs;
