import Image from "next/image";

const Imagem = ({ imagePath, imageMobile }) => {
  return (
    <>
      {
        imageMobile && (
          <div className="visible md:hidden lg:hidden">
            <Image src={imageMobile} alt="Logo" />
          </div>
        )
      }
      {
        imagePath && (
          <div className="invisible md:visible lg:visible">
            <Image src={imagePath} alt="Logo" />
          </div>
        )
      }
    </>
  );
};
export default Imagem;
