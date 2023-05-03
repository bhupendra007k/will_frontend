import { Controller } from 'react-hook-form'
import { InputText, InputContainer } from 'styles/Recruiter'

interface ITextInput {
  className?: string
  type?: 'number' | 'text'
  placeholder?: string
  name?: string
  control?: any
}

const TextInput = (props: ITextInput) => {
  return (
    <InputContainer>
      <Controller
        render={({ field }) => (
          <InputText {...props} {...field} type={props?.type ? props?.type : 'text'} className={props.className} />
        )}
        {...props}
        name={props.name || ''}
      />
    </InputContainer>
  )
}

export default TextInput
