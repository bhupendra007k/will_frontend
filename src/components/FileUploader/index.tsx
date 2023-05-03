import React from 'react'
import { Controller } from 'react-hook-form'
import { InputWrapper, InputFile } from 'styles/FormElements'
const FileInput = (props: any) => {
  return (
    <InputWrapper className="inputwrapper">
      <Controller
        render={({ field }) => <InputFile {...props} {...field} type={'file'} className="input" />}
        {...props}
        name={props.name || ''}
      />
    </InputWrapper>
  )
}

export default FileInput
