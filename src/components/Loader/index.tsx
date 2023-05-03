import React from 'react'
import LoaderAnimation from 'assets/gif/loader.gif'

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      }}
    >
      <img src={LoaderAnimation} alt="loader" style={{ width: '80px', zIndex: 99999 }} />
    </div>
  )
}

export default Loader
