import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-row gap-2 w-auto justify-between items-center bg-slate-200">
            <Link href={'/'}> <div className="flex font-bold text-lg p-3"> СТРОЙПЛИТ </div> </Link>
            <div className="flex font-semibold">
                г. Сергиев Посад, Производственная зона, 15/1
            </div>
            <div className="flex font-semibold mr-5"> +7(903)661-06-54 </div>
        </div>
    )
}