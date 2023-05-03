import React from 'react'

import Information from 'views/Dashboard'
import PrivateLayout from 'components/Layouts/privateLayout'

const Dashboard = () => {
  return (
    <PrivateLayout>
      <Information />
    </PrivateLayout>
  )
}

export default Dashboard
