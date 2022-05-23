import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop'
import AlwaysPan from './Components/AlwaysPan'
import OurPlace from './Components/OurPlace'
import Mission from './Components/Mission'
import Faqs from './Components/Faqs'
import Profil from './Components/Profil'
import ShopPan from './Components/ShopPan'
import FollowAlong from './Components/FollowAlong'
import MainPlates from './Components/MainPlates'
import SideBowls from './Components/SideBowls'
import DrinkingGlasses from './Components/DrinkingGlasses'
import FamilyDinner from './Components/FamilyDinner'
import ContactUs from './Components/ContactUs'
import Returns from './Components/Returns'
import BulkOrders from './Components/BulkOrders'
import Careers from './Components/Careers'
import Copyright from './Components/Copyright'
import Privacy from './Components/Privacy'
import Terms from './Components/Terms'
import WheelChair from './Components/WheelChair'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}> </Route>
    <Route path='/Shop' element={<Shop/>}></Route>
    <Route path='/AlwaysPan' element={<AlwaysPan/>}></Route>
    <Route path='/OurPlace' element={<OurPlace/>}></Route>
    <Route path='/Mission' element={<Mission/>}></Route>
    <Route path='/Faqs' element={<Faqs/>}></Route>
    <Route path='/Profil' element={<Profil/>}></Route>
    <Route path='/ShopPan' element={<ShopPan/>}></Route>
    <Route path='/FollowAlong' element={<FollowAlong/>}></Route>
    <Route path='/MainPlates' element={<MainPlates/>}></Route>
    <Route path='/SideBowls' element={<SideBowls/>}></Route>
    <Route path='/DrinkingGlasses' element={<DrinkingGlasses/>}></Route>
    <Route path='/FamilyDinner' element={<FamilyDinner/>}></Route>
    <Route path='/ContactUs' element={<ContactUs/>}></Route>
    <Route path='/Returns' element={<Returns/>}></Route>
    <Route path='/BulkOrders' element={<BulkOrders/>}></Route>
    <Route path='/Careers' element={<Careers/>}></Route>
    <Route path='/Copyright' element={<Copyright/>}></Route>
    <Route path='/Privacy' element={<Privacy/>}></Route>
    <Route path='/Terms' element={<Terms/>}></Route>
    <Route path='/WheelChair' element={<WheelChair/>}></Route>
   
  </Routes>
  </BrowserRouter>
);

