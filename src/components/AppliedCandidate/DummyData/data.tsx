import { ReactElement } from 'react'
import { TableHeader } from 'styles/Table'
import { ProfilePicture, UserName, Text } from 'styles/CandidateData/GridView'
import RatingStar from 'assets/svg/RatingIcon'
import img1 from 'assets/images/person1.png'
import img2 from 'assets/images/person2.png'
import img3 from 'assets/images/person3.png'
import img4 from 'assets/images/PersonEight.png'
import img5 from 'assets/images/PersonSeven.png'
import img6 from 'assets/images/PersonSix.png'
import img7 from 'assets/images/PersonEleven.png'
import img8 from 'assets/images/PersonTwo.png'
import img9 from 'assets/images/PersonThree.png'
import img10 from 'assets/images/PersonTen.png'
import Pdf from 'assets/images/pdfLogo.png'

export interface IData {
  id: number
  rating?: ReactElement
  appliedDate?: string
  mainStage?: string
  days?: number
  recruiter?: ReactElement
  interviewer?: ReactElement
  profile?: ReactElement
  subStage?: string
  attachments?: ReactElement
}

const TotalData: IData[] = [
  {
    id: 1,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - -</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 2,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Johnny Carter</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - - </UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>John Doe</UserName>
      </TableHeader>
    ),
  },
  {
    id: 3,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 1,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Robert Stinkson</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - - </UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 4,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - - </UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 5,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - - </UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 6,
    rating: <RatingStar />,
    mainStage: 'Sourced',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <UserName>- - - - - </UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 7,
    rating: <RatingStar />,
    mainStage: 'Screening',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 8,
    rating: <RatingStar />,
    mainStage: 'Screening',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 9,
    rating: <RatingStar />,
    mainStage: 'Screening',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 10,
    rating: <RatingStar />,
    mainStage: 'Screening',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 11,
    rating: <RatingStar />,
    mainStage: 'Technical Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 12,
    rating: <RatingStar />,
    mainStage: 'Technical Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 13,
    rating: <RatingStar />,
    mainStage: 'Technical Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 14,
    rating: <RatingStar />,
    mainStage: 'Technical Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 15,
    rating: <RatingStar />,
    mainStage: 'Manager',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 16,
    rating: <RatingStar />,
    mainStage: 'Manager',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 17,
    rating: <RatingStar />,
    mainStage: 'Manager',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 18,
    rating: <RatingStar />,
    mainStage: 'Manager',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 19,
    rating: <RatingStar />,
    mainStage: 'HR Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 20,
    rating: <RatingStar />,
    mainStage: 'HR Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 21,
    rating: <RatingStar />,
    mainStage: 'HR Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 22,
    rating: <RatingStar />,
    mainStage: 'HR Round',
    appliedDate: '25-may-2022',
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 23,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Start',
    appliedDate: '25-may-2022',
    attachments: <UserName>- - - - - </UserName>,
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 24,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Start',
    appliedDate: '25-may-2022',
    attachments: <UserName>- - - - - </UserName>,
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 25,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Verify Info',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 26,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Release Offer',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 27,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Collect Info',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 28,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Collect Info',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img5} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img1} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img10} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 29,
    rating: <RatingStar />,
    mainStage: 'Pre Onboarding',
    subStage: 'Offer Accepted',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 30,
    rating: <RatingStar />,
    mainStage: 'Hired',
    subStage: 'Hired',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img8} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 31,
    rating: <RatingStar />,
    mainStage: 'Hired',
    subStage: 'Hired',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img3} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 32,
    rating: <RatingStar />,
    mainStage: 'Hired',
    subStage: 'Hired',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img2} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img7} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img9} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
  {
    id: 33,
    rating: <RatingStar />,
    mainStage: 'Hired',
    subStage: 'Hired',
    appliedDate: '25-may-2022',
    attachments: (
      <TableHeader>
        <ProfilePicture src={Pdf} />
        <Text> 5 Files</Text>
      </TableHeader>
    ),
    days: 5,
    recruiter: (
      <TableHeader>
        <ProfilePicture src={img4} />
        <UserName>Joseph William</UserName>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Remsey Diablo</UserName>
      </TableHeader>
    ),
    profile: (
      <TableHeader>
        <ProfilePicture src={img6} />
        <UserName>Ray Mint</UserName>
      </TableHeader>
    ),
  },
]

export { TotalData }
