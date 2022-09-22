import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loader from '../Loader';
import Navbar from './Navbar';

const Home = () => {
 
  return (
    <div>
      <Navbar></Navbar>
      
    </div>
  );
};

export default Home;