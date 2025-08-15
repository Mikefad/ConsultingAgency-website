import { useState } from 'react'
import './App.css'
import Homedemopage from './homefolder/Homedemo.jsx'
import AboutUsPage from './sericefolder/Service.jsx';
import ServicesPage from './Blog.jsx';
import ContactPage from './contact.jsx';
import SolutionsPage from './solutions.jsx';
import SectorPage from './sector.jsx';
import InsightsPage from './insights.jsx';
import CareersPage from './careers.jsx';
import RegisterExpertPage from './registerexpert.jsx';
import BookSessionPage from './booksession.jsx';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Scrollingup from './Scrolling.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Scrollingup/>
      <Routes>
      <Route path="/" element={<Homedemopage/>} />
      <Route path="/solutions" element={<SolutionsPage/>} />
      <Route path="/sector" element={<SectorPage/>} />
      <Route path="/services" element={<AboutUsPage/>} />
      <Route path="/insights" element={<InsightsPage/>} />
      <Route path="/blog" element={<ServicesPage/>} />
      <Route path="/careers" element={<CareersPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/register-expert" element={<RegisterExpertPage/>} />
      <Route path="/book-session" element={<BookSessionPage/>} />
      </Routes>
    </>
  )
}

export default App
