import React, { ComponentType } from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionWrapProps {
    classNames?: string;
}

const MotionWrap = <P extends {}>(
    WrappedComponent: ComponentType<P | {}>,
    classNames?: string
): React.FC<MotionWrapProps & P> => {
    const MotionVariants: Variants = {
        visible: {
            y: [100, 50, 0],
            opacity: [0, 0, 1],
        },
    };

    const EnhancedComponent: React.FC<MotionWrapProps & P> = () => {
        return (
            <motion.div
                variants={MotionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className={`${classNames} app__flex`}
            >
                <WrappedComponent />
            </motion.div>
        );
    };

    return EnhancedComponent;
};

export default MotionWrap;
