import React from 'react'
import { DropDownWrapper } from 'styles/Login'
interface IDropDown {
  userType: any
  id?: string
  name?: string
  role?: any
  roleLabel?: any
}
const DropdownSelector: React.FC<IDropDown> = ({ userType, id, name, role, roleLabel }: IDropDown) => {
  const selectClickHandler = (e: any) => {
    const user = e.target.value

    userType(user)
  }

  return (
    <DropDownWrapper name={name} id={id} onChange={selectClickHandler}>
      {roleLabel.map((labeldata: any, index: any) => (
        <option key={index} value={role} label={labeldata.label} />
      ))}
    </DropDownWrapper>
  )
}

export default DropdownSelector
