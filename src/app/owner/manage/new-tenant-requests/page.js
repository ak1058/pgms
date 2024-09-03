"use client";
import React, { useState } from "react";
import {
  Grid,
  Button,
  Breadcrumbs,
  ButtonGroup,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import Vacating from "@/components/VacatingRentAnalysis";
import OnNotice from "@/components/OnNoticeRentAnalysis";
import { emphasize, styled } from "@mui/material/styles";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import MonthSelect from "@/components/MonthSelect";
import { useEffect } from "react";
import TotalTenants from "@/components/TotalTenants";
import JoinedThisMonth from "@/components/JoinedThisMonth";
import NewTenantReq from "@/components/NewTenantReq";
const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800],
  height: theme.spacing(3),
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  "&:hover, &:focus": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900],
  },
}));

const NewTenantPage = () => {
  useEffect(() => {
    console.log("useEffect running"); // Check if this prints
  }, []); // Only runs once when the component mounts
  const [showInput, setShowInput] = useState(false);
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowInput(false);
    }
  };
  return (
    <Grid
      container
      style={{
        background: "#F5F5F5",

        justifyContent: "space-evenly",
        paddingTop: "2%",
        paddingBottom: "1%",
        paddingRight: "2%",
        paddingLeft: "2%",
        margin: "auto",
        height: "100%",
        overflowY: "hidden",
        // background: "red",
      }}
    >
      <Grid
        container
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          // background: "green",
          height: "10%",
        }}
      >
        <Grid
          item
          lg={4}
          style={{
            // background: "red",
            // justifyContent: "space-evenly",
            display: showInput ? "none" : "flex",
            flexDirection: "row",
            // alignItems: "center",

          }}
        >
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "600",
              margin: 0,
            }}
          >
            New Tenant's Requests
          </h1>
          {/* <NavigateNextIcon sx={{ color: "#AEAEAE", marginLeft: "0.5rem" }} /> */}
        </Grid>
        <Grid
          item
          lg={3}
          style={{
            // background: "green",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: showInput ? "100%" : "unset",
          }}
        >
          <TextField
            id="searchBarMyTenants"
            placeholder="Search your tenants"
            onBlur={handleBlur}
            onFocus={() => setShowInput(true)}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    marginRight: "-0.25rem",
                  }}
                >
                  <IconButton onClick={() => setShowInput(true)}>
                    <SearchRoundedIcon style={{ color: "#737373", fontSize: "small" }} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    marginLeft: "-0.25rem",
                  }}
                >
                  <IconButton>
                    <TuneRoundedIcon style={{ color: "#737373", fontSize: "small" }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "5px",
                color: "#737373",
                height: 34,
                fontSize: "12px",
                fontWeight: "300",
                fontFamily: "Inter",
                background: "#FFFFFF",
                boxShadow: "0px 0px 12px 0px #D2D2D240",
                paddingLeft: 0,
                paddingRight: 0,
                transition: "width 0.3s ease",
                '@media (max-width: 600px)': {
                  width: showInput ? "100%" : "50px",
                },
              },
            }}
            sx={{
              width: "100%",
              '@media (min-width: 600px)': {
                width: showInput ? "100%" : "100%", // Ensure proper width on larger screens
              },
            }}
          />
        </Grid>
      </Grid>

      {/* NewTenantReq Component rendered*/}
      <Grid item xs={12} style={{ background: "yellow", height: "88%" }}>
        {/* {renderComponent(activeTab)} */}
        <NewTenantReq />
      </Grid>
    </Grid>
  );
};

export default NewTenantPage;
