import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup({
  open,
  handleClose, 
title, content, large, name, role, avatar
}) {
  const { v4: uuidv4 } = require("uuid");
  

  const handleEdit = () => {
    handleClose();
   
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
      >
        <div className="crossIcon">
          <CloseIcon onClick={handleClose}/>
        </div>
        <Paper>
          <img
            className="poupImg"
            src={large}
            alt=""
          />
        
        <Box sx={{ width: "330px", padding: "10px",  }}>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", alignItems: "center",margin: "20px 0" }}
          >
            <Avatar
              alt={avatar}
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <Typography variant="body2" color="text.secondary">
              {name} - {role}
            </Typography>
          </Stack>
        </Box>
        </Paper>
      </Dialog>
    </div>
  );
}
