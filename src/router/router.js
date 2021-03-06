import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../page/main/header/header';
import Opening from '../page/opening/opening';
import Detail from '../page/detail/detail';
import Main from '../page/main/main';
import Mypage from '../page/mypage/mypage';
import Subscribe from '../page/subscribe/subscribe';
import Login from '../page/login/login';
import CallBack from '../page/login/callback';
import Viedo from '../page/viedo/viedo';
import ProfileEdit from '../page/mypage/profileEdit';
import Search from '../page/search/search';
import Footer from '../page/main/footer/footer';
import TvProgram from '../page/tvProgram/tvProgram';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/video" element={<Viedo />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<TvProgram />} />
        <Route path="/login/callback" element={<CallBack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
