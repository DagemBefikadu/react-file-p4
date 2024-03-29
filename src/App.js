// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from "./components/shared/AutoDismissAlert/AutoDismissAlert";
import Header from "./components/shared/Header";
import RequireAuth from "./components/shared/RequireAuth";
import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import ChangePassword from "./components/auth/ChangePassword";
import apiUrl from "./apiConfig";
import CampaignList from "./components/campaign/CampaignList"
import CampaignDetail from "./components/campaign/CampaignDetail"
import Profile from "./components/profile/Profile"
import EditCampaign from "./components/campaign/EditCampaign";
import EditComment from "./components/comment/EditComment";
import About from "./components/about/About";
import ShowContact from "./components/contact/ShowContact";


const App = () => {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);

  const [allCampaigns, setAllCampaigns] = useState([])

  console.log("user in app", user);
  console.log("message alerts", msgAlerts);
  const clearUser = () => {
    console.log("clear user ran");
    setUser(null);
  };

  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id);
    });
  };

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid();
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }];
    });
  };

  useEffect(() => {
    console.log('getting items', allCampaigns.campaigns )
    getCampaign()
  }, [])

  const getCampaign = () => {
    fetch(apiUrl + '/campaigns')
    .then(response=>response.json())
    .then(foundCampaigns=>{
	  setAllCampaigns(foundCampaigns.campaigns)
      console.log('all Campaign: ', foundCampaigns.campaigns)
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return (
    <Fragment>
      <Header user={user} />
      <Routes>
      <Route path="/" element={<Home msgAlert={msgAlert} user={user} />} />
      <Route path="/profile" element={<Profile user={user} reloadCampaign={getCampaign}/>} />
      <Route path="/profile/edit/:id" element={<EditCampaign user={user}/>} />
      <Route path="/favorites" ></Route>
      <Route path="/about" element={<About user={user}/>}/>
      <Route path="/contact" element={<ShowContact user={user}/>}/>
		  <Route path="/campaigns" element={<CampaignList user={user} allCampaigns={allCampaigns} reloadCampaign={getCampaign} />} />
      <Route path="/campaigns/:id" element={<CampaignDetail user={user} />} />
      <Route path="/campaigns/:campaignId/edit/:id" element={<EditComment user={user} />}/>

        
		
		<Route
          path="/sign-up"
          element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path="/sign-in"
          element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path="/sign-out"
          element={
            <RequireAuth user={user}>
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            </RequireAuth>
          }
        />
        <Route
          path="/change-password"
          element={
            <RequireAuth user={user}>
              <ChangePassword msgAlert={msgAlert} user={user} />
            </RequireAuth>
          }
        />
      </Routes>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
    </Fragment>
  );
};

export default App;
