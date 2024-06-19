import { products } from '@/app/_components/main-page-products'
import Image from "next/image"
import Link from "next/link"

export default function Production() {
    return (
        <div className="flex flex-col w-full">

            <div>
                <div className="flex justify-center p-4 mt-4 text-5xl font-medium"> Категории продукции </div>
                <div className="grid grid-cols-2 place-content-center gap-12 mx-36 my-7 ">
                    {products.map((product) => {
                        return (
                            <Link href={`${product.URL}`}>
                                <div key={product.id} className="flex justify-center items-center cursor-pointer min-w-48 min-h-36 h-72 relative hover:scale-105 duration-300">
                                    <div className=" text-white bg-sky-900 p-4 rounded-lg text-3xl z-10"> {product.name} </div>
                                    <Image src={product.bgPhoto} alt={product.name} fill={true} style={{ objectFit: 'cover' }} className=" z-0 rounded-md" />
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}