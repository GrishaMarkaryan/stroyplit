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
        <div className="pb-[50px] md:pb-[100px]">
            <div className="flex justify-center items-center text-white text-xl font-medium p-4 m-7 bg-cyan-700 rounded-xl w-fit"> {category} </div>
            <div className="flex justify-left flex-wrap gap-7 md:gap-16 mx-4 md:mx-24">
                {arr.map((item) =>
                    <div key={item.URL} className="flex flex-col rounded-3xl md:w-64 bg-stone-200 md:bg-slate-200 hover:scale-105 duration-200">
                        <Link href={`${item.URL}`} className="flex md:flex-col">
                            <div className="">
                                <Image src={item.photo} alt='itemPhoto' className="md:bg-stone-200 rounded-3xl" />
                            </div>
                            <div className={`${params.productGroup === 'cement' ? 'px-5' : 'px-2 md:p-3'}`}>
                                <div className="flex md:font-medium text-lg md:text-xl my-2"> {item.name} </div>
                                <div className="flex"> {item.size} </div>
                                <div className="flex flex-col md:flex-row md:items-center md:gap-3 mt-2">
                                    <div className="font-medium"> Цена: </div>
                                    <div className="text-blue-700"> {item.price}</div>
                                </div>
                            </div>
                        </Link>
                        <a href="https://wa.me/79036610654" target="blank" className="flex justify-center gap-5 border-2  rounded-3xl md:mt-3 py-2  bg-green-500 text-white">
                            <div className="text-xl font-medium"> Заказать </div>
                            <RiWhatsappFill size={35} color="white" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}