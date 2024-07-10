import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const LeftTextAnimation = ({children}) => {
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
  return (
    <motion.div className='textAnimation'
    ref={ref}
        style={{ translateX }} 
    >
        {children}
    </motion.div>
  )
}

export default LeftTextAnimation