import { interviewData } from 'components/InterviewerModal/interviewerData'

import DeleteIcon from 'assets/svg/DeleteIcon'
import EditorIcon from 'assets/svg/EditorIcon'

import { Delete, Edit, Editor, InterviewDate, SubNavbar, DataWrapper } from 'styles/InterviewerModal'

const ScheduleDate = () => (
  <SubNavbar>
    {interviewData.map((item, index: number) => {
      return (
        <DataWrapper key={index}>
          <InterviewDate>{item.date}</InterviewDate>
          <Editor>
            <Edit>
              <EditorIcon>{item.edit}</EditorIcon>
            </Edit>
            <Delete>
              <DeleteIcon>{item.delete}</DeleteIcon>
            </Delete>
          </Editor>
        </DataWrapper>
      )
    })}
  </SubNavbar>
)

export default ScheduleDate
