import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home'
import Page2  from '../pages/page2';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  </BrowserRouter>
)
  


export default Router;