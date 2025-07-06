// src/Sidebar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../header/Logout';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleFullScreen = () => {
    const elem = document.body;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  // Sidebar Logout Handle
  const handleLogout = () => {
        console.log("User logged out");
        navigate('/admin/logout');
    };

    const handleCancel = () => {
        console.log("Logout canceled");
        setShowLogoutModal(false);
    };

  return (
    <div className= 'app-sidebar'>
      <div className="scrollbar-sidebar">
        <div className="branding-logo">
          <NavLink to="/">
            <img
              src="https://www.nickimacfarlane.com/wp-content/themes/nickimacfarlane-2014/images/logo.png"
              alt="logo"
              loading="lazy"
            />
          </NavLink>
        </div>
        <div className="app-sidebar-inner">
          <ul className="vertical-nav-menu metismenu">
            <li>
              <NavLink className="menu" to="/" activeclassname='active'>
                <span>
                  <i className="fa-solid fa-house menu-icon"></i>
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">PROMOTION MANAGEMENT</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/banners" activeclassname='active'>
                <span>
                  <i className="fa-solid fa-image menu-icon"></i>
                  Banner
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/advertise" activeclassname='active'>
                <span>
                  <i className="fa-solid fa-photo-film menu-icon"></i>
                  Ads
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/coupons" activeclassname='active'>
                <span>
                  <i className="fa-solid fa-ticket menu-icon"></i>
                  Coupon
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/customer-notifications" activeclassname='active'>
                <span>
                  <i className="fa-solid fa-bell menu-icon"></i>
                  Notifications
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">ORDER MANAGEMENT</span>
            </li>

            <li>
              <a className="menu" onClick={() => toggleMenu('ordersMenu')}>
                <span>
                  <i className="fa-solid fa-cart-shopping menu-icon"></i>
                  All Orders
                </span>
                <img src="https://demo.alicom.app/assets/icons/arrowDown.svg" alt="arrow" className="downIcon" />
              </a>
              {activeMenu === 'ordersMenu' && (
                <div className="dropdownMenuCollapse">
                  <div className="listBar">
                    <NavLink to="/admin/all-orders" className="subMenu hasCount">All <span className="count statusAll">99+</span></NavLink>
                    <NavLink to="/admin/orders/pending" className="subMenu hasCount">Pending <span className="count statuspending">99+</span></NavLink>
                    <NavLink to="/admin/orders/confirm" className="subMenu hasCount">Confirm <span className="count statusconfirm">47</span></NavLink>
                    <NavLink to="/admin/orders/processing" className="subMenu hasCount">Processing <span className="count statusprocessing">9</span></NavLink>
                    <NavLink to="/admin/orders/pickup" className="subMenu hasCount">Pickup <span className="count statuspickup">7</span></NavLink>
                    <NavLink to="/admin/orders/on-the-way" className="subMenu hasCount">On The Way <span className="count statusonTheWay">24</span></NavLink>
                    <NavLink to="/admin/orders/delivered" className="subMenu hasCount">Delivered <span className="count statusdelivered">22</span></NavLink>
                    <NavLink to="/admin/orders/return" className="subMenu hasCount">Return <span className="count statusdelivered">20</span></NavLink>
                    <NavLink to="/admin/orders/replacement" className="subMenu hasCount">Replacement <span className="count statusdelivered">14</span></NavLink>
                    <NavLink to="/admin/orders/cancelled" className="subMenu hasCount">Cancelled <span className="count statuscancelled">23</span></NavLink>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink className="menu" to="/admin/orders/review" activeclassname='active'>
                <span>
                  <i className="fa-regular fa-star-half-stroke menu-icon"></i>
                  Reviews
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">Product Variants</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/brands">
                <span>
                  <i className="fa-solid fa-star menu-icon"></i>
                  Brand
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/Color">
                <span>
                  <i className="fa-solid fa-palette menu-icon"></i>
                  Color
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/Size">
                <span>
                  <i className="fa-solid fa-list-ol menu-icon"></i>
                  Sizes
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/Unit">
                <span>
                  <i className="fa-brands fa-unity menu-icon"></i>
                  Unit
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">Product Management</span>
            </li>

            <li>
              <a className="menu" onClick={() => toggleMenu('categoryMenu')}>
                <span>
                  <i className="fa-solid fa-border-all menu-icon"></i>
                  Categories
                </span>
                <img src="https://demo.alicom.app/assets/icons/arrowDown.svg" alt="arrow" className="downIcon" />
              </a>
              {activeMenu === 'categoryMenu' && (
                <div className="dropdownMenuCollapse">
                  <div className="listBar">
                    <NavLink to="/admin/products/categories/category" className="subMenu">Category</NavLink>
                    <NavLink to="/admin/products/categories/sub-category" className="subMenu">Sub Category</NavLink>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink className="menu" to="/admin/products/categories/products">
                <span>
                  <i className="fa-brands fa-codepen menu-icon"></i>
                  Products
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/products/categories/flash-sales">
                <span>
                  <i className="fa-solid fa-bolt menu-icon"></i>
                  Flash Sales
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">USER MANAGEMENT</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/User/Customer">
                <span>
                  <i className="fa-solid fa-user menu-icon"></i>
                  Customers
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/User/Employee">
                <span>
                  <i className="fa-solid fa-users-gear menu-icon"></i>
                  Employees
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/user/Role&Permission">
                <span>
                  <i className="fa-solid fa-key menu-icon"></i>
                  Role And Permissions
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">Business Management</span>
            </li>

            <li>
              <a className="menu" onClick={() => toggleMenu('settingsMenu')}>
                <span>
                  <i className="bi bi-gear-fill menu-icon"></i>
                  Business Setting
                </span>
                <img src="https://demo.alicom.app/assets/icons/arrowDown.svg" alt="" className="downIcon" />
              </a>
              {activeMenu === 'settingsMenu' && (
                <div className="dropdownMenuCollapse">
                  <div className="listBar">
                    <NavLink to="/admin/Business/General" className="subMenu">General Settings</NavLink>
                    <NavLink to="/admin/Business/Busines" className="subMenu">Business Setup</NavLink>
                    <NavLink to="/admin/Business/Verification" className="subMenu">Verification</NavLink>
                    <NavLink to="/admin/Business/delivery-charge" className="subMenu">Delivery Charge</NavLink>
                    <NavLink to="/admin/business/color-theme" className="subMenu">Theme Colors</NavLink>
                    <NavLink to="/admin/business/social-link" className="subMenu">Social Links</NavLink>
                    <NavLink to="/admin/ticket-issue-types" className="subMenu">Ticket Issue Types</NavLink>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a className="menu" onClick={() => toggleMenu('legalPagesMenu')}>
                <span>
                  <i className="fa-solid fa-bookmark menu-icon"></i>
                  Legal Pages
                </span>
                <img src="https://demo.alicom.app/assets/icons/arrowDown.svg" alt="" className="downIcon" />
              </a>
              {activeMenu === 'legalPagesMenu' && (
                <div className="dropdownMenuCollapse">
                  <div className="listBar">
                    <NavLink to="/admin/business/legel-privacy-policy" className="subMenu">Privacy Policy</NavLink>
                    <NavLink to="/admin/business/term-and-condition" className="subMenu">Terms and Conditions</NavLink>
                    <NavLink to="/admin/business/return-refund-policy" className="subMenu">Return and Refund Policy</NavLink>
                    <NavLink to="/admin/business/shiping-delivery" className="subMenu">Shipping and Delivery Policy</NavLink>
                    <NavLink to="/admin/business/about-us" className="subMenu">About Us</NavLink>
                    <NavLink to="/admin/business/legal-contact-us" className="subMenu">Contact Us</NavLink>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a className="menu" onClick={() => toggleMenu('thirdPartyConfigMenu')}>
                <span>
                  <i className="bi bi-boxes menu-icon"></i>
                  3rd Party Config
                </span>
                <img src="https://demo.alicom.app/assets/icons/arrowDown.svg" alt="" className="downIcon" />
              </a>
              {activeMenu === 'thirdPartyConfigMenu' && (
                <div className="dropdownMenuCollapse">
                  <div className="listBar">
                    <NavLink to="admin/Business/payment-gateway" className="subMenu">Payment Gateway</NavLink>
                    <NavLink to="/admin/Business/sms-gateways" className="subMenu">SMS Gateway</NavLink>
                    <NavLink to="/admin/Business/pusher" className="subMenu">Pusher Setup</NavLink>
                    <NavLink to="/admin/Business/mail" className="subMenu">Mail Config</NavLink>
                    <NavLink to="/admin/Business/firebase" className="subMenu">Firebase Notification</NavLink>
                  </div>
                </div>
              )}
            </li>

            <li className="menu-divider">
              <span className="menu-title">LANGUAGE MANAGEMENT</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/language">
                <span>
                  <i className="fa-solid fa-language menu-icon"></i>
                  Languages
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">Import / Export</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/bulk-export">
                <span>
                  <i className="fa-solid fa-download menu-icon"></i>
                  Bulk Export
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/bulk-import">
                <span>
                  <i className="fa-solid fa-upload menu-icon"></i>
                  Bulk Import
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/product/gallery">
                <span>
                  <i className="fa-solid fa-file-image menu-icon"></i>
                  Gallery Import
                </span>
              </NavLink>
            </li>

            <li className="menu-divider">
              <span className="menu-title">Supports</span>
            </li>

            <li>
              <NavLink className="menu" to="/admin/support">
                <span>
                  <i className="bi bi-ticket-perforated menu-icon"></i>
                  Support Tickets
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="menu" to="/admin/support-message">
                <span>
                  <i className="bi bi-chat-right-text menu-icon"></i>
                  Support Message
                </span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sideBarfooter">
          <button type="button" className="fullbtn hite-icon" onClick={toggleFullScreen}>
            <i className="fa-solid fa-expand"></i>
          </button>
          <NavLink to="/admin/general-setting" className="fullbtn hite-icon">
            <i className="fa-solid fa-cog"></i>
          </NavLink>
          <NavLink to="/admin/profile" className="fullbtn hite-icon">
            <i className="fa-solid fa-user"></i>
          </NavLink>
          <button className="fullbtn hite-icon logout">
            <i className="fa-solid fa-power-off" onClick={
              (e) => {
                e.preventDefault();
                setShowLogoutModal(true);
              }
            }></i>
          </button>
        </div>
      </div>

      { showLogoutModal && (
        <Logout onLogout={handleLogout} onCancel={handleCancel}/>
      )}
    </div>
  );
};

export default Sidebar;
