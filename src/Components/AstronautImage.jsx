import { useRef, useState } from "react";
import {
  m,
  useScroll,
  useMotionValueEvent,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { astroPath } from "../Constants/astroPath";
import BgQuote from "./elements/BgQuote";

const AstronautImage = () => {
  const [isInView, setIsInView] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.1) {
      setIsInView(true);
    }
  });


};

export default AstronautImage;
