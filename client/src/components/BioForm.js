import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function BioForm({ profile }) {
    const { name, age, gender, sexuality, location, bio, avatar } = profile

    return (
        <div className="container-bio">
            <Card id="bio-card" >
                <CardMedia
                    className="card-image"
                    component="img"
                    image={avatar}
                    alt="avatar"
                />
                <CardContent className="card-content">
                    <Typography className="info-name" gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Age: ${age}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Gender: ${gender}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Location: ${location}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Sexuality: ${sexuality}`}</Typography>
                    <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${bio}`}</Typography>
                    <Link to={`/bio/${profile.id}/edit`} className="button">Edit</Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default BioForm;
