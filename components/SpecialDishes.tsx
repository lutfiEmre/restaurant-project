import React from 'react';
import cicek1 from '../app/image/cicek.svg'
import cicek2 from '../app/image/cicek2.svg'
import Image from "next/image";
import lumpiawithsauce from '../app/image/lumpiawithsauce.svg'
import fishandveggie from '../app/image/fishandveggie.svg'
import tofuchili from '../app/image/tofuchili.svg'
import eggandcocumber from '../app/image/eggandcocumber.svg'
import SpecialDishesAlt1 from "@/components/SpecialDishesAlt1";



const SpecialDishes = () => {


    return (
        <div className={'w-full pb-[100px] pt-[202px] justify-start items-center flex-col flex h-full bg-[#101A24] bg-opacity-5'}>
            <div className={'flex flex-row'}>
                <Image className={'-mr-6 w-[256px] h-[243px]'} width={256} height={243} src={cicek1} alt={''}/>
                <div className={'flex flex-col items-center justify-center'}>
                    <h6 className={'davidlibrebold mt-0 text-[80px]'}>
                        Our Special Dishes
                    </h6>
                    <h6 className={'font-regular text-[20px] text-center w-[430px] text-[#5C6574]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </h6>
                </div>
                <Image className={'-ml-6 w-[206px] h-[294px]'} width={206} height={294} src={cicek2} alt={''}/>

            </div>
           <SpecialDishesAlt1/>
        </div>
    );
};

export default SpecialDishes;
