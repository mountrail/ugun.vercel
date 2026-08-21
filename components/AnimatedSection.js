// components/AnimatedSection.js
import { motion } from "framer-motion";
import { useRef, useState, useLayoutEffect, useEffect } from "react";

const useIsoLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const [skipAnimation, setSkipAnimation] = useState(false);

    useIsoLayoutEffect(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setSkipAnimation(alreadyVisible);
    }, []);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={skipAnimation ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;