import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterEffect = ({texta}) => {
    const [text, setText] = useState(texta);
    const fullText = texta;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="davidlibrebold text-center text-[68px] text-[#101A24]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.div>
    );
};

export default TypewriterEffect;