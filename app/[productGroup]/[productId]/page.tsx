import { allProducts } from "../all-products";
import Image from "next/image"
import { RiWhatsappFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

export default function Product({ params }: {
    params: {
        productId: string;
        productGroup: string;
    };
}) {
    const newArr = allProducts[params.productGroup].filter((item) => item.id === params.productId)
    // нужно чтобы отображался 1 конкретный серый продукт (чтобы можно было изменить его цвет)
    return (
        <div className="h-svh">
            <div className="flex justify-center items-center text-3xl p-4 m-7 bg-slate-200 rounded-xl w-2/5"> {`${newArr.map((item) => item.name)}`} </div>
            <div className="flex justify-left flex-wrap gap-16 mx-24">
                {newArr.map((item) =>
                    <div key={item.URL} className="flex flex-row p-3 border-4 rounded-xl w-full bg-gray-300 relative">
                        <Image src={item.photo} alt='itemPhoto' className="rounded-xl" height={400} />
                        <div className="flex flex-col justify-between ml-12 gap-7 py-7">
                            <div className="flex gap-3 text-2xl">
                                <div className="font-semibold"> Размер: </div>
                                <div className="flex"> {item.size} </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <div className="text-2xl font-medium">Цвет:</div>
                                    <div className="text-2xl border-2 rounded-3xl w-fit py-1 px-2 bg-white"> Серый</div>
                                </div>

                                <div className="flex gap-3 mt-3">
                                    {/*создать отдельынй компонент Colors и вставить сюда: 
                                    1. у каждого продукта будут только свои возможные цвета отображаться
                                    2. будет функционал: при нажатии на другой цвет будет меняться фото и название цвета
                                    */}
                                    <FaCircle color="gray" size={35} />
                                    <FaCircle color="red" size={35} />
                                    <FaCircle color="brown" size={35} />
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 text-2xl">
                                <div className="font-medium"> ЦЕНА: </div>
                                <div className="text-blue-700">{item.price} ₽/ШТ.</div>
                            </div>

                        </div>
                        <a href="https://web.whatsapp.com/" target="blank" className="flex justify-center items-center h-fit gap-5 border-2 border-green-500 rounded-3xl mt-3 p-2 bg-zinc-200 absolute bottom-5 right-32">
                            <div className="text-3xl"> Заказать </div>
                            <RiWhatsappFill size={35} color="green" />
                        </a>
                    </div>
                )}
            </div>
            <div className="text-3xl m-10"> Доставка: </div>
        </div>
    )
}