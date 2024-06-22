import { products } from '@/app/_components/main-page-products'
import Image from "next/image"
import Link from "next/link"

export default function Production() {
    return (
        <div className="flex flex-col w-full mb-20">
            <div>
                <div className="flex justify-center p-4 mt-4 text-5xl font-medium"> Категории продукции </div>
                <div className="grid grid-cols-2  gap-12 mx-48 my-7 ">
                    {products.map((product) => {
                        return (
                            <Link href={`${product.URL}`}>
                                <div key={product.id} className="flex cursor-pointer h-[300px] gap-10 relative hover:scale-105 duration-300 rounded-[50px] bg-stone-200">
                                    <div className="px-[60px] pt-[60px] rounded-lg text-4xl w-[50px] z-10"> {product.name} </div>
                                    <Image src={product.bgPhoto} alt={product.name} style={{ objectFit: 'contain' }} className=" z-0 rounded-md" />
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}