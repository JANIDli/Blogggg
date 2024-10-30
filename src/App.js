import './Style.css';
import Home from './Page/Home';
import AboutPage from './Page/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './Page/ServicePage';
import Registration from './Page/Registration';
import { ThemeProvider } from './ThemeContext';
import BlogPost from './Componant/BlogPost'; // Ensure the path is correct
import SearchFilter from './Page/Blog';
import Store from './Componant/Store';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<AboutPage />} />
          <Route exact path='service' element={<ServicePage />} />
          <Route exact path='register' element={<Registration />} />
          <Route exact path='blog' element={<SearchFilter />} /> {/* Updated path */}
          <Route exact path='blog/:id' element={<BlogPost />} /> {/* Dynamic route for blog post */}
          <Route exact path='store' element={<Store />} /> {/* Dynamic route for blog post */}

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
