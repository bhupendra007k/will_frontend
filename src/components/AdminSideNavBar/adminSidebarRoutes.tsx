import AdminDashboard from 'assets/images/adminDashboard.png'
import Jobs from 'assets/images/job.png'
import Recruiters from 'assets/images/recruiters.png'
import Reports from 'assets/images/reports.png'
import Interviewer from 'assets/images/interviewer.png'
import OnBoarding from 'assets/images/onBoarding.png'
const jobsData = [
  {
    src: AdminDashboard,
    heading: 'Dashboard',
    href: '/admindash',
  },
  {
    src: Jobs,
    heading: 'Jobs',
    href: '/adminjob',
  },
  {
    src: Recruiters,
    heading: 'Recruiters',
    href: '/recuriters',
  },
  {
    src: Interviewer,
    heading: 'Interviewer',
    href: '/interviewers',
  },
  {
    src: OnBoarding,
    heading: 'Pre-OnBoarding',
    href: '/preonboarding',
  },
  {
    src: Reports,
    heading: 'Reports',
    href: '/reports',
  },
]

export { jobsData }
