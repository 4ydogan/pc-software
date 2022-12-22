import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import News from './components/News';

function App() {

  const _redirectToHome = () => {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing-plans" element={<Pricing />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news:id" element={<News />} />
          {/* <Route exact path="/categories" element={<CategoriesPage />} />
          <Route exact path="/authors" element={<AuthorsPage />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/categories/:category_id" element={<SingleCategory />} />
          <Route path="/authors/:id" element={<SingleAuthor />} /> */}
          <Route path="*" element={<div> Sayfa Bulunamadı </div>} />

          <Route render={_redirectToHome} />
        </Routes>
      </BrowserRouter >

      <Footer />
    </div>
  );
}

export default App;
