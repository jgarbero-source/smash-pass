import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Info({ profile, setShowBio, showBio }) {
  const { name, age, gender, sexuality, location, bio, avatar } = profile;

  return (
    <div>
      <Card className="info-card" sx={{ maxWidth: 300 }}>
        <CardMedia
          className="card-image"
          component="img"
          image={avatar}
          alt="avatar"
        />
        <CardContent className="card-content">
          <Typography
            className="info-name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            className="card-desc"
            variant="subtitle1"
          >{`Age: ${age}`}</Typography>
          <Typography
            className="card-desc"
            variant="subtitle1"
          >{`Gender: ${gender}`}</Typography>
          <Typography
            className="card-desc"
            variant="subtitle1"
          >{`Location: ${location}`}</Typography>
          <Typography
            className="card-desc"
            variant="subtitle1"
          >{`Sexuality: ${sexuality}`}</Typography>
          <Typography
            className="card-desc"
            variant="body1"
            color="text.secondary"
          >{`Bio: ${bio}`}</Typography>
          <Button className="button" onClick={()=>setShowBio(!showBio)}>
            <ArrowBackIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Info;
