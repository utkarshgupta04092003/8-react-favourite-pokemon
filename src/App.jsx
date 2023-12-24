import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Favourites from './components/Favourites';
import Details from './components/Details';
import Error from './components/Error';


export default function App() {
  return (
    <div>


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/details/:imageId' element={<Details />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='*' element={<Error />} />

          </Routes>
        </BrowserRouter>

    </div>
  )
}
