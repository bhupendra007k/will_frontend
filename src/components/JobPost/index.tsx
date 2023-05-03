import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { Select } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import usePost from 'hooks/usePost'
import useGet from 'hooks/useGet'

import AdminSideNavbar from 'components/AdminSideNavBar'
import TextInput from 'components/RecruiterInput'
import Taskbar from 'components/Taskbar'
import Button from 'components/Button'
import SelectBox from 'components/SelectBox'
import { Schema } from 'components/Utils/jobPostSchema'
import ErrorModal from 'components/Modal/SuccessErrorModal/errormodal'
import { departmentData } from 'components/JobPost/jobData'
import { jobTypeData } from 'components/JobPost/jobData'

import { LoaderContext } from 'context/loader'

import { AdminDashboardRoute } from 'constants/routes'

import Image from 'assets/images/head.png'

import { ErrorMessage } from 'styles/FormElements'
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  CaretDownOutlined,
  UnorderedListOutlined,
  PaperClipOutlined,
} from '@ant-design/icons'
import {
  MainWrapper,
  SideBar,
  MainSection,
  Container,
  HeadingWrapper,
  Wrapper,
  JobWrapper,
  DescriptionWrapper,
  InputWrapper,
  StyleWrapper,
  StylingContainer,
  AlignmentContainer,
  ButlletsWrapper,
  HeadingStyleWrapper,
  FormWrapper,
  JobForm,
  FieldWrapper,
  FieldHeading,
  ExperienceWrapper,
  FieldText,
  TextArea,
  SalaryWrapper,
  SubmitWrapper,
  ButtonWrapper,
  SaveButton,
  JobsContentSub2,
  RangeWrapper,
} from 'styles/JobPost'

const { Option } = Select

interface IFormInput {
  title: string
  description: string
  department: string
  type: string
  location: string
  opening: any
  salaryRng: any
  experienceRng: any
  employeeId: number
  city: string
  salaryRngMin: number
  salaryRngMax: number
  minExperienceRng: number
  maxExperienceRng: number
}

const JobPost = () => {
  const [managerId, setManagerId] = useState(5)
  const [errorModal, setErrorModal] = useState(false)
  const [newPerson, setNewPerson] = useState([])
  const [selectBoxData, setData] = useState('')
  const [data1, setData1] = useState('')

  const { setLoader } = useContext(LoaderContext)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(Schema) })

  const { mutateAsync, isLoading } = usePost()

  useEffect(() => {
    if (selectBoxData !== '') {
      setValue('department', selectBoxData, { shouldValidate: true })
    }
  }, [selectBoxData])

  useEffect(() => {
    if (data1 !== '') {
      setValue('type', data1)
    }
  }, [data1])

  useEffect(() => {
    if (isLoading) setLoader(true)
    else setLoader(false)
  })

  const onSubmit = async (values: IFormInput) => {
    values.opening = parseInt(values.opening)
    values.employeeId = managerId

    try {
      const payload = {
        title: values.title,
        description: values.title,
        employeeId: values.employeeId,
        city: values.location,
        salaryRng: [values.salaryRngMin, values.salaryRngMax],
        type: [values.type],
        opening: values.opening,
        experienceRng: [values.minExperienceRng, values.maxExperienceRng],
        department: values.department,
      }

      await mutateAsync({
        url: '/create-job',
        payload: payload,
        token: true,
      })
    } catch (error) {
      setErrorModal(true)
    }
  }

  const [recuriter, setRecruiter] = useState('/search-recruiters?keywords')

  const { refetch, data } = useGet({ key: 'userDetails', url: recuriter, token: true })

  const changeHandler = (event: any) => {
    setRecruiter(`/search-recruiters?keyword=${event}`)

    refetch()
    setNewPerson(data?.data)
  }

  const dataHandler = (e: any) => {
    setManagerId(e)
  }

  return (
    <MainWrapper>
      <SideBar>
        <AdminSideNavbar />
      </SideBar>
      <MainSection>
        <Taskbar />
        <Container>
          <HeadingWrapper>Add New Job</HeadingWrapper>
        </Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper>
            <JobWrapper>
              <HeadingWrapper>Job Title</HeadingWrapper>

              <TextInput type="text" control={control} name="title" className="input" />
              <ErrorMessage>{errors.title && <div>{errors.title.message}</div>}</ErrorMessage>
            </JobWrapper>
            <DescriptionWrapper>
              <HeadingWrapper>Job Description</HeadingWrapper>
              <InputWrapper>
                <StyleWrapper>
                  <StylingContainer>
                    <BoldOutlined />
                    <UnderlineOutlined />
                    <ItalicOutlined />
                  </StylingContainer>
                  <AlignmentContainer>
                    <AlignLeftOutlined />
                    <CaretDownOutlined />
                  </AlignmentContainer>
                  <ButlletsWrapper>
                    <UnorderedListOutlined />
                    <CaretDownOutlined />
                  </ButlletsWrapper>
                  <HeadingStyleWrapper>
                    <img src={Image} alt="heading" />
                    <CaretDownOutlined />
                  </HeadingStyleWrapper>
                  <PaperClipOutlined />
                </StyleWrapper>
                <TextInput type="text" control={control} name="description" className="description" />
              </InputWrapper>
              <ErrorMessage>{errors.description && <div>{errors.description.message}</div>}</ErrorMessage>
            </DescriptionWrapper>
            <FormWrapper>
              <JobForm>
                <FieldWrapper>
                  <FieldHeading>Department</FieldHeading>
                  <JobsContentSub2>
                    <SelectBox
                      defaultValue="Select Designation"
                      data={departmentData}
                      control={control}
                      setData={setData}
                    />
                  </JobsContentSub2>
                  <ErrorMessage>{errors.department && <div>{errors.department.message}</div>}</ErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>Hiring Manager</FieldHeading>
                  <JobsContentSub2>
                    <Select
                      {...register('employeeId')}
                      showSearch
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onSearch={changeHandler}
                      onChange={dataHandler}
                    >
                      {newPerson?.length > 0
                        ? newPerson.map((e: any, index) => {
                            return (
                              <>
                                <Option value={e?.id} key={index}>
                                  {e?.name}
                                </Option>
                              </>
                            )
                          })
                        : null}
                    </Select>
                  </JobsContentSub2>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>Job Type</FieldHeading>
                  <JobsContentSub2>
                    <SelectBox defaultValue="Select Job Type" control={control} data={jobTypeData} setData={setData1} />
                  </JobsContentSub2>
                  <ErrorMessage>{errors.type && <div>{errors.type.message}</div>}</ErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>Location</FieldHeading>
                  <JobsContentSub2>
                    <TextInput type="text" control={control} name="location" placeholder="Location..." />
                  </JobsContentSub2>
                  <ErrorMessage>{errors.location && <div>{errors.location.message}</div>}</ErrorMessage>
                </FieldWrapper>
                <FieldWrapper>
                  <FieldHeading>No. Of Positions</FieldHeading>
                  <TextInput type="number" control={control} name="opening" />
                  <ErrorMessage>{errors.opening && <div>{errors.opening.message}</div>}</ErrorMessage>
                </FieldWrapper>
              </JobForm>
              <ExperienceWrapper>
                <FieldHeading>Experience</FieldHeading>
                <FieldText>
                  <TextInput type="number" name="minExperienceRng" control={control} placeholder="Min Experience" />

                  <TextArea>to</TextArea>
                  <TextInput type="number" name="maxExperienceRng" control={control} placeholder="Max Experience" />
                  <TextArea>Years</TextArea>
                </FieldText>
                <RangeWrapper>
                  <ErrorMessage>{errors.minExperienceRng && <div>{errors.minExperienceRng.message}</div>}</ErrorMessage>
                  <ErrorMessage>{errors.maxExperienceRng && <div>{errors.maxExperienceRng.message}</div>}</ErrorMessage>
                </RangeWrapper>
              </ExperienceWrapper>
              <SalaryWrapper>
                <FieldHeading>Annual Salary</FieldHeading>
                <FieldText>
                  <TextInput type="number" placeholder="Min Salary" control={control} name="salaryRngMin" />

                  <TextArea>to</TextArea>
                  <TextInput type="number" placeholder="Max Salary" control={control} name="salaryRngMax" />
                  <TextArea>Lacs</TextArea>
                </FieldText>
                <RangeWrapper>
                  <ErrorMessage>{errors.salaryRngMin && <div>{errors.salaryRngMin.message}</div>}</ErrorMessage>
                  <ErrorMessage>{errors.salaryRngMax && <div>{errors.salaryRngMax.message}</div>}</ErrorMessage>
                </RangeWrapper>
              </SalaryWrapper>
            </FormWrapper>
            <SubmitWrapper>
              <ButtonWrapper>
                <Button
                  type="submit"
                  label="Cancel"
                  variant="cancel"
                  handleClick={() => navigate(AdminDashboardRoute.path)}
                ></Button>
                <SaveButton>Save & Next</SaveButton>
              </ButtonWrapper>
            </SubmitWrapper>
          </Wrapper>
        </form>
        {errorModal && <ErrorModal />}
      </MainSection>
    </MainWrapper>
  )
}

export default JobPost
