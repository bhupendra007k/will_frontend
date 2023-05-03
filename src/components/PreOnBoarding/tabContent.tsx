import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import TableMain from 'components/PreOnBoarding/startTable'
import SelectBox from 'components/SelectBox'
import { jobRoleData } from 'components/SelectBox/jobRoleData'
import { recruiterData } from 'components/SelectBox/recruiterData'
import SearchInputImg from 'assets/images/adminSearchIcon.png'

import {
  ContentWrapper,
  MainContentWrapper,
  Wrapper,
  MainContent,
  MainContentRight,
  SeachInput,
  SearchMain,
  SearchImg,
} from 'styles/PreOnBoarding/start'
import { JobsContentSub2 } from 'styles/AdminJobPage/job'

interface ICollectInfo {
  heading: string
}

const CollectInfo = ({ heading }: ICollectInfo) => {
  const { setValue, control } = useForm()

  const [allDatas, setData] = useState('')

  useEffect(() => {
    setValue('role', allDatas)
    setValue('jobType', allDatas)
  }, [allDatas])

  return (
    <>
      <ContentWrapper>
        <Wrapper>
          <MainContentWrapper>
            <MainContent>{heading}</MainContent>
            <SeachInput>
              <SearchMain type="search" placeholder="Search something here..." />
              <SearchImg src={SearchInputImg} alt="Search Icon" />
            </SeachInput>
          </MainContentWrapper>
          <MainContentRight>
            <JobsContentSub2>
              <SelectBox defaultValue="Job Role" data={jobRoleData} setData={setData} control={control} />
            </JobsContentSub2>
            <JobsContentSub2>
              <SelectBox defaultValue="Recruiter" data={recruiterData} setData={setData} control={control} />
            </JobsContentSub2>
          </MainContentRight>
        </Wrapper>

        <TableMain />
      </ContentWrapper>
    </>
  )
}

export default CollectInfo
