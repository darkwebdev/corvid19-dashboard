import React, { CSSProperties, FC } from 'react';

const headerButtonStyle: CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
};
type HeaderButtonProps = {
  hint?: string;
  active?: boolean;
  onClick?: () => void;
};

const HeaderButton:FC<HeaderButtonProps> = ({ active = false, onClick = () => {}, children, hint = children }) =>
  <button
    onClick={onClick}
    style={{ ...headerButtonStyle, ...(active && { textDecoration: 'underline' }) }}
    title={`Sort by ${hint}`}
    aria-label={`Sort by ${hint}`}
  >
    {children}
  </button>;

export default HeaderButton;
