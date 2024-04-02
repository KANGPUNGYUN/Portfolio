import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function TypingAnimation({ text, delay }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count, text.length]);

  return <motion.p>{displayText}</motion.p>;
}

export default TypingAnimation;
