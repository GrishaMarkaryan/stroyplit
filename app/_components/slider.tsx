'use client'
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick";
import Modal from 'react-modal';
import { useState, useEffect } from "react";


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

export default function SliderImages() {

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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '20px',
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Image src={bochkeq} alt="bochkeq" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={poezd} alt="poezd" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo1} alt="photo1" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo2} alt="photo2" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo3} alt="photo3" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo4} alt="photo4" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo5} alt="photo5" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo6} alt="photo6" height={800} className="p-5" />
                </div>
                <div>
                    <Image src={photo7} alt="photo7" height={800} className="p-5" />
                </div>
            </Slider>
        </div>

    )

}