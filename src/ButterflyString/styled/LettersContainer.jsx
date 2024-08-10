import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LettersContainer = styled(motion.span)`
  display: inline-block;
  overflow: hidden;
`;

LettersContainer.defaultProps = {
  variants: {
    initial: {},
    animate: {},
  },
};
