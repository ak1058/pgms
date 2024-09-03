"use client";
import "@/styles/tailwind.css"
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
import Pending from "@/components/PendingRentAnalysis";
import AlreadyPaid from "@/components/AlreadyPaidRentAnalysis";
import Vacating from "@/components/VacatingRentAnalysis";
import OnNotice from "@/components/OnNoticeRentAnalysis";
import { emphasize, styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import MonthSelect from "@/components/MonthSelect";
import { useEffect } from "react";
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

const RentAnalysis = () => {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    console.log("useEffect running"); // Check if this prints
  }, []); // Only runs once when the component mounts


  const renderComponent = (tab) => {
    switch (tab) {
      case 1:
        return <Pending />;
      case 2:
        return <AlreadyPaid />;
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
        return "Pending";
      case 2:
        return "Already Paid";
      case 3:
        return "Vacating";
      case 4:
        return "On Notice";
      default:
        return "";
    }
  };
  const isActive = (tabNumbers) => tabNumbers.includes(activeTab);
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
        overflowY: "hidden"
      }}
    >
      <Grid
        container
        style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "nowrap" }}
      >
        <Grid
          item
          lg={3.5}
          style={{
            // background: "red",
            // justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          id='rent'
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "600",
              margin: 0,
              '@media (max-width:600px)': {
                fontSize: "12px",
              },
            }}
          >
            Rent Analysis
          </Typography>

          <NavigateNextIcon sx={{ color: "#AEAEAE", marginLeft: "0.5rem", marginLeft: { xs: "0px" } }} />
          <StyledBreadcrumb
            sx={{
              fontSize: {
                xs: "12px",
                sm: '14px',
              },
              paddingLeft: {
                xs: "0rem",
              },
              color: "#AEAEAE",
            }}
            label={`${getTabLabel(activeTab)}`}
          />
        </Grid>

        <Grid
          item
          lg={5.2}
          style={{
            // background: "green",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="max-sm:hidden" id="searchBar"
            onBlur={() => {
              document.getElementById('searchBar').classList.add('max-sm:hidden');
              document.getElementById('searchIcon').classList.add('max-sm:block');
              document.getElementById('rent').style.display = 'flex';
            }}
          >
            <TextField
              // {...params}
              placeholder="Search your tenants "
              InputProps={{
                // ...params.InputProps,

                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      marginRight: "-0.25rem",
                    }}
                  >
                    <IconButton>
                      <SearchRoundedIcon
                        style={{ color: "#737373", fontSize: "small" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "5px",
                  width: "100%",
                  color: "#737373",
                  height: 34,
                  fontSize: "12px",
                  fontWeight: "300",
                  fontFamily: "Inter",
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 12px 0px #D2D2D240",
                },
              }}
            />
          </div>
          <div className="py-1 pt-[0.30rem] px-3 cursor-pointer rounded-l-lg bg-gray-50 hidden max-sm:block" id="searchIcon" onClick={() => { document.getElementById('searchBar').classList.remove("max-sm:hidden"), document.getElementById('searchIcon').classList.remove('max-sm:block'), document.getElementById('rent').style.display = "none" }}>
            <SearchRoundedIcon
              style={{ color: "#737373", fontSize: "small" }}
            />
          </div>

          <MonthSelect />
        </Grid>
      </Grid>

      <Grid
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          // background: "yellow",
          marginTop: "2rem",
          // marginBottom: "2rem",
          alignItems: "center",
          width: {
            xs: '100%',
          }
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
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >

          <Button
            // variant="text"
            variant={isActive([1, 2]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(1)}
            sx={{
              width: "25%",
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
                activeTab === 1 ? "3px solid #E78D05" : "3px solid #fff",
              color: isActive([1, 2]) ? "#E78D05" : "#AEAEAE",
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
            <Typography
              variant="h1"
              sx={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                }
              }}
            >
              59
            </Typography>
            <Typography
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                fontSize: {
                  xs: '10px',
                  sm: '14px',
                },
              }}
            >
              Pending
            </Typography>
          </Button>

          <Button
            data-aos-easing="ease-in-sine"
            // variant="text"
            variant={isActive([1, 2]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(2)}
            sx={{
              width: "25%",
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
            <Typography
              variant="h1"
              sx={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                }
              }}
            >
              07
            </Typography>
            <Typography
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                fontSize: {
                  xs: '10px',
                  sm: '14px',
                }
              }}
            >
              Already Paid
            </Typography>
          </Button>

          <Button
            // variant="text"
            variant={isActive([3, 4]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(3)}
            sx={{
              width: "25%",
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
            <Typography
              variant="h1"
              sx={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                }
              }}
            >
              03
            </Typography>
            <Typography
              variant="h2"
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                fontSize: {
                  xs: "10px",
                  sm: '14px',
                }
              }}
            >
              Vacating
            </Typography>
            <Typography
              sx={{
                marginTop: "-1rem",
                fontSize: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                marginTop: {
                  xs: "-0.8rem",
                  sm: '-1rem',
                }
              }}
            >
              this month
            </Typography>
          </Button>

          <Button
            // variant="text"
            variant={isActive([3, 4]) ? "contained" : "outlined"}
            onClick={() => setActiveTab(4)}
            sx={{
              width: "25%",
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
            <Typography
              variant="h1"
              sx={{
                margin: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                fontSize: {
                  xs: "20px",
                  sm: '24px',
                }
              }}
            >
              04
            </Typography>
            <Typography
              sx={{
                marginTop: 0,
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                fontSize: {
                  xs: "10px",
                  sm: '14px',
                }
              }}
            >
              On Notice
            </Typography>
            <Typography
              sx={{
                marginTop: "-1rem",
                fontSize: "8px",
                fontFamily: "Inter",
                fontWeight: "400",
                marginTop: {
                  xs: "-0.6rem",
                  sm: '-1rem',
                }
              }}
            >
              for upcoming months
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

export default RentAnalysis;
