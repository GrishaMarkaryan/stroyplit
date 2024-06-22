import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts() {
    return (
        <div className="flex gap-16 mr-5">
            <div className="flex items-center gap-2">
                <div>
                    <div className="flex font-semibold"> г. Сергиев Посад </div>
                    <div className="text-lg"> Производственная зона, 15/1 </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mr-8">
                <FaPhoneAlt size={22} />
                <div className="flex flex-col text-lg">
                    <div className="font-semibold"> Связаться с нами </div>
                    <div className="text-green-600"> +7(496)552-21-80 </div>
                    <div className="text-green-600"> +7(903)661-06-54 </div>
                    <div className="text-green-600"> +7(906)774-65-55 </div>
                </div>
            </div>
        </div>
    )
}