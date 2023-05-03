import React from 'react'
import {
  ApplicantsContainer,
  TopContainerWrapper,
  TopContainer,
  TopButtonsWrapper,
  TopRightButtonsWrapper,
  ApplicationPagination,
  PageSection,
  PageNumber,
} from 'styles/ApplicantsPage/index'
import ApplicationPageTable from 'pages/applicationPageTable'
import NewestArrow from 'assets/images/newestdownarrow.png'

const ApplicantsPage = () => {
  return (
    <ApplicantsContainer>
      <TopContainerWrapper>
        <TopContainer>
          <div>
            <h1>Showing 45 Applicants</h1>
            <p>Based your preferences</p>
          </div>
          <TopButtonsWrapper>
            <button className="AllButton">All</button>
            <button>Pending</button>
            <button>On-Hold</button>
            <button>Shortlisted</button>
          </TopButtonsWrapper>
          <TopRightButtonsWrapper>
            <div>
              <img src={NewestArrow} />
            </div>
            <div>
              <label htmlFor="Newest">Newest</label>
              <select name="Newest" id="Newest" disabled>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </TopRightButtonsWrapper>
        </TopContainer>
      </TopContainerWrapper>
      <div>
        <ApplicationPageTable />
      </div>
      <ApplicationPagination>
        <div>
          <p className="color"> Showing 10 from 160 data</p>
        </div>
        <PageSection>
          <div>
            <button>Previous</button>
          </div>
          <PageNumber>
            <p>1</p>
            <p>2</p>
            <p className="page3">3</p>
            <p>4</p>
          </PageNumber>
          <div>
            <button>Next</button>
          </div>
        </PageSection>
      </ApplicationPagination>
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
