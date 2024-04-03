import { Outlet } from 'react-router-dom'

import './App.css'
import "./Box.css"
import "./About.css"
import "./AboutPage.css"

import { Auth0Provider } from '@auth0/auth0-react';

import Navbar from './components/Navbar'

function App() {


  return (
    <>

    
    <Auth0Provider
    domain="dev-lq6k4skl7m80qv8e.us.auth0.com"
    clientId="Gi2bndXdODokshx8Pebuxw4PfTC9FTuM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Navbar/>
    <Outlet/>
    </Auth0Provider>
    
    </>
  )
}

export default App
