import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
    return (
        <div className="flex flex-row gap-2 w-auto justify-between items-center bg-slate-200 h-32">
            <Link href={'/'}> <div className="flex font-bold text-3xl ml-12 p-3"> СТРОЙПЛИТ </div> </Link>
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