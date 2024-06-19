'use client'

import Image from "next/image"
import bochkeq from '@/app/_images/_photoSlider/bochkeq.jpg'
import poezd from '@/app/_images/_photoSlider/поезд.jpg'
import photo1 from '@/app/_images/_photoSlider/1.jpg'
import photo2 from '@/app/_images/_photoSlider/2.jpg'
import photo3 from '@/app/_images/_photoSlider/3.jpg'
import photo4 from '@/app/_images/_photoSlider/4.jpg'
import photo5 from '@/app/_images/_photoSlider/5.jpg'
import photo6 from '@/app/_images/_photoSlider/6.jpg'
import photo7 from '@/app/_images/_photoSlider/7.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function AboutUs() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: "black" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: "black" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="px-[10%] w-full my-[70px]">

            <Slider {...settings}>
                <Image src={bochkeq} alt="bochkeq" height={800} className="p-5" />
                <Image src={poezd} alt="poezd" height={800} className="p-5" />
                <Image src={photo1} alt="photo1" height={800} className="p-5" />
                <Image src={photo2} alt="photo2" height={800} className="p-5" />
                <Image src={photo3} alt="photo3" height={800} className="p-5" />
                <Image src={photo4} alt="photo4" height={800} className="p-5" />
                <Image src={photo5} alt="photo5" height={800} className="p-5" />
                <Image src={photo6} alt="photo6" height={800} className="p-5" />
                <Image src={photo7} alt="photo7" height={800} className="p-5" />
            </Slider>

            <div className="">
                <div className="py-10 text-4xl"> О компании </div>
                <div className="flex flex-col pb-10 text-xl gap-4">
                    <div>
                        Компания «Стройплит» предлагает купить тротуарную плитку, бордюры, строительные блоки для облицовки дорог и троп, возведения стен, а также облагораживания Вашего участка.
                        Мы гарантируем качество и долговечность наших изделий.
                    </div>
                    <div>
                        Производство было открыто в 2005 году. Первоначально мы выпускали только небольшие партии.
                        Постепенно мы приобретали новое оборудование и создали массовое производство прочных и долговечных продуктов.
                    </div>
                    <div>
                        Каждый клиент для нас – партнер, с уникальными потребностями и видением.
                        Мы ценим индивидуальный подход и готовы предложить персонализированные решения, которые помогут воплотить в жизнь самые смелые идеи и проекты.
                    </div>
                    <div>
                        Полный список услуг и цены продукции доступны на нашем сайте.
                    </div>
                </div>
            </div>
        </div>

    )
}