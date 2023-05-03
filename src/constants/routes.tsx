/* eslint-disable @typescript-eslint/no-unused-vars */
import Homepage from 'pages/homePage'
import ContactPage from 'pages/contactUs'
import RequirementPage from 'pages/requirement'
import Login from 'pages/login'
import Jobs from 'pages/jobs'
import Dashboard from 'pages/dashboard'
import Signup from 'pages/signup'
import SearchJob from 'pages/searchJob'
import Candidate from 'pages/candidate'
import Application from 'pages/application'
import ForgotPassword from 'pages/forgotPassword'
import ResetPassword from 'pages/resetPassword'
import FeedbackPage from 'pages/feedbackPage'
import Message from 'pages/message'
import MeetingRoom from 'pages/meetingRoom'
import UploadCV from 'pages/UploadCV'
import Statistics from 'pages/statistics'
import Feedback from 'pages/feedback'
import JobDetails from 'components/JobDetails/index'
import JobPost from 'components/JobPost'
import Recruiter from 'components/Recruiter'
import Candidates from 'components/AppliedCandidate'
import AdminDashboard from 'views/Admin/dashboard'
import Job from 'views/Admin/job'
import Recuriters from 'views/Admin/recuriters'
import RecruiterInformation from 'components/Recruiters'
import Interviewer from 'components/InterviewerPortal'
import CandidatesTab from 'components/CandidateTab'
import PreOnBoarding from 'views/Admin/preOnBoarding'
import JobInterviewer from 'components/AddInterviewer'
import Report from 'components/AdminReports'

export const ApplicationRoute = {
  component: Application,
  path: '/application',
  exact: true,
  restricted: true,
}

export const ContactRoute = {
  component: ContactPage,
  path: '/contact',
  exact: true,
  restricted: false,
}
export const DashboardRoute = {
  component: Dashboard,
  path: '/dashboard',
  exact: false,
  restricted: false,
}
export const FeebackRoute = {
  component: FeedbackPage,
  path: '/feedback',
  exact: true,
  restricted: true,
}
export const ForgotPasswordRoute = {
  component: ForgotPassword,
  path: '/forgotPassword',
  exact: true,
  restricted: false,
}
export const HomepageRoute = {
  component: Homepage,
  path: '/',
  exact: true,
  restricted: false,
}
export const JobsRoute = {
  component: Jobs,
  path: '/jobs',
  exact: true,
  restricted: false,
}
export const LoginRoute = {
  component: Login,
  path: '/login',
  exact: true,
  restricted: false,
}
export const ProfileRoute = {
  component: Candidate,
  path: '/candidateProfile',
  exact: true,
  restricted: false,
}
export const RequirementRoute = {
  component: RequirementPage,
  path: '/requirements',
  exact: true,
  restricted: false,
}
export const SignupRoute = {
  component: Signup,
  path: '/signup',
  exact: true,
  restricted: false,
}
export const SearchJobRoute = {
  component: SearchJob,
  path: '/searchjob',
  exact: true,
  restricted: true,
}
export const RESETPasswordRoute = {
  component: ResetPassword,
  path: '/change-password',
  exact: true,
  restricted: false,
}
export const MessageRoute = {
  component: Message,
  path: '/message',
  exact: true,
  restricted: true,
}
export const MeetingRoute = {
  component: MeetingRoom,
  path: '/meeting',
  exact: true,
  restricted: true,
}
export const UploadCvRoute = {
  component: UploadCV,
  path: '/uploadcv',
  exact: true,
  restricted: true,
}
export const StatisticsRoute = {
  component: Statistics,
  path: '/statics',
  exact: true,
  restricted: true,
}
export const FeedbackRoute = {
  component: Feedback,
  path: '/feedback',
  exact: true,
  restricted: true,
}
export const AdminDashboardRoute = {
  component: AdminDashboard,
  path: '/admindash',
  exact: false,
  restricted: true,
}
export const AdminJobRoute = {
  component: Job,
  path: '/adminjob',
  exact: true,
  restricted: true,
}
export const JobDetailRoute = {
  component: JobDetails,
  path: '/job-details',
  exact: true,
  restricted: true,
}
export const JobRoute = {
  component: JobPost,
  path: '/postjob',
  exact: true,
  restricted: true,
}
export const AddRecriuterRoute = {
  component: Recruiter,
  path: '/addrecruiter',
  exact: true,
  restricted: true,
}
export const AppliedCandidateRoute = {
  component: Candidates,
  path: '/appliedcandidate',
  exact: true,
  restricted: true,
}
export const RecuritersRoute = {
  component: Recuriters,
  path: '/recuriters',
  exact: true,
  restricted: true,
}
export const RecriuterinfoRoute = {
  component: RecruiterInformation,
  path: '/adminrecriuter',
  exact: true,
  restricted: true,
}
export const InterviewerPortal = {
  component: Interviewer,
  path: '/interviewers',
  exact: true,
  restricted: true,
}
export const AddInterviewerRoute = {
  component: JobInterviewer,
  path: '/addInterviewer',
  exact: true,
  restricted: true,
}
export const CandiateListView = {
  component: CandidatesTab,
  path: '/candidatestab',
  exact: true,
  restricted: true,
}
export const PreOnBoardingPortal = {
  component: PreOnBoarding,
  path: '/preonboarding',
  exact: true,
  restricted: true,
}
export const ReportsRoute = {
  component: Report,
  path: '/reports',
  exact: true,
  restricted: true,
}

interface IRoute {
  component: () => JSX.Element
  path: string
  restricted: boolean
}

interface ICandidateRoute {
  component: () => JSX.Element
  path: string
  restricted: boolean
}

const ROUTES: IRoute[] = [
  CandiateListView,
  ContactRoute,
  ForgotPasswordRoute,
  HomepageRoute,
  JobsRoute,
  LoginRoute,
  SignupRoute,
  RESETPasswordRoute,
  MeetingRoute,
  AdminJobRoute,
  JobDetailRoute,
  JobRoute,
  AddInterviewerRoute,
  AddRecriuterRoute,
  AppliedCandidateRoute,
  AdminDashboardRoute,
  AdminJobRoute,
  InterviewerPortal,
  RecuritersRoute,
  PreOnBoardingPortal,
  ReportsRoute,
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const CANDIDATEROUTES: ICandidateRoute[] = [
  ApplicationRoute,
  DashboardRoute,
  FeebackRoute,
  ProfileRoute,
  RequirementRoute,
  SearchJobRoute,
  MessageRoute,
  UploadCvRoute,
  FeedbackRoute,
  StatisticsRoute,
]

export default ROUTES
