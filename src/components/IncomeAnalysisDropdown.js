import React, { useState } from "react";
import { Grid, Popover, List, ListItem, ListItemText } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MyComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid
      item
      lg={3.5}
      style={{
        background: "#FFFFFF",
        paddingLeft: "2rem",
        borderRadius: "7.5px",
        height: "6rem",
        fontFamily: "Inter",
        alignItems: "center",
        fontSize: "24px",
        color: "#379017",
        fontWeight: "700",
        position: "relative",
      }}
    >
      <Grid item style={{ fontFamily: "Inter", fontSize: "12px" }}>
        <p style={{ fontWeight: "700", color: "#272727" }}>Already Paid</p>
      </Grid>
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        225000 <ArrowDropDownIcon />
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Rent" secondary="225000" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Deposits" secondary="125000" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Others" secondary="50000" />
          </ListItem>
        </List>
      </Popover>
    </Grid>
  );
};

export default MyComponent;
