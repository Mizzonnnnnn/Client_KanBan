import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from '../screens';
import '../index.css'
import { Typography } from 'antd';


const { Title } = Typography

{/* <img src="" alt="" /> */ }
{/* d-none d-md-block d-lg-none */ }
const AuthRouter = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col d-none d-lg-block text-center align-content-center">
                    <div className='mb-3'>
                        <img
                            src={"https://www.dropbox.com/scl/fi/m0z7iuwmcrt8oij9gyxec/kanban.png?rlkey=xxs5zhn7gcuwbga387vlrrfl1&st=3cpxi77a&raw=1"} alt="logo"
                            style={{
                                width: "250px",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                    <div>
                        <Title>KANBAN</Title>
                    </div>
                </div>
                <div className="col content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
};

export default AuthRouter;