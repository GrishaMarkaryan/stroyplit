import Image from "next/image"
import { Product } from "../[productGroup]/all-products"
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";



export default function CategoryWraper({ category, arr, params }: {
    category: string | undefined;
    arr: Product[];
    params: {
        productGroup: string;
        productId: string
    }

}) {
    return (
        <div className="h-svh">
            <div className="flex justify-center items-center text-white text-xl font-medium p-4 m-7 bg-slate-700 rounded-xl w-40"> {category} </div>
            <div className="flex justify-left flex-wrap gap-16 mx-24">
                {arr.map((item) =>
                    <div key={item.URL} className="flex flex-col p-3 border-4 rounded-xl w-72 bg-gray-300">
                        <Link href={`${item.URL}`}>
                            <Image src={item.photo} alt='itemPhoto' className="rounded-xl h-48" />
                            <div className="flex font-medium text-xl my-2"> {item.name} </div>
                            <div className="flex"> {item.size} </div>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="font-medium"> Цена: </div>
                                <div className="text-blue-700">{item.price} ₽/ШТ.</div>
                            </div>
                        </Link>
                        <a href="https://web.whatsapp.com/" target="blank" className="flex justify-center gap-5 border-2 border-green-500 rounded-3xl mt-3 py-2 bg-zinc-200">
                            <div className="text-xl font-medium"> Заказать </div>
                            <RiWhatsappFill size={35} color="green" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}