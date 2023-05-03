import { InputWrapper } from 'styles/CandidateModal'
import TextInput from 'components/RecruiterInput'

const InputField = ({ label }: any) => (
  <InputWrapper>
    <div className="form">
      <TextInput type="text" className="form__input" placeholder=" " />
      <label htmlFor="email" className="form__label">
        {label}
      </label>
    </div>
  </InputWrapper>
)

export default InputField
