import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useGet from 'hooks/useGet'
import { Select } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'components/CandidatePage/CandidateSchema/schema'
import TextInput from 'components/FormElements/textInput'
import SliderButton from 'components/Slider'
import SwitchButton from 'components/Switch'
import ProfileReport from 'components/CandidatePage/CandidateReport'
import CandidatePortfolio from 'components/CandidatePage/CandidatePortfolio'

import { ErrorMessage } from 'styles/FormElements'
import {
  Section,
  Container,
  Form,
  EditWrapper,
  EditProfile,
  ToggleWrapper,
  ButtonWrapper,
  CancelButton,
  SaveButton,
  FormWrapper,
  LineContainer,
  Line,
  Information,
  Label,
  Input,
  FormWrapperTwo,
  AboutContainer,
  Heading,
  Paragraph,
  Skills,
  Head,
  Para,
  LineTwo,
  ContainerTwo,
  LabelInner,
  Range,
  SliderValue,
  SliderHeading,
  Sliderwrapper,
  ImgMobile,
  MobileWrapper,
  EmailWrapper,
  ImgEmailOne,
  DropDown,
  SwitchWrapper,
  ImageWrapper,
  DataWrapper,
  AddressWrapper,
} from 'styles/Profile'
import { sliderData } from 'components/Slider/sliderData'
import Email from 'assets/images/emailTwo.png'
import Mobile from 'assets/images/mobile.png'

interface IFormInputs {
  email: string
  password: string
  firstname: string
  lastname: string
  username: string
  mobile: number
  confirmpassword: string
  city: string
  country: string
  address: string
}

interface Country {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}

const Profile = () => {
  const { Option } = Select
  const navigate = useNavigate()
  const [countries, setCountries] = useState<Country[]>([])
  const [cities, setCities] = useState<string[]>([])

  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number | null>()
  const { refetch: fetchCountries } = useGet({
    fetchCountry: 'fetch-countries',
    api: 'api/v0.1/countries',
    data: {
      onSuccess: (data: any) => onCountrySuccess(data.data),
    },
  })

  const onCountrySuccess = (countryData: Country[]) => {
    setCountries(countryData)
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })
  const onSubmit = (data: IFormInputs) => {
    console.log(JSON.stringify(data))
  }

  const onCountrySelect = (value: number) => setSelectedCountryIndex(value)

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    if (selectedCountryIndex || selectedCountryIndex === 0) setCities(countries[selectedCountryIndex].cities)
  }, [selectedCountryIndex])

  const cancelFunction = () => {
    navigate('/dashboard')
  }

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <EditWrapper>
            <EditProfile>Edit Profile</EditProfile>
            <ToggleWrapper>
              <div className="available">Available to hire?</div>
              <SwitchWrapper>
                <SwitchButton />
              </SwitchWrapper>
            </ToggleWrapper>
            <ButtonWrapper>
              <CancelButton onClick={cancelFunction}>Cancel</CancelButton>
              <SaveButton type="submit">Save Changes</SaveButton>
            </ButtonWrapper>
          </EditWrapper>
          <FormWrapper>
            <LineContainer>
              Generals
              <Line></Line>
            </LineContainer>
            <Information>
              <Label>
                <DataWrapper>
                  First Name
                  <div>
                    <TextInput type="text" name="firstname" control={control} />

                    <ErrorMessage>{errors.firstname && <p>{errors.firstname.message}</p>}</ErrorMessage>
                  </div>
                </DataWrapper>
              </Label>
              <Label>
                Middle Name
                <Input type="text" />
              </Label>
              <Label>
                <DataWrapper>
                  Last Name
                  <TextInput type="text" name="lastname" control={control} />
                  <ErrorMessage>{errors.lastname && <p>{errors.lastname.message}</p>}</ErrorMessage>
                </DataWrapper>
              </Label>
              <Label>
                <DataWrapper>
                  Username
                  <TextInput type="text" name="username" control={control} />
                  <ErrorMessage>{errors.username && <p>{errors.username.message}</p>}</ErrorMessage>
                </DataWrapper>
              </Label>
              <Label>
                Password
                <LabelInner className="password">
                  <TextInput name="password" control={control} />
                </LabelInner>
                <ErrorMessage>{errors.password && <p>{errors.password.message}</p>}</ErrorMessage>
              </Label>
              <Label className="label">
                Re-Enter Password
                <LabelInner className="password">
                  <TextInput name="confirmpassword" control={control} />
                </LabelInner>
                <ErrorMessage>{errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}</ErrorMessage>
              </Label>
            </Information>
          </FormWrapper>
          <LineContainer>
            CONTACT
            <Line></Line>
          </LineContainer>
          <FormWrapperTwo>
            <Information>
              <Label>
                <div>
                  Mobile no.
                  <MobileWrapper>
                    <ImageWrapper>
                      <ImgMobile src={Mobile} alt="man" />
                    </ImageWrapper>
                    <TextInput type="text" name="mobile" control={control} />
                  </MobileWrapper>
                  <ErrorMessage>{errors.mobile && <p>{errors.mobile.message}</p>}</ErrorMessage>
                </div>
              </Label>

              <Label>
                Email
                <div>
                  <EmailWrapper>
                    <ImageWrapper>
                      <ImgEmailOne src={Email} alt="man" />
                    </ImageWrapper>
                    <TextInput control={control} name="email" type="text" />
                  </EmailWrapper>
                  <ErrorMessage style={{ margin: 0 }}>{errors.email && <p>{errors.email.message}</p>}</ErrorMessage>
                </div>
              </Label>

              <Label>
                <AddressWrapper>
                  Address
                  <TextInput control={control} name="address" type="text" />
                  <ErrorMessage>{errors.address && <p>{errors.address.message}</p>}</ErrorMessage>
                </AddressWrapper>
              </Label>
              <Label>
                Country
                <div>
                  <DropDown>
                    <div style={{ border: 'none' }}>
                      <Select style={{ width: '260px' }} onSelect={onCountrySelect}>
                        {countries.map((item, index) => (
                          <Option key={index}>{item.country}</Option>
                        ))}
                      </Select>
                    </div>
                  </DropDown>
                  <ErrorMessage>{errors.city && <p>{errors.city.message}</p>}</ErrorMessage>
                </div>
              </Label>
              <Label>
                City
                <div>
                  <DropDown>
                    <div style={{ border: 'none' }}>
                      <Select defaultValue="" style={{ width: '260px' }}>
                        {cities.map((item, index) => (
                          <Option key={index}>{item}</Option>
                        ))}
                      </Select>
                    </div>
                  </DropDown>
                  <ErrorMessage>{errors.country && <p>{errors.country.message}</p>}</ErrorMessage>
                </div>
              </Label>
            </Information>
          </FormWrapperTwo>
          <AboutContainer>
            <LineContainer>
              About ME
              <Line></Line>
            </LineContainer>
          </AboutContainer>
          <Heading>Tell About You</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta su
          </Paragraph>
          <Skills>
            <Head>SKILLS</Head>
            <LineTwo></LineTwo>
            <Para>+Add New Skills</Para>
          </Skills>
          <Range>
            <SliderValue>
              {sliderData.map((e: any, index) => (
                <Sliderwrapper key={index}>
                  <SliderHeading>{e.heading}</SliderHeading>
                  <SliderButton className="slider_wrap" />
                </Sliderwrapper>
              ))}
            </SliderValue>
          </Range>
        </Form>
        <ContainerTwo>
          <ProfileReport />
          <CandidatePortfolio />
        </ContainerTwo>
      </Container>
    </Section>
  )
}

export default Profile
