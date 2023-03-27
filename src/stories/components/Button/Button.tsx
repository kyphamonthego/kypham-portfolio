import React from 'react';
import './button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  secondary?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  gradient?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  secondary = false,
  gradient = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'kypham-button--primary' : secondary ? 'kypham-button--secondary' : gradient ? 'kypham-button--gradient' : 'kypham-button--primary';
  return (
    <a
      type="button"
      className={['kypham-button', `kypham-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </a>
  );
};
