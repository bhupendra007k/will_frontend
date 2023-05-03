import React from 'react'
import Phone from 'assets/images/phone.png'
import Email from 'assets/images/email.png'

const ApplicationPageContact = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div>
          <img style={{ maxWidth: '29px' }} src={Phone} />
        </div>
        <div>
          <img style={{ maxWidth: '29px' }} src={Email} />
        </div>
      </div>
    </>
  )
}

export default ApplicationPageContact
