import Production from "./production";

export default function Main() {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-500 text-white p-6 text-4xl"> Тротуарная плитка, брусчатка, бордюры, блоки от производителя в <div className="ml-2 text-yellow-400">  г. Сергиев Посад</div></div>
            <Production />
            <div className="flex gap-10 justify-center text-3xl p-10">
                <div> Быстро </div>
                <div> Удобно </div>
                <div> Дешево </div>
            </div>
            <div className="flex justify-center text-3xl m-10"> Производим с 2010 года </div>
        </div>

    )
}