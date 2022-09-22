import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard.js";

function Matches({ currentUser }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`/users/${currentUser.id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data.love_is_in_the_air)
          setMatches(data.love_is_in_the_air)
        });
      } else console.log("Nope");
    });
  }, []);

  function handleUnmatch(itsNotYouItsMe) {
    
    let match = currentUser.matches.find(x => x.target = itsNotYouItsMe)
    console.log(match)
    fetch(`matches/${match.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ swipe: false })
    }).then(r=> r.json().then(data => {
      console.log(data)

    }))
  }

  return (
    <div className="matches-card">
      {matches.length > 0 ? matches.map(profile => (
        <ProfileCard
          profile={profile}
          key={profile.id}
          currentUser={currentUser}
          handleUnmatch={handleUnmatch}
        />
      )) : <p>You don't have any matches currently</p>
    }
    </div>
  );
}

export default Matches;
