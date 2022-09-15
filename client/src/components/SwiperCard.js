import {React, useState} from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Info from "./Info.js"

function SwiperCard({ profile }) {
    const [showBio, setShowBio] = useState(false)
    return (
      <div>
      {showBio? <div className="card">
      <Info profile = {profile} setShowBio={setShowBio} showBio={showBio}/></div>: <div className="card">
      <CardMedia
        className="img"
        component="img"
        image={profile.avatar}
        alt="profile picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>setShowBio(!showBio)}>
          Bio
        </Button>
      </CardActions>
    </div>}</div>
  );
}

export default SwiperCard;
