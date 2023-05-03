import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectFilters from 'components/JobList/SelectFilters'
import Button from 'components/Button'
import { RequirementRoute } from 'constants/routes'
import { salaryOptions, jobtypeOptions, locattionOptions, languageOptions } from 'components/JobList/data'
import Tcs from 'assets/images/tcs.png'

import {
  ContainerWrapper,
  JobFilterContainer,
  ColumnLeft,
  LeftSection,
  RightSectionWrap,
  ColumnRight,
  ButtonWrapper,
} from 'styles/JobList'
interface IJobs {
  jobData: any
}
const JobList: React.FC<IJobs> = ({ jobData }: IJobs) => {
  console.log('data:=', jobData[0]?.title)

  const navigate = useNavigate()

  return (
    <>
      <ContainerWrapper>
        <JobFilterContainer>
          <ColumnLeft>
            <LeftSection>
              <SelectFilters heading={<div className="filterplace">Job Type</div>} options={jobtypeOptions} />
            </LeftSection>
            <LeftSection>
              <SelectFilters heading={<div className="filterplace">Salary Range</div>} options={salaryOptions} />
            </LeftSection>
            <LeftSection>
              <SelectFilters heading={<div className="filterplace">Location</div>} options={locattionOptions} />
            </LeftSection>
            <LeftSection>
              <SelectFilters heading={<div className="filterplace">Language</div>} options={languageOptions} />
            </LeftSection>
            <LeftSection></LeftSection>
          </ColumnLeft>
          <RightSectionWrap>
            <ColumnRight>
              {jobData.map((item: any, index: number) => {
                return (
                  <div className="card-border" key={index}>
                    <div className="top">
                      <img src={Tcs} />
                      <h1>{item?.title}</h1>
                    </div>
                    <div className="borderbottom">
                      <p>They develop products by applies science and mathematics to technical problems.</p>
                    </div>
                    <div>
                      <div className="bottom">
                        <span className="salary">Salary:</span>
                        <span className="salaryamount">{`Rs ${item?.salaryStartRng}-${item?.salaryEndRng}/- per month`}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ColumnRight>
          </RightSectionWrap>
        </JobFilterContainer>
      </ContainerWrapper>
      <ButtonWrapper>
        <Button handleClick={() => navigate(RequirementRoute.path)} label="See more" />
      </ButtonWrapper>
    </>
  )
}

export default JobList
