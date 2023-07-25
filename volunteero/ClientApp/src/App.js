import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import './custom.css';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/homePage';
import Sam from './components/about';
import Navbar from './components/navbar';
import Home from './components/home';
import AddnewPost from './components/addnewPost';
import UserAddShow from './components/userAddShow';
import MyHome from './components/myHome';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return (

          <div className="App">
              <Navbar />
              <Routes>
                  <Route exact path="/" element={<MyHome />} />
                  {/* exact to say this is the main page only */}

                  <Route path="/aboutus" element={<Sam />} />
                  <Route path="/homepage" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/addnewpost" element={<AddnewPost/>} />
                  <Route path="/useraddshow" element={<UserAddShow />} />
                  <Route path="/myhome" element={<MyHome />} />


              </Routes>
          </div>
          )
  
  }
}


/* <Layout>
     <Routes>
       {AppRoutes.map((route, index) => {
         const { element, ...rest } = route;
         return <Route key={index} {...rest} element={element} />;
       })}
     </Routes>
   </Layout>
 );*/