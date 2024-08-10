import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const LetterWrapper = styled(motion.span)`
  display: inline-block;
  padding: 0 0.1em;
  margin: 0 -0.1em;
  transform-origin: center center 0.4em;

  ${props =>
    props.isSpace &&
    css`
      width: 0.4em;
    `}
`;
