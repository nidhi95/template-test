import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/signuptextfill">SignupTextfill</Link>
        </li>
        <li>
          <Link to="/dashboardnotifications">DashboardNotifications</Link>
        </li>
        <li>
          <Link to="/ekycintroductionstepthree">EKYCIntroductionStepThree</Link>
        </li>
        <li>
          <Link to="/tracktasks">Tracktasks</Link>
        </li>
        <li>
          <Link to="/frame">Frame</Link>
        </li>
        <li>
          <Link to="/calenderweek">CalenderWeek</Link>
        </li>
        <li>
          <Link to="/dashboard0two">Dashboard0Two</Link>
        </li>
        <li>
          <Link to="/ekycbegin">EKYCBegin</Link>
        </li>
        <li>
          <Link to="/ekycscanidcard">EKYCScanIDCard</Link>
        </li>
        <li>
          <Link to="/cartempty">Cartempty</Link>
        </li>
        <li>
          <Link to="/calenderday1event">CalenderDay1Event</Link>
        </li>
        <li>
          <Link to="/addproduct">AddProduct</Link>
        </li>
        <li>
          <Link to="/cartproductlistone">CartProductListOne</Link>
        </li>
        <li>
          <Link to="/ekycscanidcardaddimage">EKYCScanIDCardAddimage</Link>
        </li>
        <li>
          <Link to="/shopreviews">ShopReviews</Link>
        </li>
        <li>
          <Link to="/shippinginfo">ShippingInfo</Link>
        </li>
        <li>
          <Link to="/ekycsignature">EKYCSignature</Link>
        </li>
        <li>
          <Link to="/dashboard0one">Dashboard0One</Link>
        </li>
        <li>
          <Link to="/signupdefault">SignupDefault</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/signindefault">SigninDefault</Link>
        </li>
        <li>
          <Link to="/ekycscanface">EKYCScanFace</Link>
        </li>
        <li>
          <Link to="/shopsearch">ShopSearch</Link>
        </li>
        <li>
          <Link to="/ekycintroductionsteptwo">EKYCIntroductionStepTwo</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/paymentinfo">PaymentInfo</Link>
        </li>
        <li>
          <Link to="/ekycconfirminformation">EKYCConfirmInformation</Link>
        </li>
        <li>
          <Link to="/ekycintroductionstepone">EKYCIntroductionStepOne</Link>
        </li>
        <li>
          <Link to="/dashboardnotificationsone">DashboardNotificationsOne</Link>
        </li>
        <li>
          <Link to="/conversation">Conversation</Link>
        </li>
        <li>
          <Link to="/calendermonthtwo">CalenderMonthTwo</Link>
        </li>
        <li>
          <Link to="/signinresetpasswordsuccessful">
            SigninResetPasswordSuccessful
          </Link>
        </li>
        <li>
          <Link to="/calenderdaynoevent">CalenderDayNoevent</Link>
        </li>
        <li>
          <Link to="/signupwrongemail">SignupWrongemail</Link>
        </li>
        <li>
          <Link to="/ekycsuccessful">EKYCSuccessful</Link>
        </li>
        <li>
          <Link to="/signintextfill">SigninTextfill</Link>
        </li>
        <li>
          <Link to="/dashboard0three">Dashboard0Three</Link>
        </li>
        <li>
          <Link to="/ekycintroductionstepfour">EKYCIntroductionStepFour</Link>
        </li>
        <li>
          <Link to="/shopdetailitem">ShopDetailitem</Link>
        </li>
        <li>
          <Link to="/checkoutone">CheckoutOne</Link>
        </li>
        <li>
          <Link to="/filemanagementdefault">FileManagementDefault</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
