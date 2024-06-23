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
    /*
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null);
    
        const element = document.getElementById('__next');
        if (element) {
            Modal.setAppElement(element);
        }
    
        const openModal = (imageSrc) => {
            setSelectedImage(imageSrc);
            setModalIsOpen(true);
        };
    
        const closeModal = () => {
            setModalIsOpen(false);
        };
    */
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

    };

    return (
        <div>
            <Slider {...settings} >
                <div onClick={() => openModal(bochkeq)}>
                    <Image src={bochkeq} alt="bochkeq" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(poezd)}>
                    <Image src={poezd} alt="poezd" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo1)}>
                    <Image src={photo1} alt="photo1" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo2)}>
                    <Image src={photo2} alt="photo2" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo3)}>
                    <Image src={photo3} alt="photo3" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo4)}>
                    <Image src={photo4} alt="photo4" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo5)}>
                    <Image src={photo5} alt="photo5" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo6)}>
                    <Image src={photo6} alt="photo6" height={800} className="p-5" />
                </div>
                <div onClick={() => openModal(photo7)}>
                    <Image src={photo7} alt="photo7" height={800} className="p-5" />
                </div>
            </Slider>

            {/* Modal for the clicked image 
          
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                {selectedImage && (
                    <Image src={selectedImage} alt="Selected" layout="fill" />
                )}
            </Modal> 
            */}
        </div>

    )

}