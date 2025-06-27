import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPages from "./pages/AboutPage"

import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import CoursesPage from "./pages/CoursesPages"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"
import { useState } from "react"

// import './styles/Pages.css'


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
   <>
   <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aditya Tanaji Nikam"
          studentPhotoUrl="/images/Aditya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPages/>}/>
      <Route path="/courses" element={<CoursesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
    </Routes>
    <ChatbotComponent/>
    
    

    
   
    
   </Router>
   </>
  )
}

export default App;