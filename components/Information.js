
import Image from "next/image";
import Icons from "../public/icons.png";
const Contents = () => {
  return (
    <div className="container mx-auto">
      <div className=" lg:flex lg:flex-row justify-center pl-44 pr-44">
        <div>
          <Image 
            src={Icons}
            alt="Icons" />
        </div>
      </div>
    </div>
  );
};
export default Contents;
