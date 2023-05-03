import React, { useRef } from 'react'
import SearchSection from 'views/HomePage/searchSection'
import JobSection from 'views/HomePage/jobSection'
import CompanySection from 'views/HomePage/company'
import Customer from 'views/HomePage/customerReviewScreen'
import AvailableLocations from 'views/HomePage/availableLocations'
import Subsform from 'components/Forms/SubsForm'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Homepage = () => {
  const home = useRef<HTMLDivElement>(null)
  const jobs = useRef<HTMLDivElement>(null)
  const companies = useRef<HTMLDivElement>(null)
  const subsform = useRef<HTMLDivElement>(null)
  const customer = useRef<HTMLDivElement>(null)

  function scrollView(refName: string) {
    switch (refName) {
      case 'Home':
        return home?.current?.scrollIntoView({ behavior: 'smooth' })
      case 'Jobs':
        return jobs?.current?.scrollIntoView({ behavior: 'smooth' })
      case 'Companies':
        return companies?.current?.scrollIntoView({ behavior: 'smooth' })
      case 'About':
        return subsform?.current?.scrollIntoView({ behavior: 'smooth' })
      case 'Feedback':
        return customer?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Navbar scrollView={(refName: string) => scrollView(refName)} />
      <div>
        <SearchSection homeRef={home} />
      </div>
      <JobSection jobRef={jobs} />
      <CompanySection companyRef={companies} />
      <AvailableLocations />
      <Customer customerRef={customer} />
      <Subsform subsRef={subsform} />
      <Footer />
    </div>
  )
}

export default Homepage
