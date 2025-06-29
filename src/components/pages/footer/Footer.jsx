import React from 'react';

const Footer = ({isSidebarOpen}) => {
  return (
    <div className="app-wrapper-footer">
      <div className="app-footer">
        <div className="app-footer-inner flex flex-col sm:flex-row justify-between items-center p-4 border-t text-sm text-gray-600">
          <div className='footer-text'>
            © 2025 All rights reserved by <strong>RazinSoft</strong>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <i className="bi bi-telephone"></i>
            <span>+8801714231625</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <i className="fa-solid fa-envelope"></i>
            <span>razinsoftltd@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
