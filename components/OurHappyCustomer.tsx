"use client"
import React from 'react';
import tava from '../app/image/tava.svg'
import Image from "next/image";
import HappySlider from "@/components/HappySlider";

const OurHappyCustomer = () => {
    return (
        <div className={'relative pb-[100px] bg-[#F3F4F4] pt-[100px] mt-[150px] w-full h-full'}>
            <div className={'absolute left-0 top-0'}>
                <Image className={'w-[400px] h-auto'} src={tava} width={862} height={1083} alt={''}/>
            </div>
            <div className={'flex flex-col justify-center items-center w-full'}>
                <h6 className={'davidlibrebold text-center text-[68px] text-black'}>
                    Our Happy Customers
                </h6>
                <p className={'w-full max-w-[419px] inter-regular text-secondarytext text-[18px] text-center'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div className={'mt-[70px] px-[50px] '}>
                    <HappySlider/>

                </div>
            </div>

        </div>
    );
};

export default OurHappyCustomer;