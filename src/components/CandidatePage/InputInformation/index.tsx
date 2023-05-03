import React from 'react'

import InputField from 'components/InputField'

import { InformationContainer, InformationHeading, LineWrapper, BasicInfoContainer } from 'styles/CandidateModal'
const CandidateInformation = () => {
  return (
    <div>
      <InformationContainer>
        <InformationHeading>Basic Information</InformationHeading>
        <LineWrapper />
      </InformationContainer>
      <div className="education">
        <BasicInfoContainer>
          <InputField label="Your Full Name" />
          <InputField label="Username" />
          <InputField label="Mobile Number" />
          <InputField label="Mail-id" />
          <InputField label="Country" />
          <InputField label="City" />
        </BasicInfoContainer>
      </div>
    </div>
  )
}

export default CandidateInformation
