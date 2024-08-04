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
import './slider.css'


export default function SliderImages() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    useEffect(() => {
        const appElement = document.getElementById('__next');
        if (appElement) {
            console.log('Setting app element to #__next');
            Modal.setAppElement('#__next');
        } else {
            console.warn('No element found with ID #__next, setting app element to body');
            Modal.setAppElement('body');
        }
    }, []);

    const openModal = (image: StaticImageData) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

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

    const images = [
        bochkeq, poezd, photo1, photo2, photo3, photo4, photo5, photo6, photo7
    ];

    return (
        <div>
            <Slider {...settings} className="px-0 md:px-5 mx-3 md:mx-5">
                {images.map((image, index) => {
                    return (
                        <div key={index} onClick={() => openModal(image)} className="">
                            <Image src={image} alt={`photo${index}`} height={800} className="p-5 cursor-pointer" />

                        </div>
                    )
                })}

            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="relative mt-[160px]">
                    <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white text-5xl">×</button>
                    {selectedImage && (
                        <Image src={selectedImage} height={800} alt="Selected" className="max-w-full max-h-full" />
                    )}
                </div>
            </Modal>

        </div>
    )
}