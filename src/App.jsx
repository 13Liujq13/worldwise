import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import HomePage from './pages/homePage';
import PageNotFound from './pages/pageNotFound';
import Pricing from './pages/Pricing';
import AppLayout from './pages/appLayout';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
