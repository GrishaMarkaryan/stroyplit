import Link from "next/link"
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import icon from '@/app/_images/_photoSlider/иконка.png'

export default function Header() {
    return (
        <div className="flex flex-row gap-2 w-auto justify-between items-center bg-slate-200 h-32">
            <Link href={'/'} className="flex ml-12 p-3 gap-2 items-center">
                <Image src={icon} alt="icon" height={50} />
                <div className="flex font-bold text-3xl "> СТРОЙПЛИТ </div>
            </Link>
            <div className="flex text-xl">
                г. Сергиев Посад, Производственная зона, 15/1
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mr-8">
                <FaPhoneAlt size={22} />
                <div className="flex flex-col text-xl">
                    <div className="font-semibold"> Связаться с нами </div>
                    <div className="text-green-600"> +7(903)661-06-54 </div>
                </div>
            </div>
        </div>
    )
}