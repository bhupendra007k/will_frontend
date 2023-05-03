import React, { ReactElement } from 'react'
import { StyledButton } from 'styles/Button/button'
export interface IButtonProps {
  label: ReactElement | string
  onClick?: () => void
  handleClick?: () => void
  variant?: 'contained' | 'text' | 'outline' | 'post' | 'cancel'
  type?: 'button' | 'submit' | 'reset'
}
const Button: React.FC<IButtonProps> = ({ handleClick, label, variant, type, ...rest }: IButtonProps) => (
  <StyledButton onClick={handleClick} variant={variant} {...rest} type={type}>
    {label}
  </StyledButton>
)

Button.defaultProps = {
  variant: 'outline',
}
export default Button
