import React from "react";
import SwiperCard from "./SwiperCard.js";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

function Swiper({ currentUser, profiles, setProfiles }) {
  const matchURL = "/matches";

  function handleSwipe(bool) {
    let meth = "POST";
    let addy = matchURL;
    let obj = {
      user_1_match: bool,
      user_2_match: null,
      user_1_id: currentUser.id,
      user_2_id: profiles[0].id,
    };
    if (
      profiles[0].matches.find((match) => match.user_2_id === currentUser.id)
    ) {
      meth = "PATCH";
      addy = `${matchURL}/${match.id}`;
      obj = { user_1_match: bool };
    }
    fetch(addy, {
      method: meth,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    }).then(response => {if (response.ok) {
        response.json().then((data) => {
          setProfiles(profiles.slice(1));
          console.log(data);
        });
      } else {
        console.log("Nope");
      }
    })
  }

  console.log(profiles);

  return (
    <div>
      {profiles.length === 0 ? (
        <h3>Sorry, there are no more users in your area.</h3>
      ) : (
        <div className="card">
          <Card sx={{ maxWidth: 300 }}>
            <span>
              <SwiperCard profile={profiles[0]} />
              <Button onClick={() => handleSwipe(false)}>❌</Button>
              <Button onClick={() => handleSwipe(true)}>✔️</Button>
            </span>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Swiper;
