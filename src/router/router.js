import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/detail/detail';
import Header from '../page/main/header/header';
import Main from '../page/main/main';
import Mypage from '../page/mypage/mypage';
import Subscribe from '../page/subscribe/subscribe';
import Viedo from '../page/viedo/viedo';
import ProfileEdit from '../page/mypage/profileEdit';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/video" element={<Viedo />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
