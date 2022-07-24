import Button from "./globalComponents/button";


const More = () => {
  return (
    <div className="container mx-auto">
      <div className=" lg:flex lg:flex-row justify-center py-20 pl-20 pr-20">
        <div>
            <Button
                title='see more'
                textColor='text-white'
                bgColor='bg-[#389CD6]'
            />
        </div>
      </div>
    </div>
  );
};
export default More;
