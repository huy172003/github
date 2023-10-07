import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./component/SignUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" ex element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
