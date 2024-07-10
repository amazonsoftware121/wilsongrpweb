import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const LeftImageAnimation = (props) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9, 1.1]);
    const scale = useSpring(rawScale, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const rawRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 0]);
    const rotate = useSpring(rawRotate, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <motion.div
        ref={ref}
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <motion.img
                src={props.imgSrc}
                style={{
                    scale: scale,
                    rotateZ: rotate,
                    width: "100%"
                }}
            />
        </motion.div>
    )
}

export default LeftImageAnimation