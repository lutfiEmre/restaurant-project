"use client"
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image, { StaticImageData } from "next/image";

// Örnek fotoğraflar için import
import zenci from '../app/image/zenci.svg';
import emrelutfisvg from '../app/image/emrelutfi.png'

interface SlideData {
    id: number;
    image: StaticImageData;
    comment: string;
    name: string;
    title: string;
    rating: number;
}

const slideData: SlideData[] = [
    {
        id: 1,
        image: emrelutfisvg,
        comment: "Lorem buse ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        name: "EmreLutfi",
        title: "Front-End Developer",
        rating: 5
    },
    {
        id: 2,
        image: zenci,
        comment: "Dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        name: "John Doe",
        title: "Marketing Director",
        rating: 4
    },
    {
        id: 3,
        image: zenci,
        comment: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        name: "Jane Smith",
        title: "Product Manager",
        rating: 5
    },
    {
        id: 4,
        image: zenci,
        comment: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        name: "Jane Smith",
        title: "Product Manager",
        rating: 5
    },
    {
        id: 5,
        image: zenci,
        comment: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        name: "Jane Smith",
        title: "Product Manager",
        rating: 5
    }
];

const HappySlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
    };

    const handleDotClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className={'w-full max-w-full min-w-[350px]'}>
            <Swiper
                onSwiper={(swiper) => {swiperRef.current = swiper}}
                spaceBetween={50}
                className={'xxsm:w-[350px] xsm:w-[400px] sm:w-[500px] h-full md:w-[600px] xl:w-[1000px] min-w-[350px] lg:w-[800px] flex justify-center items-center'}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                modules={[Navigation, Pagination]}
            >
                {slideData.map((slide) => (
                    <SwiperSlide key={slide.id} className={'flex  justify-center cursor-pointer p-8 pt-12 items-center gap-[8px]'}>
                        <div className={'w-full h-full min-h-[300px] flex flex-col justify-start items-center rounded rounded-br-[150px] rounded-bl-[50px] rounded-tr-[50px] bg-white rounded-tl-[150px]'}>
                            <Image className={'rounded-full -mt-[40px]'} src={slide.image} width={124} height={124} alt={slide.name}/>
                            <div className={'flex flex-row mt-[15px] gap-[10px]'}>
                                {Array(slide.rating).fill(null).map((_, starIndex) => (
                                    <svg key={starIndex} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.25 1.64286C9.67857 0.785715 10.8929 0.82143 11.2857 1.64286L13.6429 6.39286L18.8571 7.14286C19.7857 7.28571 20.1429 8.42857 19.4643 9.10714L15.7143 12.7857L16.6071 17.9643C16.75 18.8929 15.75 19.6071 14.9286 19.1786L10.2857 16.7143L5.60714 19.1786C4.78571 19.6071 3.78571 18.8929 3.92857 17.9643L4.82143 12.7857L1.07143 9.10714C0.392857 8.42857 0.75 7.28571 1.67857 7.14286L6.92857 6.39286L9.25 1.64286Z" fill="#FFBB00"/>
                                    </svg>
                                ))}
                            </div>
                            <div className={'mt-[34px] w-full flex justify-between px-12 lg:px-0 items-center h-full flex-col'}>
                                <h6 className={'inter-regular text-[18px] text-secondarytext lg:w-[440px]'}>
                                    {slide.comment}
                                </h6>
                                <div className={'flex flex-col pb-[48px]'}>
                                    <h6 className={'mt-[18px] inter-bold text-[18px] text-[#101A24]'}>
                                        {slide.name}
                                    </h6>
                                    <h5 className={'text-[17px] text-[#5C6574] inter-regular'}>
                                        {slide.title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center mt-4 space-x-2">
                {slideData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === activeIndex ? 'bg-black' : 'bg-gray-300'
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HappySlider;