import Image, { StaticImageData } from "next/image"
import { Product } from "../[productGroup]/all-products"

export default function CategoryWraper({ category, arr }: {
    category: string | undefined;
    arr: Product[]

}) {
    return (
        <div className="h-svh">
            <div className="flex justify-center items-center text-white text-xl font-medium p-4 m-7 bg-slate-700 rounded-xl w-40"> {category} </div>
            <div className="flex justify-left flex-wrap gap-16 mx-24">
                {arr.map((item) =>
                    <div key={item.name} className="flex flex-col p-3 border-4 rounded-xl w-64  font-bold">
                        <Image src={item.photo} alt='itemPhoto' width={200} />
                        <div className="flex"> {item.name} </div>
                        <div className="flex"> {item.size} </div>
                        <div className="flex"> Цена: {item.price} </div>
                    </div>
                )}
            </div>
        </div>
    )
}