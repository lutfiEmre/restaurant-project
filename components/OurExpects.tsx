 "use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import chef from '../app/image/chef 1.svg'
 import TypeWriterEffect from "@/components/TypeWriterEffect";

const OurExpects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="flex justify-between items-center flex-col-reverse lg:flex-row lg:items-start w-full px-[10%] pt-[50px] lg:pt-[150px] bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-[50px] w-fit">
        <motion.div className="flex flex-col mt-[50px] lg:mt-[150px] gap-[20px]" variants={itemVariants}>

          <TypeWriterEffect texta={"Our Expects Chef"}/>


          <motion.h5 className="inter-regular text-center max-w-[450px] text-[18px] text-[#5C6574]" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </motion.h5>
        </motion.div>
        <motion.div className="gap-[29px] justify-center items-center flex flex-row" variants={itemVariants}>
          <motion.div
            className="w-fit px-[40px] h-[61px] select-none cursor-pointer bg-[#101A24] flex rounded-tr-[5px] rounded-bl-[5px] justify-center items-center rounded-tl-[30px] rounded-br-[30px]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="davidlibremedium text-white text-[22px]">Menu</p>
          </motion.div>
          <motion.div
            className="w-fit px-[35px] h-[61px] select-none cursor-pointer bg-[#EA6D27] flex rounded-tr-[5px] rounded-bl-[5px] justify-center items-center rounded-tl-[30px] rounded-br-[30px]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="davidlibremedium text-white text-[22px]">Book a table</p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Image className="w-[350px] lg:w-[579px] h-auto" width={579} height={794} src={chef} alt="Chef" />
      </motion.div>
    </motion.div>
  );
};

export default OurExpects;