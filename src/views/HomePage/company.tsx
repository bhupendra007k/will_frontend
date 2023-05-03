import React from 'react'
import { Main, BackgroungImg, ImagesCompany, Jobs, JobsText, Box2, CompanyIcon } from 'styles/HomePage/companies'
import tcs from 'assets/images/tcs.png'
import infoysis from 'assets/images/infoysis.png'
import wipro from 'assets/images/wipro.png'
import hp from 'assets/images/hp.png'
import hcl from 'assets/images/hcl.png'
import tech from 'assets/images/tech.png'
import ibm from 'assets/images/ibm.png'
import cisco from 'assets/images/cisco.png'
import microsoft from 'assets/images/microsoft.png'
import igate from 'assets/images/igate.png'
import intel from 'assets/images/intel.png'
import nokia from 'assets/images/nokia.png'
import dell from 'assets/images/dell.png'
import { ButtonWrapper } from 'styles/Navbar'
import Button from 'components/Button'
interface ICompanyProps {
  companyRef: React.RefObject<HTMLDivElement>
}
const Companies = ({ companyRef }: ICompanyProps) => {
  const data = [
    {
      src: tcs,
    },
    {
      src: infoysis,
    },
    {
      src: wipro,
    },
    {
      src: hp,
    },
    {
      src: hcl,
    },
    {
      src: tech,
    },
    {
      src: ibm,
    },
    {
      src: cisco,
    },
    {
      src: microsoft,
    },
    {
      src: igate,
    },
    {
      src: intel,
    },
    {
      src: nokia,
    },
    {
      src: dell,
    },
  ]

  return (
    <Main ref={companyRef}>
      <BackgroungImg>
        <Jobs>Jobs Available in 50+ Companies</Jobs>

        <JobsText>
          There are kinds of companies with different kinds of jobs. Apply the job and be the part of an extraordinary
          team. You can choose as you like and apply whenever and wherever you want.
        </JobsText>

        <ImagesCompany>
          {data.map((item, index) => (
            <Box2 key={index}>
              <CompanyIcon src={item.src} alt="Company Images" />
            </Box2>
          ))}
        </ImagesCompany>
        <ButtonWrapper>
          <Button label="View More" />
        </ButtonWrapper>
      </BackgroungImg>
    </Main>
  )
}

export default Companies
