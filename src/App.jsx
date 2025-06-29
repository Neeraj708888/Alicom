import { Routes, Route } from "react-router-dom";

import Headers from "./components/pages/header/Header";
import Footer from "./components/pages/footer/Footer";

// Login Pages
import Login from "./components/pages/login/Login";
// import Logins from "./components/pages/login/Logins";
import Dashboard from "./components/pages/Dashboard/dashboard/Dashboard";

// Promotional Management
import Banner from "./components/pages/banner/Banner";
import Ads from "./components/pages/Promotion_Management/ads/Ads";
import Coupon from "./components/pages/coupon/Coupon";
import Notification from "./components/pages/notification/Notification";

// Order Management
import Order from "./components/pages/order/Order";
import Pending from "./components/pages/order/Pending";
import Confirm from "./components/pages/order/Confirm";
import Pickup from "./components/pages/order/Pickup";
import Ontheway from "./components/pages/order/Ontheway";
import Deliver from "./components/pages/order/Deliver";
import Cancel from "./components/pages/order/Cancel";

// Sidebar or other layouts (optional)
import Processing from "./components/pages/order/Processing";
import Layout from "./components/Layout";
import Reviews from "./components/pages/reviews/Reviews";
import ColorList from "./components/pages/Colorlist/ColorList";
import SizeList from "./components/pages/sizelist/SizeList";
import UnitList from "./components/pages/unitlist/UnitList";
import Customers from "./components/pages/customers/Customer";
import Employee from "./components/pages/user_management/employees/Emoloyee";
import Business from "./components/pages/business_management/business_setting/business_setup/Business";
import Verification from "./components/pages/business_management/business_setting/verification/verification";
import Category from "./components/pages/category/Category";
import SubCategory from "./components/pages/category/SubCategory";
import EditCategory from "./components/pages/category/EditCategory";
import Products from "./components/pages/category/Products";
import EditProducts from "./components/pages/category/EditProducts";
import FlashSales from "./components/pages/category/FlashSalses";
import EditFlashSales from "./components/pages/category/EditFlashSales";
import Support from "./components/pages/support/Support";
import SupportMessage from "./components/pages/support/SupportMessage";
import EditBanner from "./components/pages/editbanner/EditBanner";
import EditBoucher from "./components/pages/couponModal/EditBoucher";
import OrderDetails from "./components/pages/order/OrderDetails";
import ProductDetails from "./components/pages/category/ProductDetails";
import EditFlashable from "./components/pages/category/EditFlashable";
import Language from "./components/pages/language/Language";
import EditLanguage from "./components/pages/language/EditLanguage";
import CreateLanguage from "./components/pages/language/CreateLanguage";
import PaymentGateways from "./components/pages/payments/paymentGateway/PaymentGateways";
import SMSGateways from "./components/pages/payments/smsGateway/SMSGateways";
import PusherSetup from "./components/pages/payments/pusherSetup/PusherSetup";
import MailConfig from "./components/pages/payments/mailConfig/MailConfig";
import Firebase from "./components/pages/payments/firebase/Firebase";
import BulkExport from "./components/pages/import_export/BulkExport";

import GalleryImport from "./components/pages/import_export/GalleryImport";
import BulkImport from "./components/pages/import_export/BulkImport";
import UploadZipFile from "./components/pages/import_export/UploadZipFile";
import ProfileDetails from "./components/pages/header/ProfileDetails";
import EditProfileDetails from "./components/pages/header/EditProfileDetails";
import AdminSetting from "./components/pages/header/AdminSetting";
import ChangePassword from "./components/pages/header/ChangePassword";
import Notifications from "./components/pages/header/Notifications";
import BrandList from "./components/pages/productVarient/Brand";
import General from "./components/pages/business_management/business_setting/general_setting/General";
import ManageDelivery from "./components/pages/business_management/business_setting/delivery_charge/ManageDelivery";
import EditCity from "./components/pages/business_management/business_setting/delivery_charge/EditCity";
import ManageCity from "./components/pages/business_management/business_setting/delivery_charge/ManageCity";
import CreateNewDelivery from "./components/pages/business_management/business_setting/delivery_charge/CreateNewDelivery";
import AddNewCity from "./components/pages/business_management/business_setting/delivery_charge/AddNewCity";
import ImportCity from "./components/pages/business_management/business_setting/delivery_charge/ImportCity";
import ThemeColor from "./components/pages/business_management/business_setting/theme_color/ThemeColor";
import SocialLink from "./components/pages/business_management/business_setting/social_links/SocialLink";
import TicketIssue from "./components/pages/business_management/business_setting/ticke_issue-type/TicketIssue";
import PrivacyPolicy from "./components/pages/legal-pages/privacyPolicy/PrivacyPolicy";
import EditPrivacyPolicy from "./components/pages/legal-pages/privacyPolicy/EditPrivacypolicy";
import CreateNewCategory from "./components/pages/category/CreateNewCategory";
import CreateSubCategory from "./components/pages/category/CreateSubCategory";
import AddNewProduct from "./components/pages/category/AddNewProduct";
import GenerateBarcode from "./components/pages/category/GenerateBarcode";
import RolesAndPermissions from "./components/pages/role&permission/Role&Permission";
import TermAndCondition from "./components/pages/legal-pages/term-and-condition/TermAndCondition";
import EditTermAndCondition from "./components/pages/legal-pages/term-and-condition/EditTermAndCondition";
import ReturnRefund from "./components/pages/legal-pages/return_refund/ReturnRefund";
import EditReturnRefund from "./components/pages/legal-pages/return_refund/EditReturnRefund";
import ShippingDeliveryPolicy from "./components/pages/legal-pages/Shipping-and-delivery/ShipingAndDelivery";
import EditShippingDelivery from "./components/pages/legal-pages/Shipping-and-delivery/EditShippingDelivery";
import LegalAboutUs from "./components/pages/legal-pages/abous-us/LegalAboutUs";
import EditAboutUs from "./components/pages/legal-pages/abous-us/EditLegalAboutUs";
import CreateEmployee from "./components/pages/user_management/employees/CreateEmployee";
import EmployeePermissions from "./components/pages/user_management/employees/EmployeePermission";
import Return from "./components/pages/order/Return";
import Replacement from "./components/pages/order/Replacement";
import LegalContactUs from "./components/pages/legal-pages/contact-us/LegalContactUs";



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          {/* Dashboard */}
          <Route index element={<Dashboard/>} />

          {/* Header Section */}
          <Route path="/admin/profile" element={<ProfileDetails/>} />
          <Route path="/admin/profile/edit" element={<EditProfileDetails/>} />
          <Route path="/admin/general-setting" element={<AdminSetting/>} />
          <Route path="/admin/profile/change-password" element={<ChangePassword/>} />
          <Route path="/admin/notifications" element={<Notifications/>} />

          {/* Promotion Management */}
          <Route path="/admin/banners" element={<Banner />} />
          <Route path="/admin/advertise" element={<Ads/>} />
          <Route path="/admin/banners/edit" element={<EditBanner />} />
          <Route path="/admin/coupons" element={<Coupon />} />
          <Route path="/admin/coupons/edit-boucher" element={<EditBoucher />} />
          <Route path="/admin/customer-notifications" element={<Notification />}/>

          {/* Order Management  */}
          <Route path="/admin/all-orders" element={<Order />} />
          <Route path="/admin/orders/order-details" element={<OrderDetails />} />
          <Route path="/admin/orders/pending" element={<Pending />} />
          <Route path="/admin/orders/confirm" element={<Confirm />} />
          <Route path="/admin/orders/processing" element={<Processing />} />
          <Route path="/admin/orders/pickup" element={<Pickup />} />
          <Route path="/admin/orders/on-the-way" element={<Ontheway />} />
          <Route path="/admin/orders/delivered" element={<Deliver />} />
          <Route path="/admin/orders/return" element={<Return />} />
          <Route path="/admin/orders/replacement" element={<Replacement />} />
          <Route path="/admin/orders/cancelled" element={<Cancel />} />
          <Route path="/admin/orders/review" element={<Reviews />} />

          {/* Product Varient */}
          <Route path="/admin/Product/brands" element={<BrandList />} />
          <Route path="/admin/Product/Color" element={<ColorList />} />
          <Route path="/admin/product/Size" element={<SizeList />} />
          <Route path="/admin/Product/Unit" element={<UnitList />} />

          {/* Product Management */}
          <Route path="/admin/products/categories/category" element={<Category />} />
          <Route path="/admin/products/categories/category/edit" element={<EditCategory />} />          
          <Route path="/admin/products/categories/category/create" element={<CreateNewCategory />} />          

          <Route path="/admin/products/categories/sub-category" element={<SubCategory />} />
          <Route path="/admin/products/categories/sub-category/create" element={<CreateSubCategory />} />

          <Route path="/admin/products/categories/products" element={<Products/>}/>
          <Route path="/admin/products/categories/products/create" element={<AddNewProduct/>}/>
          <Route path="/admin/products/categories/products/product-details" element={<ProductDetails/>}/>
          <Route path="/admin/products/categories/products/generate-barcode" element={<GenerateBarcode/>}/>
          <Route path="/admin/products/categories/products/product-edit" element={<EditProducts/>}/>
          <Route path="/admin/products/categories/flash-sales" element={<FlashSales/>}/>
          <Route path="/admin/products/categories/flash-sales/edit" element={<EditFlashable/>}/>
          <Route path="/admin/products/categories/flash-sales/edit" element={<EditFlashSales/>}/>

           {/* USER MANAGEMENT */}
        
          <Route path="/admin/User/Customer" element={<Customers />} />
          <Route path="/admin/User/Employee" element={<Employee />} />
          <Route path="/admin/User/Employee/create" element={<CreateEmployee />} />
          <Route path="/admin/User/Employee/employee-permission" element={<EmployeePermissions />} />
          <Route path="/admin/user/Role&Permission" element={<RolesAndPermissions />} />


           {/* Business MANAGEMENT */}
        
          <Route path="/admin/Business/General" element={<General />} />
          <Route path="/admin/Business/Busines" element={<Business />} />
          <Route path="/admin/Business/Verification" element={<Verification />} />
          <Route path="/admin/Business/delivery-charge" element={<ManageDelivery />} />
          <Route path="/admin/Business/delivery-charges/cities/edit-city" element={<EditCity />} />
          <Route path="/admin/Business/delivery-charges/cities/cities" element={<ManageCity />} />
          <Route path="/admin/Business/delivery-charges/cities/create-new-delivery" element={<CreateNewDelivery />} />
          <Route path="/admin/Business/delivery-charges/cities/add-new-city" element={<AddNewCity />} />
          <Route path="/admin/business/delivery-charges/cities/import" element={<ImportCity />} />
          <Route path="/admin/business/color-theme" element={<ThemeColor />} />
          <Route path="/admin/business/social-link" element={<SocialLink />} />
          <Route path="/admin/ticket-issue-types" element={<TicketIssue/>} />

          {/* Legal Policy */}
          <Route path="/admin/business/legel-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin/business/edit-privacy-policy" element={<EditPrivacyPolicy />} />
          <Route path="/admin/business/term-and-condition" element={<TermAndCondition />} />
          <Route path="/admin/legalpage/term-and-condition/edit" element={<EditTermAndCondition />} />
          <Route path="/admin/business/return-refund-policy" element={<ReturnRefund/>} />
          <Route path="/admin/business/return-refund-policy/edit" element={<EditReturnRefund />} />
          <Route path="/admin/business/shiping-delivery" element={<ShippingDeliveryPolicy />} />
          <Route path="/admin/business/return-refund-policy/shiping-delivery/edit" element={<EditShippingDelivery />} />
          <Route path="/admin/business/about-us" element={<LegalAboutUs />} />
          <Route path="/admin/business/about-us/edit" element={<EditAboutUs />} />
          <Route path="/admin/business/legal-contact-us" element={<LegalContactUs />} />

          {/* Payment Gateways */}
          <Route path="/admin/Business/payment-gateway" element={<PaymentGateways />} />
          <Route path="/admin/Business/sms-gateways" element={<SMSGateways />} />
          <Route path="/admin/Business/pusher" element={<PusherSetup />} />
          <Route path="/admin/Business/mail" element={<MailConfig />} />
          <Route path="/admin/Business/firebase" element={<Firebase />} />

          {/* Language */}
          <Route path="/admin/language" element={<Language/>}/>
          <Route path="/admin/language/create" element={<CreateLanguage/>}/>
          <Route path="/admin/language/edit" element={<EditLanguage/>}/>

          {/* Import / Export */}
          <Route path="/admin/product/bulk-export" element={<BulkExport/>}/>
          <Route path="/admin/product/bulk-import" element={<BulkImport/>}/>
          <Route path="/admin/product/gallery" element={<GalleryImport/>}/>
          <Route path="/admin/product/gallery/upload-image" element={<UploadZipFile/>}/>

          {/* Support  */}
          <Route path="/admin/support" element={<Support />} />
          <Route path="/admin/support-message" element={<SupportMessage />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
