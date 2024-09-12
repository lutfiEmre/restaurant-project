    "use client"
    import React from 'react';
    import Image from "next/image";
    import { motion } from "framer-motion";
    import foodt from '../app/image/foodt.svg';
    import leaf1 from '../app/image/leaf2.svg';
    import leaf2 from '../app/image/leaf3.svg';
    import TypeWriterEffect from "@/components/TypeWriterEffect";

    const WelcomeRestaurant: React.FC = () => {
        const fadeIn = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } }
        };

        const slideIn = (direction: "left" | "right") => ({
            hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
        });

        const scaleIn = {
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
        };

        const buttonHover = {
            scale: 1.05,
            transition: { duration: 0.2 }
        };

        const floatAnimation = {
            y: [0, -10, 0],
            x: [0, -10, 0],
            transition: {
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut"
            }
        };

        const floatAnimation2 = {
            y: [0, -10, 0],
            x: [0, -10, 0],
            transition: {
                duration: 2 ,
                repeat: Infinity,
                ease: "easeInOut"
            }
        };

        return (
            <motion.div
                initial="hidden"
                animate="visible"
                className={'   mt-[250px] lg:mt-[250px] 2xl:gap-[80px] flex items-center flex-col lg:flex-row'}
            >
                <motion.div variants={slideIn("left")} className={'relative'}>
                    <motion.div animate={floatAnimation}>
                        <Image className={'absolute z-10 right-[60px] sm:right-[-50px] w-[150px] lg:w-[150px] xl:w-[230px] z-30 h-auto top-[0px] sm:top-[120px]'} src={leaf1} width={221} height={147} alt={''}/>
                        <Image className={'absolute blur-[50px] z-30 right-[60px] sm:right-[-50px] w-[230px] h-auto top-[0px] sm:top-[120px]'} src={leaf1} width={221} height={147} alt={''}/>

                    </motion.div>
                    <motion.div variants={scaleIn}>
                        <Image className={'lg:w-[600px] w-[350px] sm:w-[450px] md:w-[600px] xl:w-[821px] h-auto -z-10'} width={821} height={762} src={foodt} alt={''}/>
                    </motion.div>
                    <motion.div className={''} animate={floatAnimation2}>
                        <Image className={'absolute left-0 z-10  bottom-[50px] sm:bottom-[150px] lg:w-[90px] xl:w-[120px] h-auto'} src={leaf2} width={104} height={216} alt={''}/>
                        <Image className={'absolute blur-[50px] left-0 z-10 bottom-[50px] sm:bottom-[150px] w-[120px] h-auto'} src={leaf2} width={104} height={216} alt={''}/>

                    </motion.div>
                </motion.div>
                <motion.div variants={slideIn("right")} className={'flex flex-col w-full sm:w-[550px]'}>
                    <motion.h4
                        variants={fadeIn}
                        className={'davidlibrebold text-[#101A24] text-center text-[55px] sm:text-[68px]'}
                    >
                        <TypeWriterEffect texta={"Welcome to Our Restaurant"}/>


                    </motion.h4>
                    <motion.h6
                        variants={fadeIn}
                        className={'mt-[34px] inter-regular text-center tracking-[2.4px] leading-7 text-[18px] text-[#5C6574]'}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.h6>
                    <motion.div
                        variants={fadeIn}
                        className={'mt-[50px] gap-[29px] justify-center items-center flex flex-row'}
                    >
                        <motion.div
                            whileHover={buttonHover}
                            className={'w-fit px-[40px] h-[61px] select-none cursor-pointer bg-[#101A24] flex rounded-tr-[5px] rounded-bl-[5px] justify-center items-center rounded-tl-[30px] rounded-br-[30px]'}
                        >
                            <p className={'davidlibremedium text-white text-[22px]'}>
                                Menu
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={buttonHover}
                            className={'w-fit px-[35px] h-[61px] select-none cursor-pointer bg-[#EA6D27] flex rounded-tr-[5px] rounded-bl-[5px] justify-center items-center rounded-tl-[30px] rounded-br-[30px]'}
                        >
                            <p className={'davidlibremedium text-white text-[22px]'}>
                                Book a table
                            </p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        );
    };

    export default WelcomeRestaurant;