import * as React from "react";
import { Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import { useState } from "react";
import Popup from "./Popup";

const Cards = ({ title, content, large, name, role, avatar }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 350,margin:"20px" }}>
        <div className="hoverContainer" 
       
        onClick={handleOpen}><p>Learn More</p></div>
        <CardMedia
          component="img"
          height="140"
          image={large}
          alt="green iguana"
        />

        
        <CardContent>
          <Box className="circleContainer">
            <div className="circle"></div>
            <div className="circle bgcolor"></div>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: "20px" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 15px",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {name} - {role}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Nov 25, 2020
          </Typography>
        </CardActions>
      </Card>
      <Popup open={open} handleClose={handleClose} 
      title={title}
      content={content}
      large={large}
      name={name}
      role={role}
      avatar={avatar}
      />
    </div>
  );
};

export default Cards;
