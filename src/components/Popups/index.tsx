import { ReactElement } from 'react'

import { Wrapper, Icon, Header, Heading, SubHeading, CancelField } from 'styles/PopUps'
import CancelMark from 'assets/svg/Cancelicon'

export interface IPopupProps {
  heading: string
  subHeading?: string
  icon: ReactElement | string
  variant?: 'success' | 'error' | 'warning'
  value: () => void
}
const PopUp: React.FC<IPopupProps> = ({ heading, icon, variant, subHeading, value, ...rest }: IPopupProps) => (
  <Wrapper variant={variant} {...rest}>
    <Icon>{icon}</Icon>
    <Header>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
    </Header>
    <CancelField onClick={value}>
      <CancelMark />
    </CancelField>
  </Wrapper>
)

export default PopUp
