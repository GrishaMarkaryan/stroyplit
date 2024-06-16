import { products } from "./main-page-products"
import Image from "next/image"
import Link from "next/link"
import bochkeq from '@/app/_images/_photoSlider/bochkeq.jpg'
import poezd from '@/app/_images/_photoSlider/поезд.jpg'
import photo1 from '@/app/_images/_photoSlider/1.jpg'
import photo2 from '@/app/_images/_photoSlider/2.jpg'
import photo3 from '@/app/_images/_photoSlider/3.jpg'
import photo4 from '@/app/_images/_photoSlider/4.jpg'
import photo5 from '@/app/_images/_photoSlider/5.jpg'
import photo6 from '@/app/_images/_photoSlider/6.jpg'
import photo7 from '@/app/_images/_photoSlider/7.jpg'


export default function Main() {
    return (
        <div className="flex flex-col w-full ">
            <div className="flex">
                <Image src={bochkeq} alt="bochkeq" height={500} />
                <Image src={poezd} alt="poezd" height={500} />
                <Image src={photo1} alt="photo" height={500} />
                <Image src={photo2} alt="photo" height={500} />
                <Image src={photo3} alt="photo" height={500} />
                <Image src={photo4} alt="photo" height={500} />
                <Image src={photo5} alt="photo" height={500} />
                <Image src={photo6} alt="photo" height={500} />
                <Image src={photo7} alt="photo" height={500} />
            </div>
            <div className="flex justify-center items-center bg-gray-500 text-white p-6 text-4xl"> Тротуарная плитка, брусчатка, бордюры, блоки от производителя в <div className="ml-2 text-yellow-400">  г. Сергиев Посад</div></div>
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