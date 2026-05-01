import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Component/nav/Nav'
import LoginDashboard from './Component/login/LoginDashboard'
import Card from './Component/cards/Card'
import { BrowserRouter } from 'react-router-dom'
import DownloadAadhar from './Component/cards/card-pages/DownloadAadhar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <LoginDashboard /> */}
        {/* <Card /> */}
        <Routes>
          <Route path="/" element={
            <>
              <LoginDashboard /> 
              <Card />
            </>
          } />
          <Route path="/download-aadhar" element={<DownloadAadhar />} />
          <Route path="/retrieve-aadhaar" element={<DownloadAadhar />} />
          <Route path="/verify-email" element={<DownloadAadhar />} />
          <Route path="/death-report" element={<DownloadAadhar />} />
          <Route path="/document-update" element={<DownloadAadhar />} />
          <Route path="/vid-generator" element={<DownloadAadhar />} />
          <Route path="/lock-unlock" element={<DownloadAadhar />} />
          <Route path="/bank-seeding" element={<DownloadAadhar />} />
          <Route path="/order-pvc" element={<DownloadAadhar />} />
          <Route path="/enrollment-update" element={<DownloadAadhar />} />
          <Route path="/deactivation-status" element={<DownloadAadhar />} />
          <Route path="/locate-enrollment" element={<DownloadAadhar />} />
          <Route path="/book-appointment" element={<DownloadAadhar />} />
          <Route path="/check-validity" element={<DownloadAadhar />} />
          <Route path="/grievance-feedback" element={<DownloadAadhar />} />
          <Route path="/check-grievance" element={<DownloadAadhar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
