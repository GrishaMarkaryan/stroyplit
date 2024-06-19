'use client'
import { useState } from "react";
import { allProducts } from "../all-products";
import Image from "next/image"
import { RiWhatsappFill } from "react-icons/ri";
import Colors from "@/app/_components/colors";

export default function Product({ params }: {
    params: {
        productId: string;
        productGroup: string;
    };
}) {
    const [color, setColor] = useState('серый')

    const productIdArray = allProducts[params.productGroup].filter((item) => item.id === params.productId)
    const product = productIdArray.length > 0 ? productIdArray[0] : null;
    const productTypes = product?.types?.filter(item => item.color === color);

    return (
        <div className="h-svh">
            <div className="flex justify-center items-center text-3xl p-4 ml-24 m-7 bg-slate-200 rounded-xl w-2/5"> {`${productTypes && productTypes.map((item) => item.name)}`} </div>
            <div className="flex justify-left flex-wrap gap-16 mx-24">
                {productTypes && productTypes.map((item) =>
                    <div key={item.name} className="flex flex-row mx-28 p-3 w-full relative">
                        <Image src={item.photo} alt='itemPhoto' className="border-2 border-black rounded-3xl" height={400} width={400} />
                        <div className="flex flex-col justify-between ml-12 gap-7 py-12">
                            <div className="flex gap-3 text-2xl">
                                <div className="font-semibold"> Размер: </div>
                                <div className="flex"> {item.size} </div>
                            </div>

                            {params.productGroup !== 'cement' && <div>
                                <div className="flex items-center gap-5">
                                    <div className="text-2xl font-medium">Цвет:</div>
                                    <div className="text-2xl border-2 rounded-3xl w-fit py-3 px-4 bg-white"> {color} </div>
                                </div>
                                <Colors setColor={setColor} productId={params.productId} productGroup={params.productGroup} />
                            </div>}

                            <div className="flex items-center gap-3 mt-2 text-2xl">
                                <div className="font-medium"> ЦЕНА: </div>
                                <div className="text-blue-700">{item.price} ₽/ШТ.</div>
                            </div>

                        </div>
                        <a href="https://web.whatsapp.com/" target="blank" className="flex justify-center items-center h-fit gap-5 border-2 border-green-500 rounded-3xl mt-3 p-2 bg-zinc-200 absolute bottom-14 right-40">
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