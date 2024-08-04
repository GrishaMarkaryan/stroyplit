'use client'

import Image from "next/image";
import Production from "./production";
import mainBgImage from '@/app/_images/_photoSlider/main.jpg'

import { TbTruckDelivery } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import SliderImages from "./slider";
import Head from "next/head";




export default function Main() {
    return (
        <div>
            <Head>
                <title> СТРОЙПЛИТ </title>
                <meta name="description" content="Купить тротуарную плитку и брусчатку в Сергиевом Посаде. Стройплит предлагает качественные строительные материалы по выгодным ценам." />
                <meta name="keywords" content="стройплит, стройплит сергиев посад, тротуарная плитка, брусчатка, цемент, бордюр, бордюр дорожный, бордюр тротураный, блоки, блок строительный, блок керамзитный, блок пустотелый, блок полнотелый" />
            </Head>
            <main>
                <div className="relative w-full h-[500px] md:h-[750px] flex justify-center items-center ">
                    <Image
                        src={mainBgImage}
                        alt="mainBgImage"
                        layout="fill"
                        className="w-full object-cover absolute z-0" />
                    <div className="text-white px-[10%] text-[30px] md:text-[45px] lg:text-[50px] bg-gray-600 bg-opacity-50 absolute z-5"> ТРОТУАРНАЯ ПЛИТКА, БОРДЮРЫ И БЛОКИ ОТ ПРОИЗВОДИТЕЛЯ В <span className="text-black font-medium">Г. СЕРГИЕВ ПОСАД</span></div>
                </div>

                <Production />

                <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-10 text-xl md:text-2xl md:p-10 mb-10">
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

                <div className="mb-[80px] md:mb-[150px] px-[10%] w-full mt-[70px] bg-gray-200">
                    <div className="text-2xl md:text-3xl font-medium py-[25px]"> ГАЛЕРЕЯ </div>
                    <SliderImages />
                </div>
            </main>
        </div >
    )
}