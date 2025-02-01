
import {BrowserRouter , Route, Routes , Navigate} from 'react-router-dom'
import './App.css'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import User from './component/User';
import Page404 from './component/Page404';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={ < Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
