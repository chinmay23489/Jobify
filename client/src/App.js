import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile';
import PostJobs from './pages/PostJobs';
import AppliedJobs from './pages/AppliedJobs';
import JobInfo from './pages/JobInfo';
import { useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from 'react-redux';
import { loaderReducer } from 'redux/reducers/loaderReducer';
import { getAllJobs } from 'redux/actions/jobActions';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PostedJObs from 'pages/PostedJobs.js';
import EditJob from 'pages/EditJob';

import { getAllUsers } from 'redux/actions/userActions';
import UserInfo from 'pages/UserInfo';

function App() {
  const { loader } = useSelector(state => state.loaderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, [])

  const user = localStorage.getItem('user');

  return (
    
    <div className='App'>
      {loader && (
        <div className="loader-container">
          <div className="loader-icon">
            <FadeLoader color='#001529' />
          </div>
        </div>
      )}
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace={true} /> }/>

          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace={true} /> }/>

          <Route path="/postjobs" element={user ? <PostJobs /> : <Navigate to="/login" replace={true} /> }/>

          <Route path='/appliedjobs' element={<AppliedJobs />} />

          <Route path="/jobs/:id" element={<JobInfo />} />

          <Route path="/editjob/:id" element={<EditJob />} />

          <Route path="/users/:id" element={<UserInfo/>} />
          
          <Route path="/postedjobs" element={user ? <PostedJObs /> : <Navigate to="/login" replace={true} />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
