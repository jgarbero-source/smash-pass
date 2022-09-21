import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard.js";

function Matches({ currentUser }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`/matches/${currentUser.id}`).then((r) => {
      if (r.ok) {
        r.json().then(setMatches(r));
      } else console.log("Nope");
    });
  });

  function handleUnmatch(matchId) {
    fetch(`matches/${matchId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: { swipe: false }
    })
  }

  return (
    <div className="matches-card">
      {matches.map(profile => (
        <ProfileCard
          profile={profile}
          key={profile.id}
          currentUser={currentUser}
          handleUnmatch={handleUnmatch}
        />
      ))}
    </div>
  );
}

export default Matches;
