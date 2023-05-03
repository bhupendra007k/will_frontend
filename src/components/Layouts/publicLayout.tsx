import React from 'react'
import Footer from 'components/Footer'

const PublicLayout = ({ children }: any) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default PublicLayout
