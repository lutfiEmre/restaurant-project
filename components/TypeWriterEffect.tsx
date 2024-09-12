import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    texta: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ texta }) => {
    const [text, setText] = useState<string>(texta);
    const fullText: string = texta;

    useEffect(() => {
        let currentIndex: number = 0;
        const interval: NodeJS.Timeout = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <motion.div
            className="davidlibrebold text-center w-full text-[62px] text-[#101A24]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.div>
    );
};

export default TypewriterEffect;