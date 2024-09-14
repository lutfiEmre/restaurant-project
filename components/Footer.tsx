"use client"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import tavasvg from '../app/image/tava2.svg';

const Footer: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="w-full relative pt-10 min-h-[700px] h-full overflow-hidden px-4 sm:px-8 lg:px-[200px]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <motion.div className="flex flex-col gap-[24px] mb-8 lg:mb-0" variants={itemVariants}>
                    <svg width="227" height="63" viewBox="0 0 227 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_8808)">
                            <path
                                d="M69.2708 53.7142V36.883H73.7964V39.8197H73.9717C74.2785 38.7752 74.7935 37.9861 75.5167 37.4529C76.24 36.9123 77.0728 36.642 78.0151 36.642C78.2489 36.642 78.5009 36.6566 78.7712 36.6858C79.0415 36.715 79.279 36.7553 79.4834 36.8064V40.9484C79.2644 40.8827 78.9612 40.8242 78.574 40.7731C78.1868 40.7219 77.8325 40.6964 77.5111 40.6964C76.8244 40.6964 76.2108 40.8461 75.6702 41.1457C75.1369 41.4379 74.7132 41.8469 74.3991 42.3729C74.0922 42.8989 73.9389 43.5052 73.9389 44.192V53.7142H69.2708ZM88.7839 54.0429C87.0526 54.0429 85.5623 53.6923 84.3132 52.991C83.0712 52.2825 82.1143 51.2816 81.4422 49.9886C80.7701 48.6883 80.4341 47.1505 80.4341 45.3754C80.4341 43.6441 80.7701 42.1245 81.4422 40.8169C82.1143 39.5093 83.0602 38.4902 84.2802 37.7597C85.5076 37.0292 86.9466 36.664 88.5976 36.664C89.708 36.664 90.7417 36.8429 91.6986 37.2009C92.663 37.5515 93.5031 38.0811 94.219 38.7898C94.9422 39.4984 95.5047 40.3896 95.9064 41.4634C96.3082 42.53 96.5092 43.7792 96.5092 45.211V46.4931H82.2969V43.6002H92.1151C92.1151 42.9281 91.9689 42.3328 91.6768 41.8141C91.3846 41.2954 90.9791 40.89 90.4605 40.5978C89.949 40.2982 89.3537 40.1485 88.6743 40.1485C87.9657 40.1485 87.3375 40.3129 86.7896 40.6416C86.249 40.963 85.8253 41.3977 85.5185 41.9456C85.2117 42.4861 85.0546 43.0889 85.0473 43.7536V46.5041C85.0473 47.3368 85.2007 48.0564 85.5076 48.6627C85.8216 49.269 86.2636 49.7365 86.8334 50.0653C87.4032 50.394 88.079 50.5584 88.8606 50.5584C89.3793 50.5584 89.8541 50.4853 90.2852 50.3393C90.7161 50.1931 91.085 49.974 91.3919 49.6818C91.6986 49.3896 91.9325 49.0316 92.0932 48.608L96.4105 48.8928C96.1913 49.9301 95.7421 50.836 95.0628 51.6104C94.3906 52.3774 93.5213 52.9764 92.4548 53.4074C91.3956 53.8312 90.1719 54.0429 88.7839 54.0429ZM113.559 41.6826L109.286 41.9456C109.213 41.5803 109.056 41.2516 108.815 40.9594C108.574 40.6598 108.256 40.4225 107.861 40.2472C107.474 40.0645 107.01 39.9732 106.47 39.9732C105.747 39.9732 105.137 40.1266 104.64 40.4334C104.143 40.7329 103.895 41.1347 103.895 41.6387C103.895 42.0405 104.055 42.3802 104.377 42.6578C104.698 42.9354 105.25 43.1582 106.031 43.3262L109.078 43.9398C110.714 44.276 111.934 44.8165 112.738 45.5617C113.541 46.3068 113.943 47.2857 113.943 48.4984C113.943 49.6014 113.618 50.5693 112.968 51.4021C112.325 52.2349 111.441 52.8851 110.316 53.3526C109.198 53.8129 107.909 54.0429 106.448 54.0429C104.22 54.0429 102.445 53.579 101.122 52.6514C99.8074 51.7163 99.0367 50.4452 98.8103 48.838L103.402 48.597C103.54 49.2763 103.876 49.795 104.41 50.153C104.943 50.5036 105.626 50.6789 106.459 50.6789C107.277 50.6789 107.934 50.5219 108.431 50.2077C108.935 49.8864 109.191 49.4736 109.198 48.9696C109.191 48.5458 109.012 48.1988 108.661 47.9285C108.311 47.6509 107.77 47.439 107.04 47.293L104.125 46.7122C102.481 46.3835 101.257 45.8137 100.454 45.0028C99.6577 44.192 99.2596 43.1582 99.2596 41.9018C99.2596 40.8205 99.5518 39.8892 100.136 39.1075C100.728 38.3259 101.557 37.7232 102.624 37.2995C103.697 36.8757 104.954 36.664 106.393 36.664C108.519 36.664 110.192 37.1132 111.412 38.0117C112.639 38.9102 113.355 40.1339 113.559 41.6826ZM125.835 36.883V40.3896H115.699V36.883H125.835ZM118 32.8506H122.668V48.5421C122.668 48.9732 122.734 49.3092 122.865 49.5502C122.996 49.7841 123.179 49.9484 123.413 50.0434C123.655 50.1384 123.932 50.1858 124.245 50.1858C124.465 50.1858 124.684 50.1676 124.904 50.131C125.123 50.0872 125.291 50.0544 125.408 50.0324L126.141 53.506C125.908 53.579 125.579 53.6632 125.155 53.7581C124.732 53.8603 124.217 53.9225 123.61 53.9443C122.485 53.9882 121.499 53.8385 120.652 53.495C119.812 53.1517 119.157 52.6185 118.69 51.8953C118.223 51.1721 117.993 50.2589 118 49.1558V32.8506ZM133.675 54.0321C132.601 54.0321 131.644 53.8458 130.804 53.4732C129.964 53.0933 129.299 52.5345 128.81 51.7966C128.328 51.0515 128.087 50.1237 128.087 49.0133C128.087 48.0782 128.258 47.293 128.602 46.6574C128.945 46.0219 129.412 45.5105 130.004 45.1234C130.596 44.7362 131.268 44.444 132.02 44.2467C132.78 44.0494 133.577 43.9107 134.409 43.8304C135.388 43.7281 136.177 43.6331 136.776 43.5454C137.376 43.4505 137.81 43.3116 138.08 43.129C138.351 42.9464 138.486 42.6761 138.486 42.3181V42.2524C138.486 41.5584 138.266 41.0214 137.828 40.6416C137.397 40.2617 136.784 40.0718 135.987 40.0718C135.147 40.0718 134.479 40.2581 133.981 40.6306C133.486 40.9958 133.156 41.4561 132.996 42.0113L128.679 41.6606C128.898 40.6379 129.329 39.754 129.971 39.0089C130.615 38.2564 131.443 37.6794 132.459 37.2776C133.482 36.8684 134.665 36.664 136.009 36.664C136.944 36.664 137.839 36.7734 138.694 36.9926C139.556 37.2118 140.32 37.5515 140.984 38.0117C141.656 38.472 142.186 39.0637 142.574 39.7869C142.96 40.5028 143.154 41.3612 143.154 42.362V53.7142H138.727V51.3802H138.595C138.326 51.9062 137.963 52.3701 137.511 52.7718C137.058 53.1664 136.513 53.4769 135.877 53.7033C135.242 53.9225 134.508 54.0321 133.675 54.0321ZM135.012 50.8105C135.699 50.8105 136.305 50.6753 136.831 50.405C137.357 50.1274 137.77 49.7548 138.069 49.2873C138.369 48.8197 138.519 48.2901 138.519 47.6985V45.9123C138.372 46.0073 138.171 46.0949 137.916 46.1753C137.667 46.2483 137.386 46.3178 137.072 46.3835C136.757 46.4419 136.444 46.4968 136.13 46.5478C135.816 46.5917 135.531 46.6318 135.275 46.6684C134.727 46.7488 134.249 46.8765 133.84 47.052C133.431 47.2273 133.113 47.4646 132.887 47.7642C132.66 48.0564 132.546 48.4217 132.546 48.86C132.546 49.4955 132.777 49.9813 133.236 50.3173C133.705 50.646 134.296 50.8105 135.012 50.8105ZM157.569 46.5478V36.883H162.236V53.7142H157.755V50.657H157.579C157.2 51.6433 156.568 52.4358 155.684 53.0348C154.808 53.6339 153.737 53.9334 152.473 53.9334C151.348 53.9334 150.359 53.6777 149.504 53.1664C148.649 52.655 147.98 51.9281 147.498 50.9858C147.024 50.0434 146.783 48.9147 146.776 47.5998V36.883H151.443V46.767C151.45 47.7605 151.717 48.5458 152.243 49.1229C152.769 49.7001 153.474 49.9886 154.358 49.9886C154.921 49.9886 155.447 49.8608 155.936 49.6051C156.425 49.3421 156.82 48.9549 157.12 48.4435C157.426 47.9322 157.576 47.3003 157.569 46.5478ZM165.97 53.7142V36.883H170.496V39.8197H170.672C170.978 38.7752 171.494 37.9861 172.217 37.4529C172.939 36.9123 173.772 36.642 174.715 36.642C174.948 36.642 175.201 36.6566 175.471 36.6858C175.742 36.715 175.979 36.7553 176.184 36.8064V40.9484C175.964 40.8827 175.662 40.8242 175.274 40.7731C174.887 40.7219 174.532 40.6964 174.211 40.6964C173.524 40.6964 172.911 40.8461 172.37 41.1457C171.836 41.4379 171.414 41.8469 171.099 42.3729C170.792 42.8989 170.639 43.5052 170.639 44.192V53.7142H165.97ZM182.914 54.0321C181.84 54.0321 180.883 53.8458 180.043 53.4732C179.203 53.0933 178.538 52.5345 178.049 51.7966C177.567 51.0515 177.326 50.1237 177.326 49.0133C177.326 48.0782 177.497 47.293 177.841 46.6574C178.184 46.0219 178.651 45.5105 179.243 45.1234C179.835 44.7362 180.507 44.444 181.259 44.2467C182.019 44.0494 182.816 43.9107 183.648 43.8304C184.627 43.7281 185.416 43.6331 186.015 43.5454C186.615 43.4505 187.049 43.3116 187.319 43.129C187.59 42.9464 187.724 42.6761 187.724 42.3181V42.2524C187.724 41.5584 187.505 41.0214 187.067 40.6416C186.636 40.2617 186.023 40.0718 185.226 40.0718C184.386 40.0718 183.717 40.2581 183.22 40.6306C182.724 40.9958 182.395 41.4561 182.235 42.0113L177.917 41.6606C178.137 40.6379 178.568 39.754 179.21 39.0089C179.854 38.2564 180.682 37.6794 181.698 37.2776C182.721 36.8684 183.904 36.664 185.248 36.664C186.183 36.664 187.077 36.7734 187.932 36.9926C188.795 37.2118 189.559 37.5515 190.223 38.0117C190.895 38.472 191.425 39.0637 191.812 39.7869C192.199 40.5028 192.393 41.3612 192.393 42.362V53.7142H187.965V51.3802H187.834C187.564 51.9062 187.202 52.3701 186.75 52.7718C186.297 53.1664 185.752 53.4769 185.116 53.7033C184.481 53.9225 183.747 54.0321 182.914 54.0321ZM184.251 50.8105C184.938 50.8105 185.544 50.6753 186.07 50.405C186.596 50.1274 187.009 49.7548 187.308 49.2873C187.608 48.8197 187.757 48.2901 187.757 47.6985V45.9123C187.611 46.0073 187.41 46.0949 187.155 46.1753C186.906 46.2483 186.625 46.3178 186.311 46.3835C185.996 46.4419 185.683 46.4968 185.369 46.5478C185.055 46.5917 184.77 46.6318 184.514 46.6684C183.965 46.7488 183.488 46.8765 183.079 47.052C182.67 47.2273 182.352 47.4646 182.126 47.7642C181.899 48.0564 181.785 48.4217 181.785 48.86C181.785 49.4955 182.016 49.9813 182.475 50.3173C182.944 50.646 183.535 50.8105 184.251 50.8105ZM200.682 43.9837V53.7142H196.015V36.883H200.463V39.8526H200.66C201.033 38.8738 201.657 38.0994 202.533 37.5296C203.41 36.9525 204.474 36.664 205.723 36.664C206.891 36.664 207.911 36.9196 208.78 37.4309C209.649 37.9424 210.326 38.6729 210.807 39.6225C211.289 40.5649 211.53 41.6899 211.53 42.9976V53.7142H206.863V43.8304C206.87 42.8003 206.607 41.9968 206.073 41.4196C205.54 40.8352 204.805 40.5429 203.871 40.5429C203.242 40.5429 202.688 40.6781 202.205 40.9484C201.73 41.2187 201.357 41.6132 201.088 42.1318C200.825 42.6433 200.689 43.2605 200.682 43.9837ZM224.162 36.883V40.3896H214.026V36.883H224.162ZM216.327 32.8506H220.995V48.5421C220.995 48.9732 221.06 49.3092 221.193 49.5502C221.324 49.7841 221.506 49.9484 221.74 50.0434C221.981 50.1384 222.259 50.1858 222.573 50.1858C222.792 50.1858 223.011 50.1676 223.231 50.131C223.45 50.0872 223.618 50.0544 223.735 50.0324L224.468 53.506C224.235 53.579 223.906 53.6632 223.482 53.7581C223.059 53.8603 222.544 53.9225 221.938 53.9443C220.812 53.9882 219.826 53.8385 218.979 53.495C218.139 53.1517 217.485 52.6185 217.017 51.8953C216.549 51.1721 216.32 50.2589 216.327 49.1558V32.8506Z"
                                fill="#101A24"/>
                            <path
                                d="M17.6122 43.5105C23.6986 43.5105 28.6326 38.5765 28.6326 32.4901C28.6326 26.4037 23.6986 21.4697 17.6122 21.4697C11.5258 21.4697 6.5918 26.4037 6.5918 32.4901C6.5918 38.5765 11.5258 43.5105 17.6122 43.5105Z"
                                stroke="url(#paint0_linear_1_8808)" strokeWidth="4.08163"/>
                            <path
                                d="M0.145812 35.1025C0.143819 35.2383 0.142822 35.3743 0.142822 35.5107C0.142822 50.614 12.3865 62.8576 27.4898 62.8576C42.593 62.8576 54.8367 50.614 54.8367 35.5107C54.8367 35.3743 54.8357 35.2383 54.8337 35.1025H0.145812Z"
                                fill="url(#paint1_linear_1_8808)"/>
                            <path
                                d="M40.8774 28C43.5825 28 45.7754 25.8071 45.7754 23.1021C45.7754 20.397 43.5825 18.2041 40.8774 18.2041C38.1724 18.2041 35.9795 20.397 35.9795 23.1021C35.9795 25.8071 38.1724 28 40.8774 28Z"
                                stroke="#EAA427" strokeWidth="2.44898"/>
                            <path
                                d="M31.898 11.6738C34.603 11.6738 36.7959 9.48095 36.7959 6.77588C36.7959 4.07082 34.603 1.87793 31.898 1.87793C29.1929 1.87793 27 4.07082 27 6.77588C27 9.48095 29.1929 11.6738 31.898 11.6738Z"
                                stroke="#EA7727" strokeWidth="2.44898"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1_8808" x1="8.63268" y1="23.1024" x2="25.7755"
                                            y2="43.1024" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EA6D27"/>
                                <stop offset="1" stop-color="#EAA827"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_8808" x1="7.48976" y1="35.1025" x2="40.1428"
                                            y2="53.0616" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF9400"/>
                                <stop offset="1" stop-color="#EA6D27"/>
                            </linearGradient>
                            <clipPath id="clip0_1_8808">
                                <rect width="226.286" height="62.8571" fill="white" transform="translate(0.142822)"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <h6 className="inter-regular text-[18px] text-secondarytext max-w-[466px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore
                        <br/>
                        Learn more
                    </h6>
                    <motion.div className="flex flex-col justify-center items-center lg:items-start lg:justify-start gap-[20px] mt-4" variants={itemVariants}>
                        <h4 className="text-[13px] w-fit text-maintext inter-bold">
                            OPENING HOURS
                        </h4>
                        <div className="flex  flex-col sm:flex-row  w-fit 2xl:flex-row gap-[24px] sm:gap-[48px]">
                            <h6 className="inter-regular sm:text-start text-center w-full text-[18px] text-secondarytext">
                                Monday - Friday
                                <br/>
                                8:00 am to 9:00 pm
                            </h6>
                            <h6 className="inter-regular sm:text-start text-center w-full text-[18px] text-secondarytext">
                                Saturday
                                <br/>
                                8:00 am to 9:00 pm
                            </h6>
                            <h6 className="inter-regular sm:text-start text-center w-full text-[18px] text-secondarytext">
                                Sunday
                                <br/>
                                CLOSED
                            </h6>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex flex-col w-full justify-center items-center lg:w-auto" variants={itemVariants}>
                    <div className="flex lg:flex-col flex-col sm:flex-row flex-wrap lg:flex-nowrap 2xl:flex-row gap-8 sm:gap-[60px] xl:gap-[120px] lg:gap-[60px]">
                        <motion.div className="flex gap-3 flex-col" variants={itemVariants}>
                            <h4 className="text-[13px] mb-2 text-maintext inter-bold">
                                Navigation
                            </h4>
                            <a href="#" className="text-[18px] text-secondarytext">Menu</a>
                            <a href="#" className="text-[18px] text-secondarytext">About us</a>
                            <a href="#" className="text-[18px] text-secondarytext">Contact us</a>
                            <a href="#" className="text-[18px] text-secondarytext">Main dishes</a>
                        </motion.div>
                        <motion.div className="flex gap-3 flex-col" variants={itemVariants}>
                            <h4 className="text-[13px] mb-2 text-maintext inter-bold">
                                DISHES
                            </h4>
                            <a href="#" className="text-[18px] text-secondarytext">Fish & Veggies</a>
                            <a href="#" className="text-[18px] text-secondarytext">Tofu Chili</a>
                            <a href="#" className="text-[18px] text-secondarytext">Egg & Cucumber</a>
                            <a href="#" className="text-[18px] text-secondarytext">Lumpia w/Sauce</a>
                        </motion.div>
                        <motion.div className="flex gap-3 flex-col" variants={itemVariants}>
                            <h4 className="text-[13px] uppercase mb-2 text-maintext inter-bold">
                                FOLLOW US
                            </h4>
                            <div className="flex flex-row gap-[16px]">
                                <div className={'flex flex-row gap-[16px]'}>
                                    <svg className={'cursor-pointer'} width="45" height="45" viewBox="0 0 45 45"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <circle cx="22.5004" cy="22.4999" r="21.6433" stroke="#101A24"
                                                strokeWidth="1.14286"/>
                                        <rect x="8.18408" y="8.18359" width="28.6323" height="28.6323"
                                              fill="url(#pattern0_1_8800)"/>
                                        <defs>
                                            <pattern id="pattern0_1_8800" patternContentUnits="objectBoundingBox"
                                                     width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_1_8800" transform="scale(0.01)"/>
                                            </pattern>
                                            <image id="image0_1_8800" width="100" height="100"
                                                   xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3TtrFFEchvEnIYIGooh3EBELC0FQsLQXq5Q2gqClCn4BP4GWYm1jIZYWImKXTyBiaZHFgIsWahSNohYzhYjuODvn8v533x8MYcnsOYd9mJm9kYCZmZmZmVlZC7UXkNl24BRwEjgC7AdWgCXgG7DZ7vcV+Nxub9ttDLwDNtqfNqXdwFXgKbAF/By43Su5+KWSk2V2CLgJXAKWK69lri0CN2hOP0OPBh8hA+0CHgDnai8klchB9gHPaC7YM2Ox9gKmtAI8YcZiQNwgd4HTtReRQ8QgF4CLtReRS7Qgy8Dt2ovIKVqQy8Dh2ovIKVqQ67UXkFukIGeA47UXkVukIKu1F1BCpBeGZxON8wG4D6wBo/b2xwn7T/rd3FqgeWCGvi+1BuwpvPaZdJDhMTaBA6UX3leUa8jRBGM8At4kGCerKEF2JhjjeYIxsosSJMUHTu8TjJFdlCDbEowR4tlSlCApfKm9gP8xT0FCcBAxDiLGQcQ4iBgHEeMgYmq9/X4F2Ntj/xRf91kFjk1xvx/ArQTzS3tBnq995tg2Mj0Gf+VTVrdRyckcpNt6yckcpJuPEDEOIsanLDE+QsQ4iJAtCn8xwkEme03zSr0YB5ms6AUdHKRL0esHOEgXHyFifISIcRAxxYPU+mtAJ4Adv93+RPOc/1/OA3cGznkNeNzzPuvA94Hz9lLrE8OXPfcfJ5hzDLxKME5WPmWJcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiImyj8FGwEPE4xhZmZmZmZmf/gFZOa1CGaEgBcAAAAASUVORK5CYII="/>
                                        </defs>
                                    </svg>
                                    <svg className={'cursor-pointer'} width="45" height="45" viewBox="0 0 45 45"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 14.5713C16.243 14.5713 14 16.7075 14 19.3332V26.9522C14 29.578 16.243 31.7141 19 31.7141H27C29.757 31.7141 32 29.578 32 26.9522V19.3332C32 16.7075 29.757 14.5713 27 14.5713H19ZM19 16.4761H27C28.654 16.4761 30 17.758 30 19.3332V26.9522C30 28.5275 28.654 29.8094 27 29.8094H19C17.346 29.8094 16 28.5275 16 26.9522V19.3332C16 17.758 17.346 16.4761 19 16.4761ZM28 17.4284C27.7348 17.4284 27.4804 17.5288 27.2929 17.7074C27.1054 17.886 27 18.1282 27 18.3808C27 18.6334 27.1054 18.8756 27.2929 19.0542C27.4804 19.2329 27.7348 19.3332 28 19.3332C28.2652 19.3332 28.5196 19.2329 28.7071 19.0542C28.8946 18.8756 29 18.6334 29 18.3808C29 18.1282 28.8946 17.886 28.7071 17.7074C28.5196 17.5288 28.2652 17.4284 28 17.4284ZM23 18.3808C20.243 18.3808 18 20.517 18 23.1427C18 25.7684 20.243 27.9046 23 27.9046C25.757 27.9046 28 25.7684 28 23.1427C28 20.517 25.757 18.3808 23 18.3808ZM23 20.2856C24.654 20.2856 26 21.5675 26 23.1427C26 24.718 24.654 25.9999 23 25.9999C21.346 25.9999 20 24.718 20 23.1427C20 21.5675 21.346 20.2856 23 20.2856Z"
                                            fill="black"/>
                                        <circle cx="22.7137" cy="22.4999" r="21.6433" stroke="#101A24"
                                                strokeWidth="1.14286"/>
                                    </svg>
                                    <svg className={'cursor-pointer'} width="45" height="45" viewBox="0 0 45 45"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect x="8.85742" y="8.14355" width="28.5714" height="28.5714"
                                              fill="url(#pattern0_95_3)"/>
                                        <circle cx="22.785" cy="22.3573" r="21.6433" stroke="#101A24"
                                                strokeWidth="1.14286"/>
                                        <defs>
                                            <pattern id="pattern0_95_3" patternContentUnits="objectBoundingBox"
                                                     width="1"
                                                     height="1">
                                                <use xlinkHref="#image0_95_3" transform="scale(0.01)"/>
                                            </pattern>
                                            <image id="image0_95_3" width="100" height="100"
                                                   xlinkHref="data:image/png;base64,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"/>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="mt-[53px] w-full h-[1.3px] bg-opacity-10 bg-maintext"
                variants={itemVariants}
            />
            <motion.div
                className="my-[39px] w-full flex flex-col sm:flex-row justify-between items-center gap-4"
                variants={itemVariants}
            >
                <div className="flex items-center gap-4 flex-row">
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG code here */}
                    </svg>
                    <h6 className="inter-regular text-[14px] sm:text-[18px] text-secondarytext text-center sm:text-left">
                        2024 Restaurants. All Rights Reserved. Designed by <span className="inter-bold">emrelutfi</span>
                    </h6>
                </div>
                <ul className="inter-regular text-[14px] sm:text-[18px] flex flex-row gap-4 sm:gap-8 text-secondarytext">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </motion.div>
            <motion.div
                className="absolute -z-10 w-full h-full top-0 scale-150 mt-[170px] -ml-24 overflow-hidden flex justify-center items-center flex-col"
                initial={{opacity: 0, scale: 1.2}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
            >
                <Image src={tavasvg} width={880} height={1072} alt="Background decoration"/>
            </motion.div>
        </motion.div>
    );
};

export default Footer;