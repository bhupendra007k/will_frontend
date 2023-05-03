import React from 'react'
import { ResumeIcons } from 'styles/ResumePage/resumepage'
import DownloadResume from 'assets/images/downloadresume.png'
import EditResume from 'assets/images/editresume.png'
import TrashResume from 'assets/images/trashresume.png'

const ResumePageIcons = () => {
  return (
    <ResumeIcons>
      <button>
        <img src={DownloadResume} />
      </button>
      <button>
        <img src={EditResume} />
      </button>
      <button>
        <img src={TrashResume} />
      </button>
    </ResumeIcons>
  )
}

export default ResumePageIcons
