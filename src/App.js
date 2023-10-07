import React from "react";
import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import TrangChu1 from "./component/TrangChu1";
import JordanComponent from "./component/JordanComopnent";
import Detail from "./component/Detail";
import GioHang from "./component/GioHang";
import { Link } from "react-router-dom";
import Login from "./component/Login";
import BanHangTaiQuay from "./component/BanHangTaiQuay"
import BanHangOnlineCoTK from "./component/BanHangOnlineCoTK"

import BanHangOnlineKhongTK from "./component/BanHangOnlineKhongTK"
import Forgotpassword from "./component/ForgotPassword";
import SignUp from "./component/SignUp"


import "./App.css";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="" exact element={<TrangChu1 />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/jordan" exact element={<JordanComponent/>} />
          <Route path='/forgot-password' element={<Forgotpassword/>}/>
          <Route path="/detail" exact element={<Detail/>} />
          <Route path="/cart" exact element={<GioHang/>}/>
          <Route path="/ban-hang-tai-quay" exact element={<BanHangTaiQuay/>}/>
          <Route path="/ban-hang-online-co-tk" exact element={<BanHangOnlineCoTK/>}/>
        </Routes>
        <Footer/>
       
      </BrowserRouter>
   
    </div>
  );
}


export default App;
