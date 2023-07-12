import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { Contact } from './Contact';
import { ListEmp } from './ListEmp';
import { Nopage } from './Nopage';
import {Outlet,Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './Employee';
import Enployeedel, { Employeedel } from './Employeedel';
import Employeeedit from './Employeeedit';
import Employeecreate from './Employeecreate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contactus" element={<Contact />} />
          <Route path="ListEmployee" element={<ListEmp />} />
       <Route path="emp/:id" element={<Employee />} />
       <Route path="empedit/:id" element={<Employeeedit/>} />
       <Route path="empdel/:id" element={<Employeedel/>} />
       <Route path="empcreate" element={<Employeecreate/>} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

