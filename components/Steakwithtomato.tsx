"use client"
import React, {useRef, useState} from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import cizgi from '../app/image/cizgi.svg';
import yemekresmi from '../app/image/yemekresmi1.svg';
import fishsalad from '../app/image/fishsalad.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CouponModal from "@/components/CouponModal";

const Steakwithtomato = () => {
    const discountSwiper = useRef<any>(null);


    const handleNextSlide = () => {
        if (discountSwiper.current && discountSwiper.current.swiper) {
            discountSwiper.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (discountSwiper.current && discountSwiper.current.swiper) {
            discountSwiper.current.swiper.slidePrev();
            console.log('Next slide');
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const slideIn = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 }
    };

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const couponCode = "INDIRIM50";
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className={'mt-[73px] px-[75px] pb-[50px] relative flex flex-col items-center lg:flex-row lg:gap-[30px]'}
        >
            <div>

                <CouponModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    couponCode={couponCode}
                />
            </div>
            <motion.div variants={slideIn} className={'flex flex-col w-full lg:items-start items-center'}>
                <motion.h6 variants={fadeIn}
                           className={'font-semibold uppercase text-[22px] sm:text-[25px] w-fit lg:w-full text-center lg:text-center xl:text-start 2xl:text-[30px] text-[24px] text-black'}>
                    Design by emrelutfi.com
                </motion.h6>
                <motion.h5
                    variants={fadeIn}
                    className={'portligat w-fit text-center leading-[130px] text-[120px] xl:leading-[90px] 2xl:leading-[120px] lg:leading-[100px] lg:text-center xl:text-start text-[#A80000] xl:text-[100px] lg:text-[100px] 2xl:text-[120px]'}
                >
                    steak with tomato
                </motion.h5>
                <motion.h6
                    variants={fadeIn}
                    className={'font-medium lg:text-center text-[20px] text-center xl:text-start w-full mt-[30px] max-w-[100%] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black'}
                >
                    Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is
                    made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a
                </motion.h6>
                <motion.div variants={fadeIn} className={'w-full items-center flex-col justify-center flex'}>
                    <motion.div
                        initial={{scaleX: 0}}
                        animate={{scaleX: 1}}
                        transition={{duration: 0.8}}
                        className={'mt-[76px] mb-[51px] w-full sm:w-[597px] bg-[#D9D9D9] h-[2px]'}
                    ></motion.div>
                    <div className={'flex flex-col sm:flex-row gap-[20px]'}>
                        <motion.div
                            whileHover={buttonHover}
                            className={'relative bx2 w-[250px] group cursor-pointer text-[18px] 2xl:w-[334px] 2xl:text-[22px] 2xl:h-[156px]'}
                        >
                            <div
                                className={'absolute w-full cursor-pointer h-full group-hover:text-black     text-white font-extrabold  flex justify-center items-center left-0'}>
                                Add To Cart
                            </div>
                            <svg className={'w-full h-full cursor-pointer group-hover:fill-white fill-[#A80000]'}
                                 width="234" height="56" viewBox="0 0 234 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M225.481 0H8C3.58172 0 0 3.58172 0 8V48C0 52.4183 3.58172 56 7.99999 56H200.203C202.947 56 205.5 54.5935 206.966 52.2737L232.244 12.2737C235.61 6.94683 231.782 0 225.481 0Z"
                                    fill=""/>
                            </svg>

                        </motion.div>
                        <motion.div
                            whileHover={buttonHover}
                            className={'relative bx2 group w-[250px] text-[18px] 2xl:w-[334px] 2xl:text-[22px] 2xl:h-[156px]'}
                        >
                            <div
                                className={'absolute w-full group-hover:text-black cursor-pointer h-full text-white font-extrabold  flex justify-center items-center left-0'}>
                                Book a Table
                            </div>
                            <svg className={'w-full group-hover:fill-white fill-[#545454] h-full'} width="234"
                                 height="56" viewBox="0 0 234 56" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.51906 56L226 56C230.418 56 234 52.4183 234 48L234 8C234 3.58172 230.418 -3.13124e-07 226 -6.99382e-07L33.7967 -1.75023e-05C31.0526 -1.77422e-05 28.4999 1.40651 27.0339 3.72629L1.75626 43.7263C-1.61002 49.0531 2.21768 56 8.51906 56Z"
                                    fill=""/>
                            </svg>

                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className={'lg:static absolute overflow-hidden top-[60px] sm:top-[-60px] rounded-full w-[70%] -z-10 opacity-30 lg:opacity-100'}

            >
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        rotate: {repeat: Infinity, duration: 8, ease: "linear"},
                        scale: {repeat: Infinity, duration: 5, ease: "easeInOut"}
                    }}
                >
                    <Image
                        className={'bx1 top-0 left-0 lg:opacity-100 mr-[40px] select-none w-full rotate-360 rounded-full h-auto mt-[20px] lg:mt-0 lg:h-full 2xl:w-[1200px] lg:w-[600px] xl:w-[600px]'}
                        src={yemekresmi}
                        width={721}
                        height={721}
                        alt={''}
                    />
                </motion.div>

            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className={'sm:w-[552px] w-full bottom-[120px] right-[82px] mb-[-150px] sm:mb-0 mt-[150px] sm:absolute h-fit flex justify-center items-center'}
            >
                <motion.div
                    whileHover={{scale: 1.02}}
                    transition={{type: "spring", stiffness: 300}}
                    className={'absolute w-[457px] bx3 bg-white h-[153px] rounded-[20px]'}
                >
                    <div className={'w-full flex pl-[15px] pt-[12px] pr-[24px] pb-[8px] justify-between items-center'}>
                        <h6 className={'font-bold text-[18px] uppercase text-[#000000] text-[18px]'}>
                            discount coupen
                        </h6>
                        <div className={'flex flex-row gap-[25px]'}>
                            <div onClick={() => {
                                handlePrevSlide()
                            }} className={'flex cursor-pointer select-none flex-row gap-[8px]'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_61)">
                                        <path
                                            d="M16.6668 9.16659H6.52516L11.1835 4.50825L10.0002 3.33325L3.3335 9.99992L10.0002 16.6666L11.1752 15.4916L6.52516 10.8333H16.6668V9.16659Z"
                                            fill="#2C2C2C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_61">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h6 className={'font-bold uppercase text-[14px] text-black'}>
                                    prev
                                </h6>
                            </div>
                            <div onClick={() => {
                                handleNextSlide()
                            }} className={'flex flex-row cursor-pointer select-none gap-[8px]'}>
                                <h6 className={'font-bold uppercase text-[14px] text-black'}>
                                    NEXT
                                </h6>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.33317 10.8334L13.4748 10.8334L8.8165 15.4917L9.99984 16.6667L16.6665 10.0001L9.99984 3.33341L8.82484 4.50841L13.4748 9.16675L3.33317 9.16675L3.33317 10.8334Z"
                                        fill="#2C2C2C"/>
                                </svg>


                            </div>
                        </div>
                    </div>
                    <div className={'w-full mb-[4px]     h-[1px] bg-[#D9D9D9]'}></div>
                    <Swiper
                        ref={discountSwiper}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div
                                className={'w-full items-center  justify-between flex h-[110px] flex-row gap-[8px] pb-[15px] pt-0 pr-[10px] pl-[13px] '}>
                                <div className={'flex flex-row items-center gap-[8px]'}>
                                    <Image className={'w-[100px] h-[100px]'} src={fishsalad} width={100} height={100}
                                           alt={''}/>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h6 className={'font-extrabold uppercase text-[18px]'}>
                                            Fish salad
                                        </h6>
                                        <h6 className={'font-bold uppercase text-[14px]'}>
                                            medium
                                        </h6>
                                    </div>

                                </div>
                                <div className={'flex flex-row items-center gap-[19px]'}>
                                    <div className={'flex flex-col items-center justify-center gap-[7px]'}>
                                        <p className={'font-bold w-fit text-center line-through text-[14px]'}>
                                            $14.99
                                        </p>
                                        <p className={'font-bold text-center w-fit text-[14px]'}>
                                            $7.90
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => {setIsModalOpen(!isModalOpen)}}
                                        className={'py-[6px] h-fit flex cursor-pointer justify-center items-center px-[18px] rounded-[25px] bg-[#FFF500]'}>
                                        <p className={'font-bold uppercase  text-[12px]'}>
                                            Get coupen
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={'w-full items-center  justify-between flex h-[110px] flex-row gap-[8px] pb-[15px] pt-0 pr-[10px] pl-[13px] '}>
                                <div className={'flex flex-row items-center gap-[8px]'}>
                                    <Image className={'w-[100px] h-[100px]'} src={fishsalad} width={100} height={100}
                                           alt={''}/>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h6 className={'font-extrabold uppercase text-[18px]'}>
                                            Fish salad
                                        </h6>
                                        <h6 className={'font-bold uppercase text-[14px]'}>
                                            medium
                                        </h6>
                                    </div>

                                </div>
                                <div className={'flex flex-row items-center gap-[19px]'}>
                                    <div className={'flex flex-col items-center justify-center gap-[7px]'}>
                                        <p className={'font-bold w-fit text-center line-through text-[14px]'}>
                                            $14.99
                                        </p>
                                        <p className={'font-bold text-center w-fit text-[14px]'}>
                                            $7.90
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => {setIsModalOpen(!isModalOpen)}}
                                        className={'py-[6px] h-fit flex cursor-pointer justify-center items-center px-[18px] rounded-[25px] bg-[#FFF500]'}>
                                        <p className={'font-bold uppercase  text-[12px]'}>
                                            Get coupen
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={'w-full items-center  justify-between flex h-[110px] flex-row gap-[8px] pb-[15px] pt-0 pr-[10px] pl-[13px] '}>
                                <div className={'flex flex-row items-center gap-[8px]'}>
                                    <Image className={'w-[100px] h-[100px]'} src={fishsalad} width={100} height={100}
                                           alt={''}/>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h6 className={'font-extrabold uppercase text-[18px]'}>
                                            Fish salad
                                        </h6>
                                        <h6 className={'font-bold uppercase text-[14px]'}>
                                            medium
                                        </h6>
                                    </div>

                                </div>
                                <div className={'flex flex-row items-center gap-[19px]'}>
                                    <div className={'flex flex-col items-center justify-center gap-[7px]'}>
                                        <p className={'font-bold w-fit text-center line-through text-[14px]'}>
                                            $14.99
                                        </p>
                                        <p className={'font-bold text-center w-fit text-[14px]'}>
                                            $7.90
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => {setIsModalOpen(!isModalOpen)}}
                                        className={'py-[6px] h-fit flex cursor-pointer justify-center items-center px-[18px] rounded-[25px] bg-[#FFF500]'}>
                                        <p className={'font-bold uppercase  text-[12px]'}>
                                            Get coupen
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={'w-full items-center  justify-between flex h-[110px] flex-row gap-[8px] pb-[15px] pt-0 pr-[10px] pl-[13px] '}>
                                <div className={'flex flex-row items-center gap-[8px]'}>
                                    <Image className={'w-[100px] h-[100px]'} src={fishsalad} width={100} height={100}
                                           alt={''}/>
                                    <div className={'flex flex-col gap-[5px]'}>
                                        <h6 className={'font-extrabold uppercase text-[18px]'}>
                                            Fish salad
                                        </h6>
                                        <h6 className={'font-bold uppercase text-[14px]'}>
                                            medium
                                        </h6>
                                    </div>

                                </div>
                                <div className={'flex flex-row items-center gap-[19px]'}>
                                    <div className={'flex flex-col items-center justify-center gap-[7px]'}>
                                        <p className={'font-bold w-fit text-center line-through text-[14px]'}>
                                            $14.99
                                        </p>
                                        <p className={'font-bold text-center w-fit text-[14px]'}>
                                            $7.90
                                        </p>
                                    </div>
                                    <div
                                        onClick={() => {setIsModalOpen(!isModalOpen)}}
                                        className={'py-[6px] h-fit flex cursor-pointer justify-center items-center px-[18px] rounded-[25px] bg-[#FFF500]'}>
                                        <p className={'font-bold uppercase  text-[12px]'}>
                                            Get coupen
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
            >
                <Image className={'absolute w-[1375px] h-[1375px] -z-10 left-[-850px] top-[-750px]'} src={cizgi}
                       width={1375} height={1375}
                       alt={''}/>
            </motion.div>
        </motion.div>
    );
};

export default Steakwithtomato;