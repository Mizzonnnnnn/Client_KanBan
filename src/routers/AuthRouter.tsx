import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from '../screens';
import '../index.css'
const AuthRouter = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col ">
                    {/* <img src="" alt="" /> */}
                    {/* d-none d-md-block d-lg-none */}
                    Toan
                </div>
                <div className="col content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
};

export default AuthRouter;