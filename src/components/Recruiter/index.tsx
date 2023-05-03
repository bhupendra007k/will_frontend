import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import usePost from 'hooks/usePost'
import { yupResolver } from '@hookform/resolvers/yup'

import AdminSideNavbar from 'components/AdminSideNavBar'
import Taskbar from 'components/Taskbar'
import { CountryData } from 'components/SelectBox/countryData'
import TextInput from 'components/RecruiterInput'
import { Schema } from 'components/Utils/recruiterSchema'
import Button from 'components/Button'
import SelectBox from 'components/SelectBox'
import { designation } from 'components/SelectBox/designation'
import { jobType } from 'components/SelectBox/jobType'
import Loader from 'components/Loader'

import { RecuritersRoute } from 'constants/routes'
import { ADMIN_INTERVIEWER } from 'constants/apiRoutes'

import Upload from 'assets/images/uploads.png'

import {
  MainWrapper,
  SideBar,
  MainSection,
  Section,
  HeadingWrapper,
  Wrapper,
  TextHeading,
  TextContent,
  InformationWrapper,
  ImageWrapper,
  TextWrapper,
  FormContainer,
  FieldWrapper,
  FieldHeading,
  InputWrapper,
  InformationContainer,
  SkillWrapper,
  SubmitWrapper,
  ButtonWrapper,
  SaveButton,
  InputOut,
  Image,
} from 'styles/Recruiter'
import { ErrorWrapper, ErrorMessage } from 'styles/FormElements'
import { JobsContentSub1, JobsContentSub2, SelectWrapper } from 'styles/JobPost'
import { StaticImage } from 'styles/AddInterview'

interface IFormInputs {
  name: string
  designation: string
  phone: number
  email: string
  jobType: string
  experience: number
  profilePicture: string
  code: string
}

const Recruiter = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })
  const { mutateAsync, isLoading } = usePost()
  const fileList = watch('profilePicture')
  const imageUrl = fileList && fileList[0] ? URL.createObjectURL(fileList[0] as any) : ''

  const addRecruiter = async (values: IFormInputs) => {
    const payload = { ...values, profilePicture: fileList[0], empType: 'RECRUITER' }
    const response = await mutateAsync({ url: ADMIN_INTERVIEWER, payload, token: true, ifFormData: true })

    if (response?.success) {
      navigate(RecuritersRoute.path)
    }
  }
  const [allDatas, setData] = useState('')
  const [jobTypeData, setJobType] = useState('')

  useEffect(() => {
    if (allDatas !== '') setValue('designation', allDatas, { shouldValidate: true })
  }, [allDatas])

  useEffect(() => {
    if (jobTypeData !== '') setValue('jobType', jobTypeData, { shouldValidate: true })
  }, [jobTypeData])

  const goTO = () => {
    navigate(RecuritersRoute.path)
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
            <HeadingWrapper>Add New Recruiter</HeadingWrapper>
          </Section>
          <Wrapper>
            <form onSubmit={handleSubmit(addRecruiter)}>
              <InformationWrapper>
                <ImageWrapper>
                  <TextWrapper>
                    <FieldWrapper>
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

                      <InputOut type="file" className="test" {...register('profilePicture')} />
                      <ErrorWrapper>
                        <ErrorMessage>{errors?.profilePicture && errors?.profilePicture?.message}</ErrorMessage>
                      </ErrorWrapper>
                    </FieldWrapper>
                  </TextWrapper>
                </ImageWrapper>
                <FormContainer>
                  <FieldWrapper>
                    <FieldHeading>Recruiter Name</FieldHeading>
                    <TextInput
                      className="inputwrapper"
                      type="text"
                      placeholder=" Add Recruiter Name"
                      name="name"
                      control={control}
                    />
                    <ErrorWrapper>
                      <ErrorMessage>{errors.name && <div>{errors.name.message}</div>}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <FieldHeading>Designation</FieldHeading>
                    <JobsContentSub1>
                      <SelectBox
                        defaultValue="Enter your designation"
                        data={designation}
                        control={control}
                        setData={setData}
                      />
                    </JobsContentSub1>
                    <ErrorWrapper>
                      <ErrorMessage>{errors.designation && <div>{errors.designation.message}</div>}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                  <FieldWrapper>
                    <FieldHeading>Mobile Number</FieldHeading>
                    <InputWrapper>
                      <JobsContentSub2>
                        <SelectWrapper>
                          <SelectBox defaultValue="+91" data={CountryData} setData={setData} control={control} />
                        </SelectWrapper>
                      </JobsContentSub2>

                      <TextInput
                        className="inputwrapper"
                        type="text"
                        placeholder="Add Mobile Number"
                        name="phone"
                        control={control}
                      />
                    </InputWrapper>
                    <ErrorWrapper>
                      <ErrorMessage>{errors.phone && <div>{errors.phone.message}</div>}</ErrorMessage>
                    </ErrorWrapper>
                  </FieldWrapper>
                </FormContainer>
              </InformationWrapper>
              <InformationContainer>
                <FieldWrapper>
                  <FieldHeading>Mail-Id</FieldHeading>
                  <TextInput
                    className="inputwrapper"
                    type="text"
                    placeholder=" Add Mail-Id"
                    name="email"
                    control={control}
                  />
                  <ErrorWrapper>
                    <ErrorMessage>{errors.email && <div>{errors.email.message}</div>}</ErrorMessage>
                  </ErrorWrapper>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>Job Type</FieldHeading>
                  <JobsContentSub1>
                    <SelectBox defaultValue="Enter your value" data={jobType} control={control} setData={setJobType} />
                  </JobsContentSub1>
                  <ErrorWrapper>
                    <ErrorMessage>{errors.jobType && <div>{errors.jobType.message}</div>}</ErrorMessage>
                  </ErrorWrapper>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>Experience</FieldHeading>
                  <TextInput
                    className="inputwrapper"
                    type="text"
                    placeholder=" Add Experience (in years)"
                    name="experience"
                    control={control}
                  />
                  <ErrorWrapper>
                    <ErrorMessage>{errors.experience && <div>{errors.experience.message}</div>}</ErrorMessage>
                  </ErrorWrapper>
                </FieldWrapper>
              </InformationContainer>
              <SkillWrapper>
                <FieldWrapper>
                  <FieldHeading>Skills</FieldHeading>
                  <TextInput className="inputwrapper" type="text" placeholder=" Add Skills" control={control} />
                </FieldWrapper>
              </SkillWrapper>
              <SubmitWrapper>
                <ButtonWrapper>
                  <Button type="button" label="Cancel" variant="cancel" onClick={goTO} />
                  <SaveButton type="submit">Add Recruiter</SaveButton>
                </ButtonWrapper>
              </SubmitWrapper>
            </form>
          </Wrapper>
        </MainSection>
      </MainWrapper>
    </>
  )
}

export default Recruiter
