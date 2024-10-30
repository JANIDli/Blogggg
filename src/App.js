import './Style.css';
import Home from './Page/Home';
import AboutPage from './Page/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './Page/ServicePage';
import Registration from './Page/Registration';
import BlogList from './Page/BlogList';
import Blog from './Page/Blog';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider
import BlogPost from './Componant/BlogPost'


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<AboutPage />} />
          <Route exact path='service' element={<ServicePage />} />
          <Route exact path='register' element={<Registration />} />
          <Route exact path='Blog' element={<BlogList />} />
          <Route exact path='test' element={<Blog />} />
          <Route exact path='BlogP' element={<BlogPost />} />

        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
