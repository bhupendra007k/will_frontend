import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import usePost from 'hooks/usePost'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'antd'
import TextInput from 'components/RecruiterInput'
import Taskbar from 'components/Taskbar'
import Button from 'components/Button'
import { Schema } from 'components/Utils/interviewerSchema'
import AdminSideNavbar from 'components/AdminSideNavBar'
import { designation } from 'components/SelectBox/designation'
import { CountryData } from 'components/SelectBox/countryData'
import SelectBox from 'components/SelectBox'
import Loader from 'components/Loader'
import { jobData } from 'components/SelectBox/jobdata'
import ErrorModal from 'components/Modal/SuccessErrorModal/errormodal'

import { ADMIN_INTERVIEWER } from 'constants/apiRoutes'
import { AddInterviewerRoute, InterviewerPortal } from 'constants/routes'

import Upload from 'assets/images/uploads.png'

import {
  MainWrapper,
  MainSection,
  Section,
  HeadingWrapper,
  Wrapper,
  FormWrapper,
  InformationWrapper,
  ImageWrapper,
  TextWrapper,
  FormContainer,
  FieldWrapper,
  FieldHeading,
  InputWrapper,
  InformationContainer,
  SubmitWrapper,
  ButtonWrapper,
  SaveButton,
  Image,
  InputOut,
  StaticImage,
  ImageContainer,
  ImageFieldWrapper,
} from 'styles/AddInterview'
import { SideBar, TextHeading, TextContent } from 'styles/Recruiter'
import { JobsContentSub1, JobsContentSub2, SelectWrapper } from 'styles/JobPost'
import { ErrorMessage, ErrorWrapper } from 'styles/FormElements'

interface IFormInputs {
  name?: string
  designation?: string
  phone?: number
  email?: string
  jobType?: string
  experience?: number
  profilePicture?: any
  code: string
}

const JobInterviewer = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })

  const { mutateAsync, isLoading } = usePost()
  const fileList = watch('profilePicture')
  const imageUrl = fileList && fileList[0] ? URL.createObjectURL(fileList[0]) : ''
  const navigate = useNavigate()
  const [selectBoxData, setData] = useState('')
  const [data1, setData1] = useState('')
  const [errorModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (selectBoxData !== '') {
      setValue('designation', selectBoxData, { shouldValidate: true })
    }
  }, [selectBoxData])

  useEffect(() => {
    if (data1 !== '') {
      setValue('jobType', data1, { shouldValidate: true })
    }
  }, [data1])

  const jobInterviewerHandle = async (values: IFormInputs) => {
    try {
      const payload = { ...values, profilePicture: fileList[0], empType: 'INTERVIEWER' }
      const response = await mutateAsync({
        url: ADMIN_INTERVIEWER,
        payload,
        token: true,
        ifFormData: true,
      })

      if (response?.success) {
        navigate(InterviewerPortal.path)
      }
    } catch (error) {
      setOpenModal(true)
    }
  }

  const [valueData, setStateValue] = useState<number>(0)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('')
  const [passcode, setPasscode] = useState('')

  useEffect(() => {
    if (passcode !== '') setValue('code', passcode, { shouldValidate: true })
  }, [passcode])

  useEffect(() => {
    validateExperience()
  }, [valueData])

  function validateExperience() {
    if (typeof valueData === 'string') {
      setError('Please enter only numbers')
    }
  }

  useEffect(() => {
    if (valueData) setValue('experience', valueData, { shouldValidate: true })
  }, [valueData])

  const handleData = () => {
    navigate(InterviewerPortal.path)
  }

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      <MainWrapper>
        <SideBar>
          <AdminSideNavbar />
        </SideBar>
        <MainSection>
          <Taskbar />
          <Section>
            <HeadingWrapper>Add New Interviewer</HeadingWrapper>
          </Section>
          <Wrapper>
            <form onSubmit={handleSubmit(jobInterviewerHandle)}>
              <FormWrapper>
                <InformationWrapper>
                  <ImageWrapper>
                    <TextWrapper>
                      <ImageFieldWrapper>
                        {imageUrl ? (
                          <>
                            <Image src={imageUrl} />
                          </>
                        ) : (
                          <>
                            <StaticImage src={Upload} alt="loading" />
                            <TextHeading>Drag &amp; Drop or Click Here</TextHeading>
                            <TextContent>To Upload Recruiter Image</TextContent>
                          </>
                        )}
                      </ImageFieldWrapper>
                      <ImageContainer>
                        <InputOut type="file" className="test" {...register('profilePicture')} />
                      </ImageContainer>
                      <ErrorWrapper>
                        <ErrorMessage>{errors?.profilePicture && errors?.profilePicture?.message}</ErrorMessage>
                      </ErrorWrapper>
                    </TextWrapper>
                  </ImageWrapper>
                  <FormContainer>
                    <FieldWrapper>
                      <FieldHeading>Interviewer Name</FieldHeading>
                      <TextInput
                        className="inputwrapper"
                        type="text"
                        placeholder=" Add Interviewer Name"
                        name="name"
                        control={control}
                      />
                      <ErrorWrapper>
                        <ErrorMessage>{errors?.name && errors?.name?.message}</ErrorMessage>
                      </ErrorWrapper>
                    </FieldWrapper>
                    <FieldWrapper>
                      <FieldHeading>Designation</FieldHeading>
                      <JobsContentSub1>
                        <SelectBox
                          defaultValue="Select Designation"
                          data={designation}
                          control={control}
                          setData={setData}
                        />
                        <ErrorWrapper>
                          <ErrorMessage>{errors?.designation && errors?.designation?.message}</ErrorMessage>
                        </ErrorWrapper>
                      </JobsContentSub1>
                    </FieldWrapper>
                    <FieldWrapper>
                      <FieldHeading>Mobile Number</FieldHeading>
                      <InputWrapper>
                        <JobsContentSub2>
                          <SelectWrapper>
                            <SelectBox defaultValue="+91" control={control} data={CountryData} setData={setPasscode} />
                          </SelectWrapper>
                        </JobsContentSub2>

                        <TextInput
                          className="inputwrapper"
                          type="number"
                          placeholder=" Add Mobile Number"
                          name="phone"
                          control={control}
                        />
                        <ErrorWrapper>
                          <ErrorMessage>{errors?.phone && errors?.phone?.message}</ErrorMessage>
                        </ErrorWrapper>
                      </InputWrapper>
                    </FieldWrapper>
                  </FormContainer>
                </InformationWrapper>
                <InformationContainer>
                  <FieldWrapper>
                    <FieldHeading>Mail-Id</FieldHeading>
                    <TextInput
                      className="inputwrapper"
                      type="text"
                      control={control}
                      placeholder=" Add Mail-Id"
                      name="email"
                    />
                    <ErrorWrapper>
                      <ErrorMessage>{errors?.email && errors?.email?.message}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <FieldHeading>Job Type</FieldHeading>
                    <JobsContentSub2>
                      <SelectBox defaultValue="Select Job Type" control={control} data={jobData} setData={setData1} />
                    </JobsContentSub2>
                    <ErrorWrapper>
                      <ErrorMessage>{errors?.jobType && errors?.jobType?.message}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <FieldHeading>Experience</FieldHeading>
                    <Input
                      placeholder="Add Experience "
                      className="inputClass"
                      type="number"
                      {...register('experience')}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        e.preventDefault()
                        setStateValue(parseInt(e.currentTarget.value))
                        validateExperience()
                      }}
                    />

                    <ErrorWrapper>
                      <ErrorMessage>{errors?.experience && errors?.experience?.message}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                </InformationContainer>
                <SubmitWrapper>
                  <ButtonWrapper>
                    <Button label="Cancel" type="button" variant="cancel" onClick={handleData} />
                    <SaveButton type="submit">Add Interviewer</SaveButton>
                  </ButtonWrapper>
                </SubmitWrapper>
              </FormWrapper>
            </form>
          </Wrapper>
        </MainSection>
      </MainWrapper>
      {errorModal && <ErrorModal data={AddInterviewerRoute.path} />}
    </>
  )
}

export default JobInterviewer
