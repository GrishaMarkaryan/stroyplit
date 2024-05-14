import { products } from "./main-page-products"
import Image from "next/image"
import Link from "next/link"

export default function Main() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center items-center bg-gray-600 text-white p-6 text-lg font-bold"> Тротуарная плитка, брусчатка, бордюры, блоки от производителя в <div className="ml-2 text-yellow-400">  г. Сергиев Посад</div></div>
            <div>
                <div className="flex justify-center p-4 mt-4 text-3xl font-bold"> Категории продукции </div>
                <div className="grid grid-cols-2 place-content-center gap-12 mx-36 my-7 ">
                    {products.map((product) => {
                        return (
                            <Link href={`${product.URL}`}>
                                <div key={product.id} className="flex justify-center items-center cursor-pointer min-w-48 min-h-36 relative hover:scale-105 duration-300">
                                    <div className=" text-white bg-sky-900 p-2 rounded-lg text-xl font-medium z-10"> {product.name} </div>
                                    <Image src={product.bgPhoto} alt={product.name} fill={true} style={{ objectFit: 'cover' }} className=" z-0 rounded-md" />
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}