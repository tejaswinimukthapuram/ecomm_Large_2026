import React from 'react';
import PrimaryNavbar from '../components/primaryNavbar/PrimaryNavbar';
import BannerComp from '../components/bannerComp/BannerComp';
import HomeCard from '../components/homeCard/HomeCard';
import CouponBanner from '../components/couponBanner/CouponBanner';
import SignUpPage from './signUpPage/SignUpPage';


const HomePage = () => {
  return (
    <>
         <BannerComp />
        <CouponBanner />
        <HomeCard/>


    </>
  );
};

export default HomePage;
