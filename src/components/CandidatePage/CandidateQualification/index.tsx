import React from 'react'

import {
  EducationWrapper,
  EducationHeading,
  EducationLineWrapper,
  QualificationWrapper,
  QualificationData,
  Logo,
  LogoImg,
  DataWrapper,
  Course,
  UpdateWrapper,
  Date,
  Place,
  EducationContainer,
  EditWrapper,
  EditContainer,
  EditLogo,
  DeleteContainer,
  DeleteLogo,
  AddContainer,
  AddHeading,
  AddImg,
} from 'styles/CandidateQualification'

interface IData {
  heading: string
  logo: string
  title: string
  startDate: string
  endDate: string
  city: string
  country: string
  edit?: string
  deleteButton?: string
  add?: string
  image?: string
}

const Qualification: React.FC<IData> = ({
  heading,
  logo,
  title,
  startDate,
  endDate,
  city,
  country,
  edit,
  deleteButton,
  add,
  image,
}: IData) => (
  <div>
    <EducationContainer>
      <EducationWrapper>
        <EducationHeading>{heading}</EducationHeading>
        <EducationLineWrapper />
      </EducationWrapper>
      <QualificationWrapper>
        <QualificationData>
          <Logo>
            <LogoImg src={logo} alt="wits" />
          </Logo>
          <DataWrapper>
            <Course>{title}</Course>
            <UpdateWrapper>
              <Date>
                {startDate} - {endDate}
              </Date>
              <Place>
                {city}- {country}
              </Place>
            </UpdateWrapper>
          </DataWrapper>
        </QualificationData>
        {edit && (
          <EditWrapper>
            <EditContainer>
              <EditLogo src={edit} alt="edit" />
            </EditContainer>

            <DeleteContainer>
              <DeleteLogo src={deleteButton} alt="delete-logo" />
            </DeleteContainer>
          </EditWrapper>
        )}
      </QualificationWrapper>
      {add && (
        <AddContainer>
          <AddHeading>{add}</AddHeading>
          <AddImg src={image} alt="add"></AddImg>
        </AddContainer>
      )}
    </EducationContainer>
  </div>
)

export default Qualification
