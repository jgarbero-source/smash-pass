import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Matches from "./components/Matches.js"
import Bio from "./components/Bio.js"
import NavBar from "./components/NavBar.js"
import Info from "./components/Info.js"
import Swiper from "./components/Swiper.js"
import EditForm from "./components/EditForm";
import NewUser from "./components/NewUser";
import Footer from "./components/Footer";

function App() {

  const userURL = "/me"
  const [currentUser, setCurrentUser] = useState([]);
  const profilesURL = "/profiles"
  const [profiles, setProfiles] = useState([]);
  const [profileCount, setProfileCount] = useState(0);
  const [isItTheEnd, setIsItTheEnd] = useState(false)
  const [ background, setBackground ] = useState(true)

  useEffect(() => {
    function goGetEm() {
      fetch(userURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCurrentUser(data);
          const user = data.id
          fetch(`${profilesURL}/swiper/${user}`)
            .then((response) => response.json())
            .then(data => {
              setProfiles(data)
              console.log(data)
            })
        })
    }
    goGetEm()
  }, []);
  function handleBackground() {
    setBackground(!background)
  }

  return (
    <div className="page-container">


      <NavBar />
      <div className = {background ?  "content-wrap" : `content-wrap-new`}>
      
        <Routes>

          <Route exact path="/" element={<Bio bio={currentUser} setCurrentUser ={setCurrentUser} />}>
          </Route>

          <Route path="/swiper" element={
            <Swiper currentUser={currentUser} profiles={profiles} profileCount={profileCount} setProfileCount={setProfileCount} isItTheEnd={isItTheEnd} setIsItTheEnd={setIsItTheEnd} />}>


          </Route>
          <Route path="/matches" element={<Matches currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
          </Route>
          <Route path="/newUser" element={<NewUser setIsItTheEnd = {setIsItTheEnd} setProfiles={setProfiles} profiles={profiles} />}>
          </Route>
          <Route path="/:id/info" element={<Info />}>
          </Route>


          <Route path="/bio/:id/edit" element={<EditForm currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
        </Routes>
        <button className="funny-button" onClick={handleBackground}>funnny button</button>

      </div>
      <Footer />
    </div>
  )
}

export default App;
