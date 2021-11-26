import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="navbav">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage />}>
                            </Route>
                            <Route path="/exchanges" element={<Exchanges />}>
                            </Route>
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />}>
                            </Route>
                            <Route path="/crypto/:coinId" element={<CryptoDetails />}>
                            </Route>
                            <Route path="news" element={<News />}>
                            </Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">
            </div>
        </div>
        

    );
}

export default App
