import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/Mainlayout';
// import HeroSection from '../components/sections/HerSection';
// import Home from '../components/home/Home';
// import About from '../components/page/about-us/AboutPage';
// import Services from '../components/page/service/Service';
// import ServiceDetails from '../components/page/service/ServiceDetails';
// import Products from '../components/page/product/Products';
// import ProductDetails from '../components/page/product/ProductDetails';
// import Blog from '../components/page/blog/Blog';
// import BlogDetails from '../components/page/blog/BlogDetails';
// import Contact from '../components/page/contact/Contact';
// import Error404 from '../components/common/NotFound';

const AppRoutes = () => {
  return (
    <Router>
    <MainLayout>
     {/* <HeroSection /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes> */}
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
