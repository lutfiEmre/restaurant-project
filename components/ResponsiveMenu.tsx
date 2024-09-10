"use client"
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from "react";

interface MenuItemProps {
    href: string;
    children: React.ReactNode;
}


const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => (
    <motion.a
        href={href}
        className="text-white hover:text-gray-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.a>
);

const MobileMenuItem: React.FC<MenuItemProps> = ({ href, children }) => (
    <motion.a
        href={href}
        className="text-white block  px-3 py-2 rounded-md"
        whileHover={{ backgroundColor: "#efefef" }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.a>
);

const ResponsiveMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="font-sans">
            <nav className=" py-[27px] px-[32px]">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        className=" uppercase text-[26px] text-[#A80000] font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        EmreLutfi Design
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden text-black text-[18px] 2xl:text-[24px] lg:flex lg:gap-[30px] xl:gap-[52px] space-x-4">
                        <MenuItem  href="#">
                            <h5 className={'text-black font-extrabold'}>
                                products
                            </h5>
                        </MenuItem>
                        <MenuItem  href="#">
                            <h5 className={'text-black font-extrabold '}>
                                About
                            </h5>
                        </MenuItem>
                        <MenuItem  href="#">
                            <h5 className={'text-black font-extrabold '}>
                                Services
                            </h5>
                        </MenuItem>
                        <MenuItem  href="#">
                            <h5 className={'text-black font-extrabold '}>
                                Contact
                            </h5>
                        </MenuItem>
                    </div>
                    <div className={"hidden lg:flex gap-[10px] space-x-4"}>
                        <div className={'2xl:w-[45px] w-[30px] h-auto cursor-pointer bg-[#F1F1F1] rounded-full flex justify-center items-center'}>
                            <svg className={'w-[20px] 2xl:w-[30px]'} width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_15)">
                                    <path
                                        d="M22.6042 20.4167H21.4521L21.0438 20.0229C22.4729 18.3604 23.3333 16.2021 23.3333 13.8542C23.3333 8.61875 19.0896 4.375 13.8542 4.375C8.61875 4.375 4.375 8.61875 4.375 13.8542C4.375 19.0896 8.61875 23.3333 13.8542 23.3333C16.2021 23.3333 18.3604 22.4729 20.0229 21.0438L20.4167 21.4521V22.6042L27.7083 29.8813L29.8813 27.7083L22.6042 20.4167V20.4167ZM13.8542 20.4167C10.2229 20.4167 7.29167 17.4854 7.29167 13.8542C7.29167 10.2229 10.2229 7.29167 13.8542 7.29167C17.4854 7.29167 20.4167 10.2229 20.4167 13.8542C20.4167 17.4854 17.4854 20.4167 13.8542 20.4167Z"
                                        fill="#2C2C2C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_15">
                                        <rect width="35" height="35" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className={'2xl:w-[45px] w-[30px] h-auto cursor-pointer bg-[#F1F1F1] rounded-full flex justify-center items-center'}>
                            <svg className={'w-[20px] 2xl:w-[30px]'} width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_20)">
                                    <path
                                        d="M26.2502 8.74996H23.3335C23.3335 5.52704 20.7231 2.91663 17.5002 2.91663C14.2772 2.91663 11.6668 5.52704 11.6668 8.74996H8.75016C7.146 8.74996 5.8335 10.0625 5.8335 11.6666V29.1666C5.8335 30.7708 7.146 32.0833 8.75016 32.0833H26.2502C27.8543 32.0833 29.1668 30.7708 29.1668 29.1666V11.6666C29.1668 10.0625 27.8543 8.74996 26.2502 8.74996ZM17.5002 5.83329C19.1043 5.83329 20.4168 7.14579 20.4168 8.74996H14.5835C14.5835 7.14579 15.896 5.83329 17.5002 5.83329ZM26.2502 29.1666H8.75016V11.6666H11.6668V14.5833C11.6668 15.3854 12.3231 16.0416 13.1252 16.0416C13.9272 16.0416 14.5835 15.3854 14.5835 14.5833V11.6666H20.4168V14.5833C20.4168 15.3854 21.0731 16.0416 21.8752 16.0416C22.6772 16.0416 23.3335 15.3854 23.3335 14.5833V11.6666H26.2502V29.1666Z"
                                        fill="#2C2C2C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_20">
                                        <rect width="35" height="35" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                        <div className={'2xl:w-[45px] w-[30px] h-auto cursor-pointer bg-[#F1F1F1] rounded-full flex justify-center items-center'}>
                            <svg className={'w-[20px] 2xl:w-[30px]'} width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_26)">
                                    <path
                                        d="M17.5002 8.75004C19.1043 8.75004 20.4168 10.0625 20.4168 11.6667C20.4168 13.2709 19.1043 14.5834 17.5002 14.5834C15.896 14.5834 14.5835 13.2709 14.5835 11.6667C14.5835 10.0625 15.896 8.75004 17.5002 8.75004ZM17.5002 23.3334C21.4377 23.3334 25.9585 25.2146 26.2502 26.25H8.75016C9.08558 25.2 13.5772 23.3334 17.5002 23.3334ZM17.5002 5.83337C14.2772 5.83337 11.6668 8.44379 11.6668 11.6667C11.6668 14.8896 14.2772 17.5 17.5002 17.5C20.7231 17.5 23.3335 14.8896 23.3335 11.6667C23.3335 8.44379 20.7231 5.83337 17.5002 5.83337ZM17.5002 20.4167C13.6064 20.4167 5.8335 22.3709 5.8335 26.25V29.1667H29.1668V26.25C29.1668 22.3709 21.3939 20.4167 17.5002 20.4167Z"
                                        fill="#2C2C2C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_26">
                                        <rect width="35" height="35" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="text-black "
                            whileTap={{scale: 0.9}}
                        >
                            {isOpen ? <X size={24}/> : <Menu size={36}/>}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="lg:hidden"
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                        >
                            <div className="px-2 pt-2 pb-3 text-black space-y-1 sm:px-3">
                                <MobileMenuItem href="#">
                                    <h5 className={'text-black'}>
                                        Home
                                    </h5>
                                </MobileMenuItem>
                                <MobileMenuItem href="#">
                                    <h5 className={'text-black'}>
                                    About
                                    </h5>
                                </MobileMenuItem>
                                <MobileMenuItem href="#">
                                    <h5 className={'text-black'}>
                                        Services
                                    </h5>
                                </MobileMenuItem>
                                <MobileMenuItem href="#">
                                    <h5 className={'text-black'}>
                                       Contact
                                    </h5>
                                </MobileMenuItem>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </div>
    );
};

export default ResponsiveMenu;