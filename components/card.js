
import Image from "next/image";

const Card = ({ cardDetails }) => {
    return (
        <>
            {
                cardDetails && (
                    cardDetails.map((item, index) => {
                        return (
                            <div key={index} className="col-span-2 flex flex-col items-center justify-center text-center shadow-lg shadow-gray-300 rounded-md">
                                <Image src={item.pathImage} alt="Logo" />
                                <p className="text-[#7B7070] py-9 px-9">
                                    {item.description}
                                </p>
                                <p className={`container flex flex-col h-12 rounded-b-md font-medium text-white items-center justify-center ${item.color}`}>{item.title}</p>
                            </div>
                        )
                    })


                )
            }
        </>
    );
};
export default Card;
