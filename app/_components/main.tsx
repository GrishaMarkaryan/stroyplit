'use client'

import Image from "next/image";
import Production from "./production";
import mainBgImage from '@/app/_images/_photoSlider/main.jpg'

import { TbTruckDelivery } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import SliderImages from "./slider";


export default function Main() {
    return (
        <div>
            <div className="relative w-full h-[750px] flex justify-center items-center ">
                <Image
                    src={mainBgImage}
                    alt="mainBgImage"
                    layout="fill"
                    className="w-full object-cover absolute z-0" />
                <div className="text-white px-[10%] text-[60px] bg-gray-600 bg-opacity-50   absolute z-10"> ТРОТУАРНАЯ ПЛИТКА, БОРДЮРЫ И БЛОКИ ОТ ПРОИЗВОДИТЕЛЯ В <span className="text-black font-medium">Г. СЕРГИЕВ ПОСАД</span></div>

            </div>

            <Production />

            <div className="flex justify-center gap-10  text-3xl p-10 mb-10">
                <div className="flex flex-col justify-center items-center">
                    <TbTruckDelivery size={70} />
                    <div className="p-10"> Быстрая доставка </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GrStatusGood size={70} />
                    <div className="p-10"> Качественные материалы </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GiTakeMyMoney size={70} />
                    <div className="p-10"> Выгодные цены </div>
                </div>
            </div>

            <div className="mb-[150px] px-[10%] w-full mt-[70px]">
                <div className="text-4xl font-medium pb-[25px]"> ГАЛЕРЕЯ </div>
                <SliderImages />
            </div>

        </div >
    )
}