import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import Matches from "./components/Matches.js";
import Bio from "./components/Bio.js";
import NavBar from "./components/NavBar.js";
import Info from "./components/Info.js";
import Swiper from "./components/Swiper.js";
import EditForm from "./components/EditForm";
import NewUser from "./components/NewUser";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import UserNavBar from "./components/UserNavBar";

function App() {
  const userURL = "/me";
  const [currentUser, setCurrentUser] = useState(null);
  const profilesURL = "/users";
  const [profiles, setProfiles] = useState([]);
  const [background, setBackground] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    goGetEm();
  }, []);
  // function handleBackground() {
  //   setBackground(!background);
  // }
  async function goGetEm() {
    await fetch(userURL)
      .then((response) => {
        if (response.ok) {
          response.json().then((client) => {
            console.log(client);
            setCurrentUser(client)
          }).then(
            fetch(profilesURL).then((response) => {
              if (response.ok) {
                response.json().then((data) => {
                  if (currentUser) {
                    let dataMinus = data.filter(
                      (element) => element.id != currentUser.id
                    );
                    console.log(dataMinus);
                    setProfiles(dataMinus);
                  }
                })
              } else {
                console.log("Nope");
              }
            })
          )
        } else {
          console.log("Nope");
        }
      })
  }

  function handleLogin(user) {
    setCurrentUser(user);
  }

  function doLogout() {
    navigate("/home");
    setCurrentUser(null);
  }

  return (
    <div className="page-container">
      <div className={background ? "content-wrap" : `content-wrap-new`}>
        {currentUser ? (
          <UserNavBar currentUser={currentUser} doLogout={doLogout} />
        ) : (
          <NavBar />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={<Bio user={currentUser} setCurrentUser={setCurrentUser} />}
          ></Route>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/swiper"
            element={
              <Swiper
                currentUser={currentUser}
                profiles={profiles}
                setProfiles={setProfiles}
              />
            }
          ></Route>
          <Route
            path="/matches"
            element={
              <Matches
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="/newUser"
            element={
              <NewUser
                setProfiles={setProfiles}
                profiles={profiles}
              />
            }
          ></Route>
          <Route
            path="/bio/:id/edit"
            element={
              <EditForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
        </Routes>
        {/* <button className="funny-button" onClick={handleBackground}>
          funnny button
        </button> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
