import { useState } from 'react'
import CustomRouter from 'components/Routes/route'
import { QueryClient, QueryClientProvider } from 'react-query'
import Loader from 'components/Loader'
import { LoaderContext } from 'context/loader'
import './App.css'
import 'antd/dist/antd.min.css'

const queryClient = new QueryClient()

const App = () => {
  const [loader, setLoader] = useState(false)

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {loader && <Loader />}
        <LoaderContext.Provider value={{ loader, setLoader }}>
          <CustomRouter />
        </LoaderContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
