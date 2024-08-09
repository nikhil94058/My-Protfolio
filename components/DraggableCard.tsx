// /src/components/DraggableCard.tsx

import React, { useEffect } from 'react';
import { motion, useMotionValue, useVelocity } from 'framer-motion';

interface DraggableCardProps {
    name: string;
    experience: string;
    image: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ name, experience, image }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xVelocity = useVelocity(x);
    const yVelocity = useVelocity(y);

    useEffect(() => {
        const unsubscribeX = xVelocity.onChange((latestVelocity) => {
            console.log("X Velocity", latestVelocity);
        });

        const unsubscribeY = yVelocity.onChange((latestVelocity) => {
            console.log("Y Velocity", latestVelocity);
        });

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [xVelocity, yVelocity]);

    return (
        <motion.div
            className="flex flex-col items-center w-36 border border-gray-300 rounded-lg p-3 shadow-sm"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.1 }}
            style={{ x, y }}
            whileDrag={{ scale: 1.2, opacity: 0.8 }}
            onDragEnd={() => {
                x.set(0);
                y.set(0);
            }}
        >
            <img src={image} alt={`${name} logo`} className="w-24 h-24 object-contain mb-2" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{experience}</p>
        </motion.div>
    );
};

export default DraggableCard;
