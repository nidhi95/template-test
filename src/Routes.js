import React from "react";
import Customer from "pages/Customer";
import Settings from "pages/Settings";
import FileManagementDefault from "pages/FileManagementDefault";
import CheckoutOne from "pages/CheckoutOne";
import ShopDetailitem from "pages/ShopDetailitem";
import EKYCIntroductionStepFour from "pages/EKYCIntroductionStepFour";
import Dashboard0Three from "pages/Dashboard0Three";
import SigninTextfill from "pages/SigninTextfill";
import EKYCSuccessful from "pages/EKYCSuccessful";
import SignupWrongemail from "pages/SignupWrongemail";
import CalenderDayNoevent from "pages/CalenderDayNoevent";
import SigninResetPasswordSuccessful from "pages/SigninResetPasswordSuccessful";
import CalenderMonthTwo from "pages/CalenderMonthTwo";
import Conversation from "pages/Conversation";
import DashboardNotificationsOne from "pages/DashboardNotificationsOne";
import EKYCIntroductionStepOne from "pages/EKYCIntroductionStepOne";
import EKYCConfirmInformation from "pages/EKYCConfirmInformation";
import PaymentInfo from "pages/PaymentInfo";
import Checkout from "pages/Checkout";
import EKYCIntroductionStepTwo from "pages/EKYCIntroductionStepTwo";
import ShopSearch from "pages/ShopSearch";
import EKYCScanFace from "pages/EKYCScanFace";
import SigninDefault from "pages/SigninDefault";
import Cart from "pages/Cart";
import SignupDefault from "pages/SignupDefault";
import Dashboard0One from "pages/Dashboard0One";
import EKYCSignature from "pages/EKYCSignature";
import ShippingInfo from "pages/ShippingInfo";
import ShopReviews from "pages/ShopReviews";
import EKYCScanIDCardAddimage from "pages/EKYCScanIDCardAddimage";
import CartProductListOne from "pages/CartProductListOne";
import AddProduct from "pages/AddProduct";
import CalenderDay1Event from "pages/CalenderDay1Event";
import Cartempty from "pages/Cartempty";
import EKYCScanIDCard from "pages/EKYCScanIDCard";
import EKYCBegin from "pages/EKYCBegin";
import Dashboard0Two from "pages/Dashboard0Two";
import CalenderWeek from "pages/CalenderWeek";
import Frame from "pages/Frame";
import Tracktasks from "pages/Tracktasks";
import EKYCIntroductionStepThree from "pages/EKYCIntroductionStepThree";
import DashboardNotifications from "pages/DashboardNotifications";
import SignupTextfill from "pages/SignupTextfill";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signuptextfill" element={<SignupTextfill />} />
        <Route
          path="/dashboardnotifications"
          element={<DashboardNotifications />}
        />
        <Route
          path="/ekycintroductionstepthree"
          element={<EKYCIntroductionStepThree />}
        />
        <Route path="/tracktasks" element={<Tracktasks />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/calenderweek" element={<CalenderWeek />} />
        <Route path="/dashboard0two" element={<Dashboard0Two />} />
        <Route path="/ekycbegin" element={<EKYCBegin />} />
        <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
        <Route path="/cartempty" element={<Cartempty />} />
        <Route path="/calenderday1event" element={<CalenderDay1Event />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cartproductlistone" element={<CartProductListOne />} />
        <Route
          path="/ekycscanidcardaddimage"
          element={<EKYCScanIDCardAddimage />}
        />
        <Route path="/shopreviews" element={<ShopReviews />} />
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/ekycsignature" element={<EKYCSignature />} />
        <Route path="/dashboard0one" element={<Dashboard0One />} />
        <Route path="/signupdefault" element={<SignupDefault />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signindefault" element={<SigninDefault />} />
        <Route path="/ekycscanface" element={<EKYCScanFace />} />
        <Route path="/shopsearch" element={<ShopSearch />} />
        <Route
          path="/ekycintroductionsteptwo"
          element={<EKYCIntroductionStepTwo />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
        <Route
          path="/ekycconfirminformation"
          element={<EKYCConfirmInformation />}
        />
        <Route
          path="/ekycintroductionstepone"
          element={<EKYCIntroductionStepOne />}
        />
        <Route
          path="/dashboardnotificationsone"
          element={<DashboardNotificationsOne />}
        />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/calendermonthtwo" element={<CalenderMonthTwo />} />
        <Route
          path="/signinresetpasswordsuccessful"
          element={<SigninResetPasswordSuccessful />}
        />
        <Route path="/calenderdaynoevent" element={<CalenderDayNoevent />} />
        <Route path="/signupwrongemail" element={<SignupWrongemail />} />
        <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
        <Route path="/signintextfill" element={<SigninTextfill />} />
        <Route path="/dashboard0three" element={<Dashboard0Three />} />
        <Route
          path="/ekycintroductionstepfour"
          element={<EKYCIntroductionStepFour />}
        />
        <Route path="/shopdetailitem" element={<ShopDetailitem />} />
        <Route path="/checkoutone" element={<CheckoutOne />} />
        <Route
          path="/filemanagementdefault"
          element={<FileManagementDefault />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
