import React from 'react'

interface ILoaderContext {
  loader: boolean
  setLoader: any
}

const defaultState = {
  loader: false,
  setLoader: () => null,
}

const LoaderContext = React.createContext<ILoaderContext>(defaultState)

export { LoaderContext }
