import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ErrorPg from './pages/ErrorPg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
