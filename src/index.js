import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Appform from './pages/Appform';
import AppTable from './pages/AppTable';
import 'antd/dist/antd.css';
import FormOne from './pages/forms/FormOne';
import Tableapi from './pages/forms/Tableapi';
import Castesort from './pages/forms/UsersApi';
export default function App(){
  return (

<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<AppTable/>}/>
    <Route path = '/appform' element={<Appform/>}/>
    <Route path ='/formOne' element ={<FormOne/>}/>
    <Route path ='/Tableapi' element ={<Tableapi/>}/>
    <Route path='/Castesort' element = {<Castesort/>}/>
</Route>
</Routes>
</BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


