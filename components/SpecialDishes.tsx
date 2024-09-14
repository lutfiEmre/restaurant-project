import React from 'react';
import cicek1 from '../app/image/cicek.svg'
import cicek2 from '../app/image/cicek2.svg'
import Image from "next/image";
import lumpiawithsauce from '../app/image/lumpiawithsauce.svg'
import fishandveggie from '../app/image/fishandveggie.svg'
import tofuchili from '../app/image/tofuchili.svg'
import eggandcocumber from '../app/image/eggandcocumber.svg'
import SpecialDishesAlt1 from "@/components/SpecialDishesAlt1";
import onionsvg from '../app/image/onion.svg'
import onion2svg from '../app/image/onion2.svg'
import onion3svg from '../app/image/onion3.svg'
import leafsvg from '../app/image/leaf.svg'
import WelcomeRestaurant from "@/components/WelcomeRestaurant";

const SpecialDishes = () => {


    return (
        <div
            className={'w-full pb-[100px] lg:pb-[250px] pt-[50px] sm:pt-[102px] justify-start items-center flex-col flex h-full bg-[#101A24] bg-opacity-5'}>
            <div className={'flex flex-col justify-center items-center md:flex-row'}>
                <Image className={'-mr-6 w-[256px] h-[243px]'} width={256} height={243} src={cicek1} alt={''}/>
                <div className={'flex flex-col items-center justify-center'}>
                    <h6 className={'davidlibrebold text-center mt-0 text-[64px] sm:text-[80px]'}>
                        Our Special Dishes
                    </h6>
                    <h6 className={'font-regular text-[20px] text-center w-[350px] sm:w-[430px] text-[#5C6574]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </h6>
                </div>
                <Image className={'-ml-6 w-[206px] h-[294px]'} width={206} height={294} src={cicek2} alt={''}/>

            </div>
            <SpecialDishesAlt1/>
            <div className={'w-full relative flex z-0 justify-center items-center'}>
                <div className={'w-full absolute  left-[-450px]    flex justify-center items-center'}>
                    <Image className={'w-[113px] h-auto'} src={onionsvg} width={113} height={117} alt={''}/>
                </div>
                <div
                    className={' absolute  right-[100px] top-0  flex-row gap-[25px]  flex justify-center items-center'}>
                    <Image className={'w-[113px] h-[117px]'} src={onion2svg} width={113} height={117} alt={''}/>
                    <Image className={'w-[190px] h-[141px]'} src={onion3svg} width={155} height={141} alt={''}/>
                </div>
            </div>
            <div className={'w-full relative flex z-0 justify-center items-center'}>

            </div>
            <WelcomeRestaurant/>
        </div>
    );
};

export default SpecialDishes;
