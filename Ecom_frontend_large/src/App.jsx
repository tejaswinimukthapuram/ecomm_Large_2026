import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./styles/colors.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimaryNavbar from './components/primaryNavbar/PrimaryNavbar';
import BannerComp from './components/bannerComp/BannerComp';
import CouponBanner from './components/couponBanner/CouponBanner';
import {CartPage} from "./pages/CartPage/CartPage";
import {CartNav} from "./components/CartNav/CartNav"

import './App.css'
import SignUpPage from './pages/signUpPage/SignUpPage';
import { BuyCard } from './pages/BuyPage/BuyCard.jsx/BuyCard';
import { Outlet } from 'react-router-dom';



function Layout(){

  return (
    <>
       <PrimaryNavbar />
      
        <Outlet />

    </>
  )
}

function CheckoutLayout(){

  return(
    <>
      <CartNav />
      <Outlet />
    </>
  )

}

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/signup" element = {<SignUpPage />} />
    
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<HomePage />} />
      <Route path="/buyPage/:id" element={< BuyCard/>}  />
      </Route>
      <Route path="/checkout" element={<CheckoutLayout />}>
      <Route path="/checkout/cart" element={<CartPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
