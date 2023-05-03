import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Input, InputWrapper } from 'styles/FormElements'
import PasswordShowIcon from 'assets/svg/PasswordShowIcon'
import PasswordClosedIcon from 'assets/svg/PasswordClosedIcon'

const TextInput = (props: any) => {
  const [passwordHide, setPasswordHide] = useState(props.type === 'password')
  const toggleIcon = () => setPasswordHide(!passwordHide)

  return (
    <InputWrapper className="inputwrapper">
      <Controller
        render={({ field }) => <Input {...props} {...field} type={passwordHide ? 'password' : 'text'} />}
        {...props}
      />
      {props?.type != 'text' && (
        <div>
          {passwordHide ? (
            <PasswordClosedIcon className="password_icon" onClick={toggleIcon} />
          ) : (
            <PasswordShowIcon className="password_icon" onClick={toggleIcon} />
          )}
        </div>
      )}
    </InputWrapper>
  )
}

export default TextInput
