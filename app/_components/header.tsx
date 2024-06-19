import Link from "next/link"
import Image from "next/image";
import icon from '@/app/_images/_photoSlider/иконка.png'
import Contacts from "./contacts";

export default function Header() {
    return (
        <div>
            <div className="flex flex-row gap-2 w-screen justify-between items-center bg-slate-200 h-32 fixed z-50">
                <Link href={'/'} className="flex ml-12 p-3 gap-2 items-center">
                    <Image src={icon} alt="icon" height={50} />
                    <div className="flex font-bold text-3xl "> СТРОЙПЛИТ </div>
                </Link>
                <div className="flex gap-7 text-2xl">
                    <Link href={'/our-production'}> Продукция </Link>
                    <Link href={'/about-us'}> О компании </Link>
                    <Link href={'/our-contacts'}> Контакты </Link>
                </div>
                <Contacts />
            </div>
            <div className="h-32"></div>
        </div>

    )
}