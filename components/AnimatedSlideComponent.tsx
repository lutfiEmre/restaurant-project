import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface Slide {
    id: number;
    title: string;
}

const slidesFood: Slide[] = [
    { id: 1, title: "Slide 1" },
    { id: 2, title: "Slide 2" },
    { id: 3, title: "Slide 3" },
    { id: 4, title: "Slide 4" }
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number): number => {
    return Math.abs(offset) * velocity;
};

interface AnimatedSlideComponentProps {
    slide: Slide;
}

export default function AnimatedSlideComponent({ slide }: AnimatedSlideComponentProps): JSX.Element {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number): void => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [page]);

    return (
        <div className="relative overflow-hidden w-full h-[200px]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.h5
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="portligat absolute w-full text-center leading-[130px] text-[120px] xl:leading-[90px] 2xl:leading-[120px] lg:leading-[100px] lg:text-center xl:text-start xl:text-[100px] lg:text-[100px] 2xl:text-[120px]"
                >
                    <span
                        className={`
                            ${slide.id === 1 && "text-[#A80000]"}
                            ${slide.id === 2 && "text-[#FFA800]"}
                            ${slide.id === 3 && "text-[#00A839]"}
                            ${slide.id === 4 && "text-[#FF2B2B]"}
                        `}
                    >
                        {slide.title}
                    </span>
                </motion.h5>
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </div>
    );
}