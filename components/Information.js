
import Image from "next/image";
import Icons from "../public/icons.png";
const Information = () => {
  return (
      <div className="flex flex-row justify-center py-20">
        <div>
          <Image 
            src={Icons}
            alt="Icons" />
        </div>
      </div>
  );
};
export default Information;
