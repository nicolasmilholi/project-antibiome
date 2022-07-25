
function Paragraphs({ structure }) {
  return (
    <div className="sm:container sm:mx-auto">
      <div className="py-1 px-1 sm:py-16 sm:px-12 items-center place-content-center justify-center">
        <div className="flex flex-col space-y-2 items-center justify-center text-center">
          <p className="text-2xl font-bold text-[#389CD6] pb-6 px-12 sm:px-96">{structure.title}</p>
          <div className="container">
            {
              structure.paragraphs && (
                structure.paragraphs.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className={`text-[#7B7070] px-26 sm:${structure.padding} pb-4`}>
                        {item}
                      </p>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
      </div >
    </div>
  );
};
export default Paragraphs;
