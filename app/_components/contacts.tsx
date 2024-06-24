import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts({ isMenuOpen, setIsMenuOpen }:
    {
        isMenuOpen: any,  // поменять TS тут
        setIsMenuOpen: any
    }
) {
    return (
        <div className={`hidden md:flex md:flex-row md:gap-16 md:mr-5`}>
            <div className="flex items-center gap-2">
                <div>
                    <div className="flex font-semibold"> г. Сергиев Посад </div>
                    <div className="text-lg"> Производственная зона, 15/1 </div>
                </div>
            </div>

            <div className="flex flex-row md:justify-center items-center gap-4 mr-8">
                <FaPhoneAlt />
                <div className="flex flex-col md:text-lg">
                    <div className="font-medium md:font-semibold"> Связаться с нами </div>
                    <div> +7(496)552-21-80 </div>
                    <div> +7(903)661-06-54 </div>
                    <div> +7(906)774-65-55 </div>
                </div>
            </div>
        </div>
    )
}