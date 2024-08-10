import styled from "styled-components";
import { motion } from "framer-motion";
import { springMedium } from "../framerPresets"; // Adjust the path if necessary

export const TextWrapper = styled(motion.span)`
  font-size: inherit;
  font-weight: inherit;
  position: relative;
  display: flex;
`;

TextWrapper.defaultProps = {
  variants: {
    initial: {
      x: "0",
    },
    animate: {
      x: "4vw",
    },
  },
  transition: {
    ...springMedium,
  },
};
