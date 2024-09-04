import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemControl from "./item/ItemControl";
import SignUp from './auth/SignUp';
import Item from "./item/Item";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <hr/>
        <Routes>
          <Route path="/items" element={<ItemControl/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
