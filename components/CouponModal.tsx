import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CouponModalProps {
    isOpen: boolean;
    onClose: () => void;
    couponCode: string;
}

const CouponModal: React.FC<CouponModalProps> = ({ isOpen, onClose, couponCode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black z-40 bg-opacity-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="bg-white p-12 rounded-lg shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4">Kupon Kodunuz</h2>
                        <p className="text-xl mb-4">{couponCode}</p>
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Kapat
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CouponModal;