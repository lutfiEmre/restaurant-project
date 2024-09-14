"use client"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import subscribesvg from '../app/image/subscribe.svg';

const Subscribe: React.FC = () => {
    return (
        <motion.div
            className="md:min-h-[350px] xl:min-h-[450px] 2xl:min-h-[550px] sm:min-h-[450px] min-h-[50px] w-full flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[203px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="relative w-full w-full max-w-[1600px] -mt-[600px] sm:-mt-[450px] flex justify-center items-center rounded-[50px] overflow-hidden"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Image
                    className="w-full  min-h-[350px] object-cover h-auto rounded-[50px]"
                    width={1315}
                    height={465}
                    src={subscribesvg}
                    alt="Subscribe background"
                />
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.h6
                        className="davidlibrebold text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[57px] text-white mb-4 sm:mb-8"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Get Our Promo Code by<br/>
                        Subscribing To our Newsletter
                    </motion.h6>
                    <motion.div
                        className="w-full max-w-[762px] flex flex-col sm:flex-row py-2 sm:py-[13px] px-2 sm:pr-[18px] rounded-[22px] bg-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <input
                            placeholder="Enter your email"
                            className="outline-none pl-[19px] inter-regular text-lg sm:text-[20px] text-secondarytext w-full h-[60px] sm:h-[65px] bg-transparent"
                            type="text"
                        />
                        <motion.div
                            className="w-full sm:w-[171px] h-[60px] sm:h-[65px] mt-2 sm:mt-0 flex justify-center items-center cursor-pointer select-none bg-[#EA6D27] rounded-[11px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h6 className="inter-bold text-[18px] text-white">
                                Subscribe
                            </h6>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Subscribe;