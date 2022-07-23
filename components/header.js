import Image from "next/image";

const Imagem = ({ imagePath }) => {
  return (
    <div>
      <Image src={imagePath} alt="Logo" />
    </div>
  );
};
export default Imagem;
