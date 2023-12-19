import React, { useRef } from 'react';
import { motion, useScroll, useSpring,useTransform } from 'framer-motion';

const HorizontalWrapper = ({ children, direction, height }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { damping: 50, stiffness: 300 }; // Adjust these values based on your preference

  const springX = useSpring(
    useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, direction]),
    springConfig
  );

  return (
    <div ref={scrollRef} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: 'relative',
          translateX: springX,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;
