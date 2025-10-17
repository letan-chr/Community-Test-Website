import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "./assets/css/plugins/swiper.min.css";
// import "./assets/css/plugins/fontawesome-5.css";
// import "./assets/css/plugins/animate.min.css";
// import "./assets/css/plugins/unicons.css";
// import "./assets/css/vendor/bootstrap.min.css";
// import "./assets/css/style.css";
// import "./assets/scss/style.scss";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
