import React from 'react'
import NewestArrow from 'assets/images/newestdownarrow.png'
import {
  ResumeWrapper,
  TopSection,
  ButtonSection,
  MidSection,
  TopRightButtonsWrapper,
} from 'styles/ResumePage/resumepage'
import ResumePageTable from 'pages/resumePageTable'

const ResumePage = () => {
  return (
    <>
      <ResumeWrapper>
        <TopSection>
          <div>
            <div className="resume-title">Upload CV or Resume</div>
            <div className="resume-subtitle">
              There are two ways to create an editable online resume. When upload a resume to start, your file will also
              be saved and available when you apply.
            </div>
          </div>
          <ButtonSection>
            <button className="topButton">Create Resume</button>
            <button className="topButton">Create CV</button>
          </ButtonSection>
        </TopSection>
        <MidSection>
          <div className="uploadText">Uploaded Files</div>
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
        </MidSection>
        <ResumePageTable />
      </ResumeWrapper>
    </>
  )
}

export default ResumePage
