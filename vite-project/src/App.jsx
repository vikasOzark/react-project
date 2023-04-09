import React, { useState } from 'react'
import { Base } from './components/Base'
import { AuthProvider } from 'react-auth-kit'
import {BrowserRouter} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AuthProvider authType={'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname} 
                  cookieSecure>
          <BrowserRouter>
            <Base />
          </BrowserRouter>
        </ AuthProvider>
      
    </>
  )
}

export default App
