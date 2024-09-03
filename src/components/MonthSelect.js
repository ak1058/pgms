"use client";
import React, { useEffect, useState } from "react";
import { Button, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MonthSelect = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth(); // Get current month index
  const currentMonth = months[currentMonthIndex]; // Get current month name
  const currentYear = currentDate.getFullYear(); // Get current year
  const initialSelectedValue = `${currentMonth} ${currentYear}`; // Default to current month and year

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue); // Set initial state

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (value, year) => {
    setSelectedValue(`${value} ${year}`);
    handleClose();
  };

  const generateMonthOptions = () => {
    const options = [];
    for (let i = 0; i < 7; i++) {
      const monthIndex = (currentMonthIndex - i + 12) % 12;
      const monthName = months[monthIndex];
      let year = currentYear;
      if (monthIndex > currentMonthIndex) {
        year--; // Adjust the year if the month index loops backward
      }

      options.push(
        <MenuItem
          key={monthName}
          onClick={() => handleMenuItemClick(monthName, year)}
          disableRipple
          style={{
            color: "#737373",
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          {monthName} {year}
        </MenuItem>
      );
    }
    return options.reverse(); // Reverse to maintain chronological order
  };

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleToggle}
        sx={{
          textTransform: "none",
          justifyContent: "space-between",
          background: "white",
          borderRadius: "5px",
          color: "#737373",
          fontFamily: "Inter",
          fontWeight: "500",
          width: "155px",
          fontSize: "12px",
          boxShadow: "0px 0px 12px 0px #D2D2D240",

          "&.MuiButtonBase-root:hover": {
            bgcolor: "white",
          },
          '@media (max-width:600px)': {
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            boxShadow: "none",
          },
        }}
      >
        {selectedValue}
      </Button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            overflowY: "auto",
            width: "155px",
            maxHeight: "100px",
            zIndex: 1,
          }}
        >
          {generateMonthOptions()}
        </div>
      )}
    </div>
  );
};

export default MonthSelect;
