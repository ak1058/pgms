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
  Typography,
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

const MyTenants = () => {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    console.log("useEffect running"); // Check if this prints
  }, []); // Only runs once when the component mounts

  const renderComponent = (tab) => {
    switch (tab) {
      case 1:
        return <TotalTenants />;
      case 2:
        return <JoinedThisMonth />;
      case 3:
        return <Vacating />;
      case 4:
        return <OnNotice />;
      default:
        return null;
    }
  };
  const getTabLabel = (tab) => {
    switch (tab) {
      case 1:
        return "Total Tenants";
      case 2:
        return "Joined this Month";
      case 3:
        return "Coming Next Month";
      case 4:
        return "On Notice";
      default:
        return "";
    }
  };
  const isActive = (tabNumbers) => tabNumbers.includes(activeTab);
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
        margin: "auto",
        justifyContent: "space-evenly",
        paddingTop: "2%",
        paddingBottom: "1%",
        paddingRight: "2%",
        paddingLeft: "2%",
        margin: "auto",
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <Grid
        container
        style={{ justifyContent: "space-between", alignItems: "center" }}
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
            My Tenants
          </h1>
          <NavigateNextIcon sx={{ color: "#AEAEAE", marginLeft: "0.5rem" }} />
          <StyledBreadcrumb
            label={`${getTabLabel(activeTab)}`}
            sx={{
              // marginLeft: "0.25rem",
              margin: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "400",
              color: "#AEAEAE",
              // background:"red",
            }}
          />
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
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    marginRight: "-0.25rem",
                  }}
                >
                  <IconButton onClick={() => setShowInput(!showInput)}>
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
                transition: "width 0.3s ease", // Smooth transition for width
                '@media (max-width: 600px)': {
                  width: showInput ? "100%" : "50px", // Dynamic width for small screens
                },
              },
            }}
            sx={{
              width: "100%",
              '@media (min-width: 600px)': {
                width: showInput ? "100%" : "100%",
              },
            }}
          />

        </Grid>
      </Grid>

      <Grid
        lg={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          // background: "yellow",
          marginTop: "2rem",
          // marginBottom: "2rem",
          alignItems: "center",
        }}
      >
        <ButtonGroup
          // variant="text"
          aria-label="Basic button group"
          sx={{
            // background: "yellow",
            background: "white",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            height: "100px",
            width: "100%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Button
            // variant="text"
            variant={isActive([1, 2]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(1)}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: 0,
              borderColor: "white",
              boxShadow: "none",
              textTransform: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: isActive([1, 2]) ? "white" : "#F4F4F4",
              borderBottom:
                activeTab === 1 ? "3px solid #000000" : "3px solid #fff",
              color: isActive([1, 2]) ? "#000000" : "#AEAEAE",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ebedeb";
              e.currentTarget.style.borderBottom = "3px solid white";
              e.currentTarget.style.borderTop = "none";
              e.currentTarget.style.borderRight = "none";
              e.currentTarget.style.borderLeft = "none";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              80
            </h1>
            <Typography
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                },
              }}
            >
              Total Tenants
            </Typography>
          </Button>

          <Button
            data-aos-easing="ease-in-sine"
            // variant="text"
            variant={isActive([1, 2]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(2)}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: 0,
              borderColor: "white",
              boxShadow: "none",
              textTransform: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: isActive([1, 2]) ? "white" : "#F4F4F4",
              borderBottom:
                activeTab === 2 ? "3px solid #379017" : "3px solid #fff",
              color: isActive([1, 2]) ? "#379017" : "#AEAEAE",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ebedeb";
              e.currentTarget.style.borderBottom = "3px solid white";
              e.currentTarget.style.borderTop = "none";
              e.currentTarget.style.borderRight = "none";
              e.currentTarget.style.borderLeft = "none";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              02
            </h1>
            <Typography
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                },
              }}
            >
              Joined this Month
            </Typography>
          </Button>

          <Button
            // variant="text"
            variant={isActive([3, 4]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(3)}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: 0,
              borderColor: "white",
              boxShadow: "none",
              textTransform: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: isActive([3, 4]) ? "white" : "#F4F4F4",
              borderBottom:
                activeTab === 3 ? "3px solid #D89A3D" : "3px solid #fff",
              color: isActive([3, 4]) ? "#D89A3D" : "#AEAEAE",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ebedeb";
              e.currentTarget.style.borderBottom = "3px solid white";
              e.currentTarget.style.borderTop = "none";
              e.currentTarget.style.borderRight = "none";
              e.currentTarget.style.borderLeft = "none";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              04
            </h1>
            <Typography
              variant="h2"
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                },
              }}
            >
              Coming next Month
            </Typography>
          </Button>
          <Button
            // variant="text"
            variant={isActive([3, 4]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(4)}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: 0,
              borderColor: "white",
              boxShadow: "none",
              borderBottom:
                activeTab === 4 ? "3px solid #CDD048" : "3px solid #fff",
              textTransform: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: isActive([3, 4]) ? "white" : "#F4F4F4",
              color: isActive([3, 4]) ? "#CDD048" : "#AEAEAE",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ebedeb";
              e.currentTarget.style.borderBottom = "3px solid white";
              e.currentTarget.style.borderTop = "none";
              e.currentTarget.style.borderRight = "none";
              e.currentTarget.style.borderLeft = "none";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <h1
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              05
            </h1>
            <Typography
              variant="h2"
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                },
              }}
            >
              On Notice
            </Typography>
          </Button>
        </ButtonGroup>
      </Grid>
      {/* selected component rendered */}
      <Grid item xs={12}>
        {renderComponent(activeTab)}
      </Grid>
    </Grid>
  );
};

export default MyTenants;
