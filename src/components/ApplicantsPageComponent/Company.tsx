import React from 'react'
import TcsImg from 'assets/images/tcs.png'

const ApplicationPageCompany = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
        <div>
          <img style={{ maxWidth: '29px' }} src={TcsImg} />
        </div>
        <div>
          <h1 style={{ fontSize: '15px' }}>Mosciski Inc.</h1>
          <p style={{ fontSize: '10px', color: '#828282' }}>Creative Design Agency</p>
        </div>
      </div>
    </>
  )
}

export default ApplicationPageCompany
