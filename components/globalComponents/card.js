
import Image from "next/image";

const Card = ({ cardDetails }) => {
    return (
        <>
            {
                cardDetails && (
                    cardDetails.map((item, index) => {
                        return (
                            <div key={index} className="col-span-2 w-56 sm:w-full flex flex-col items-center justify-center text-center shadow-lg shadow-gray-300 rounded-md">
                                <Image src={item.pathImage} alt="Logo" />
                                <div className="container py-9">
                                    <p className="text-[#7B7070]">
                                        {item.description}
                                    </p>
                                </div>
                                {
                                    item.title && (
                                        <p className={`container flex flex-col h-12 rounded-b-md font-medium text-white items-center justify-center ${item.color}`}>{item.title}</p>
                                    )
                                }
                            </div>
                        )
                    })


                )
            }
        </>
    );
};
export default Card;
