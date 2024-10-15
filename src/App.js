import './Style.css';
import Home from './Page/Home';
import AboutPage from './Page/AboutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './Page/ServicePage';
import Registration from './Page/Registration';
import Blog from './Page/Blog';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='about' element={<AboutPage/>} />
      <Route exact path='service' element={<ServicePage/>} />
      <Route exact path='register' element={<Registration/>}></Route>
      <Route exact path='Blog' element={<Blog/>}></Route>

    </Routes>
  </Router>
  );
}

export default App;
