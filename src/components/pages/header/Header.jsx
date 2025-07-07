import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);


    const handleLogout = () => {
        console.log("User logged out");
        navigate('/login');
    };

    const handleCancel = () => {
        console.log("Logout canceled");
        setShowLogoutModal(false);
    };

    return (
        <>
             <div className="app-header header-shadow">
                <div className="app-header-logo"></div>

                <div className="app-header-mobile-menu">
                    <div>
                        <button
                            type="button"
                            className={`hamburger hamburger--elastic mobile-toggle-nav ${isSidebarOpen ? '' : 'is-active'}`}
                            onClick={toggleSidebar}
                            data-class="closed-sidebar">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="app-header-menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>

                <div className="app-header-content">
                    <div className="app-header-left">
                        <div className="header-pane">
                            <div>
                                <button
                                    type="button"
                                    className={`hamburger close-sidebar-btn hamburger--elastic ${isSidebarOpen ? '' : 'is-active'}`}
                                    onClick={toggleSidebar}
                                    data-class="closed-sidebar"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="app-header-right">
                        {/* Notification Dropdown */}
                        <div
                            className="badgeButtonBox me-3 position-relative"
                            onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                        >
                            <div className="notifactionIcon">
                                <button type="button" className="emailBadge position-relative">
                                    <i className="fa-solid fa-bell noti"></i>
                                    <span className="position-absolute notificationCount" id="totalNotify">0</span>
                                </button>

                                {showNotificationDropdown && (
                                    <div className="dropdown-menu p-0 emailNotifactionSection show" style={{ right: 0, top: '100%', minWidth: '320px' }}>
                                        <div className="dropdown-item emailNotifaction">
                                            <div className="emailHeader d-flex justify-content-between align-items-center px-3 py-2">
                                                <h6 className="massTitel mb-0">Notifications</h6>
                                                <Link to="#" className="text-dark small">Mark all as read</Link>
                                            </div>

                                            <div className="messege-section" id="notifications">
                                                <Link to="#" className="item d-flex gap-2 align-items-center px-3 py-2 border-bottom">
                                                    <div className="iconBox pdfIcon">
                                                        <i className="bi bi-ticket-perforated-fill"></i>
                                                    </div>
                                                    <div className="notification w-100">
                                                        <div className="userName">
                                                            <p className="massTitel mb-1">New Support Ticket Created</p>
                                                            <span className="time text-muted small">2 months ago</span>
                                                        </div>
                                                        <div>
                                                            <p className="description small text-muted mb-0">
                                                                Support Ticket created from: Demo User. Ticket Number: #7923744
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="emailFooter text-center py-2">
                                                <Link to="/admin/notifications" className="massPera text-dark small">View All Notifications</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                        {/* Language Dropdown */}
                        <div className="user-profile-box dropdown mx-3" onClick={() => setShowLangDropdown(!showLangDropdown)}>
                            <div className="nav-profile-box">
                                <div className="profile-image">
                                    <Link to="#">
                                        <img src="https://demo.alicom.app/assets/icons/language.svg" alt="language" />
                                    </Link>
                                </div>
                            </div>
                            {showLangDropdown && (
                                <div className="dropdown-menu profile-item show" style={{ width: '160px' }}>
                                    <Link to="#" className="dropdown-item">
                                        <i className="fa fa-language mr-3"></i> ar
                                    </Link>
                                    <Link to="#" className="dropdown-item language-active">
                                        <i className="fa fa-language mr-3"></i> en
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* User Profile Dropdown */}
                        <div className="user-profile-box dropdown ml-3" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                            <div className="nav-profile-box">
                                <div className="profile-image">
                                    <img className="profilepic" src="https://demo.alicom.app/storage/users/profile/IVLmKQQeJnrT7rd1FemiXAxwB3Wi9CQbNVGyhJta.jpg" alt="profile" loading="lazy" />
                                </div>
                                <div className="profile-content">
                                    <span>Heven Shop Kart</span>
                                    <i className="fa-solid fa-angle-down dropIcon"></i>
                                </div>
                            </div>

                            {showProfileDropdown && (
                                <div className="dropdown-menu profile-item show">
                                    <Link to="/admin/profile" className="dropdown-item">
                                        <i className="fa fa-user me-2"></i> Profile
                                    </Link>
                                    <Link to="/admin/general-setting" className="dropdown-item">
                                        <i className="fa fa-cog me-2"></i> Settings
                                    </Link>
                                    <Link to="/admin/profile/change-password" className="dropdown-item">
                                        <i className="fa-solid fa-key me-2"></i> Change Password
                                    </Link>
                                    <button
                                        className="dropdown-item cursor-pointer logout"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowLogoutModal(true);
                                        }}
                                    >
                                        <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {showLogoutModal && (
                <Logout onLogout={handleLogout} onCancel={handleCancel} />
            )}
        </>
    );
};

export default Header;
