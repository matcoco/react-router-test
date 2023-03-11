import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Archivage from "./Archivage";
import React from 'react';
import Navigation from "./Nav";


const Routeur = () => {


  return (

      <HashRouter>
        <div className="page-container">
          <div className="content-wrap">
            <Navigation />
            <Routes>
              <Route path={'/'} exact element={<Home />}></Route>
              <Route path={"/archives"} element={<Archivage />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>

  )
}

export default Routeur