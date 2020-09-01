import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; // Para que styled-components possa manipular
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
