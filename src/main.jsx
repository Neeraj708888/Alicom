
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ Font Awesome
import 'bootstrap-icons/font/bootstrap-icons.css'; // ✅ Bootstrap Icons
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JS (with Popper)
import 'hamburgers/dist/hamburgers.min.css';  // ✅ Bootstrap Hamburgers
import { BrowserRouter } from 'react-router-dom';
import './index.css'; 
import App from './App.jsx';



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <App />
  </BrowserRouter>,
)
