"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';


import lumpiawithsauce from '../app/image/lumpiawithsauce.svg'
import fishandveggie from '../app/image/fishandveggie.svg'
import tofuchili from '../app/image/tofuchili.svg'
import eggandcocumber from '../app/image/eggandcocumber.svg'

interface MenuItem {
    name: string;
    image: StaticImageData;
    price: number;
}

const items: MenuItem[] = [
    { name: 'Lumpia with Sauce', image: lumpiawithsauce, price: 12 },
    { name: 'Fish and Veggie', image: fishandveggie, price: 12 },
    { name: 'Tofu Chili', image: tofuchili, price: 12 },
    { name: 'Egg and Cucumber', image: eggandcocumber, price: 12 },
];

const SpecialDishesAlt1: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <div className="flex mt-[90px] px-[50px] w-full  justify-center xl:flex-nowrap flex-wrap flex-row gap-[34px]">
            {items.map((item, index) => (
                <motion.div
                    onClick={() => handleItemClick(index)}
                    key={index}
                    className={`w-full sm:w-[302px] z-10 group cursor-pointer select-none border-white border-[2.29px] relative px-[22.86px] pt-[90px] flex-col flex justify-center items-center h-[353px] ${
                        index === activeIndex ? 'bg-white' : ''
                    } rounded-tr-[10px] rounded-bl-[10px] rounded-br-[50px] rounded-tl-[50px]`}
                    animate={{ backgroundColor: index === activeIndex ? '#FFFFFF' : 'transparent' }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="top-[-100px] justify-center items-center flex absolute"

                    >
                        <motion.div
                            animate={{
                                rotate: index === activeIndex ? 360 : 0
                            }}
                            transition={{
                                duration: 3 ,
                                ease: "easeInOut",
                                repeat: index === activeIndex ? Infinity : 0,
                                repeatType: "loop"
                            }}

                            className={''}>
                            <Image src={item.image} width={236} height={236} alt={item.name} />
                        </motion.div>
                        <motion.div
                            className="w-[61px] inter-bold text-white flex justify-center items-center text-[18px] absolute right-[-7px] h-[61px] rounded-full bg-maintext"
                            initial={{ scale: 1 }}
                            animate={{ scale: index === activeIndex ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.5, repeat: index === activeIndex ? Infinity : 0, repeatType: "reverse" }}
                        >
                            ${item.price}
                        </motion.div>
                    </motion.div>
                    <h4 className="davidlibrebold text-[22px] text-maintext">
                        {item.name}
                    </h4>
                    <h6 className="inter-regular text-center tracking-wider mt-[23px] text-secondarytext text-[17px]">
                        Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor
                    </h6>
                </motion.div>
            ))}
        </div>
    );
};

export default SpecialDishesAlt1;