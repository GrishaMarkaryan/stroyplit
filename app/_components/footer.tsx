import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex flex-col w-full  items-center bg-slate-200 text-xl h-44 py-6">
            <div className="flex flex-row gap-28  items-center">
                <div className="flex items-center gap-2">
                    <MdLocationOn size={33} />
                    <div>
                        <div className="flex font-semibold"> г. Сергиев Посад </div>
                        <div className="text-lg"> Производственная зона, 15/1 </div>
                    </div>

                </div>

                <div className="flex flex-row justify-center items-center gap-4">
                    <FaPhoneAlt size={26} />
                    <div className="flex flex-col ">
                        <div className="font-semibold "> Контактный телефон </div>
                        <div className="font-semibold  text-green-600"> +7(903)661-06-54 </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-2xl p-3 mt-4"> ООО "СТРОЙПЛИТ" </div>

        </div>
    )
}