"use client";
import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import rohanPurohit from "@/assets/rohanPurohit.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bubbles from "@/assets/bubbles.svg";
import Link from "next/link";

function SideDrawer() {
  const [displaced, setDisplaced] = useState(false);
  const [pg, setPg] = useState("");
  const [ownerName, setOwnerName] = useState("Test");
  const [ownerEmail, setOwnerEmail] = useState("Test@gmail.com");
  const handleIconClick = () => {
    setDisplaced(true);
    setTimeout(() => {
      setDisplaced(false); // Reset the state after the animation completes
    }, 500);
  };

  useEffect(() => {
    setOwnerName(localStorage.getItem("ownerName"));
    setOwnerEmail(localStorage.getItem("ownerEmail"));
  }, [ownerName]);

  const router = useRouter();
  const handleChange = (event) => {
    setPg(event.target.value);
  };

  return (
    <Grid
      container
      style={{
        background: "white",
        height: "100vh",
      }}
    >
      <Image src={bubbles} alt="bubbles" style={{ width: "100%" }} />

      <Grid
        container
        style={{
          marginTop: "-9rem",
          // background: "yellow",
          height: "80%",
          justifyContent: "space-evenly",
        }}
      >
        {" "}
        <Avatar sx={{ width: 80, height: 80, bgcolor: "#6FB258" }}>
          <Image src={rohanPurohit} alt="rohan" />
        </Avatar>
        {/* content begins */}
        <Grid
          container
          item
          lg={11}
          style={{
            justifyContent: "space-evenly",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Grid item lg={10}>
            <h6
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "14px",
                color: "#000000",

                // background: "red",
              }}
            >
              Hi, {ownerName} (Owner)
            </h6>
          </Grid>
          <Grid item lg={7}>
            <p
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: "12px",
                color: "#9E9E9E",
                // background: "red",
              }}
            >
              {ownerEmail}
            </p>
          </Grid>
        </Grid>
        <Grid item lg={11}>
          <Select
            // variant="standard"
            // disableUnderline="true"

            sx={{
              paddingLeft: "1.5rem",
              width: "100%",
              height: "50%",
              fontFamily: "Inter",
              fontSize: "9px",
              fontWeight: "500",
              color: "#000000",
              background: "#F1F1F1",
              border: "none",
              //   height: "40px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#F1F1F1",
              },
              "& .MuiSvgIcon-root": {
                color: "#000000",
              },
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  marginLeft: "0.5rem",
                  maxHeight: 220, // Adjust as needed
                },
              },
            }}
            onChange={handleChange}
          >
            <MenuItem value={1}>
              <Grid container direction="column">
                <Grid item>Varthur Shri Kaveri Girls</Grid>
                <Grid item>Studio Girls SKPG:01</Grid>
              </Grid>
            </MenuItem>
            <MenuItem value={2}>
              <Grid container direction="column">
                <Grid item>Varthur Shri Kaveri Men</Grid>
                <Grid item>Studio Girls SKPG:02</Grid>
              </Grid>
            </MenuItem>
            <MenuItem value={3}>
              <Grid container direction="column">
                <Grid item>Varthur Shri Kaveri Colive</Grid>
                <Grid item>Studio Girls SKPG:03</Grid>
              </Grid>
            </MenuItem>
          </Select>
        </Grid>
        <Grid
          container
          item
          lg={11}
          style={{
            height: "70px",
            // background: "yellow",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            lg={6}
            style={{
              background: "#3790172E",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                color: "#379017",
                marginBottom: "6px",
              }}
            >
              15
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "12px",
                marginTop: "-1rem",
                color: "#379017",
              }}
            >
              Beds Available
            </p>
          </Grid>
          <Grid
            item
            lg={5.9}
            style={{
              background: "#FF4B4B2E",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "24px",
                color: "#FF4B4B",
                marginBottom: "6px",
              }}
            >
              16
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                marginTop: "-1rem",
                fontWeight: "400",
                fontSize: "12px",
                color: "#FF4B4B",
              }}
            >
              Beds Occupied
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={11}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <h6
            style={{
              fontFamily: "Inter",
              marginTop: 0,
              marginBottom: 0,
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Actions
          </h6>
          <Grid
            container
            item
            lg={12}
            style={{
              marginTop: "1rem",
              height: "53px",
              justifyContent: "space-evenly",
              background: "#FFFFFF",
              borderRadius: "5px",
              boxShadow: "0px 1px 12px 0px #D2D2D28C",
            }}
          >
            <Grid
              item
              lg={8}
              style={{
                // background: "pink",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",

                  color: "#737373",
                }}
              >
                Approve Cash Payments
              </p>
            </Grid>
            <Grid
              item
              lg={2}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <IconButton
                sx={{
                  background: "#6FB258",
                  marginLeft: displaced ? "15px" : 0, // Adjust marginLeft when displaced
                  transition: "margin-left 0.5s",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#3790172E",
                  },
                }}
                onClick={handleIconClick}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    color: displaced ? "#6FB258" : "#FFFFFF",
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
          {/* 2nd */}
          <Grid
            container
            item
            lg={12}
            style={{
              marginTop: "1rem",
              height: "53px",
              justifyContent: "space-evenly",
              background: "#FFFFFF",
              borderRadius: "5px",
              boxShadow: "0px 1px 12px 0px #D2D2D28C",
            }}
          >
            <Grid
              item
              lg={8}
              style={{
                // background: "pink",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",

                  color: "#737373",
                }}
              >
                Make New Announcement
              </p>
            </Grid>
            <Grid
              item
              lg={2}
              style={{
                // background: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <IconButton
                // disableFocusRipple
                // disableTouchRipple
                sx={{
                  background: "#6FB258",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#3790172E",
                  },
                }}
              >
                <AddIcon
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1rem",
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        {/* others begin  */}
        <Grid container item lg={11}>
          <h6
            style={{
              fontFamily: "Inter",
              marginTop: 0,
              marginBottom: 0,
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Others
          </h6>
          <Grid conatiner item lg={12}>
            <Grid item>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                4 Tenants{" "}
                <span
                  style={{
                    fontWeight: "500",
                    color: "#737373",
                    marginLeft: "0.5rem",
                  }}
                >
                  serving the
                </span>{" "}
                Notice Period for Next Month{" "}
                <Link href="" style={{ color: "#6FB258" }}>
                  watch out →
                </Link>
              </p>
            </Grid>
            {/* 2*/}
            <Grid item>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                2 New Tenants
                <span
                  style={{
                    fontWeight: "500",
                    color: "#737373",
                    marginLeft: "0.5rem",
                  }}
                >
                  serving the
                </span>{" "}
                comes in your PG this Month {"  "}
                <Link href="" style={{ color: "#6FB258" }}>
                  watch out →
                </Link>
              </p>
            </Grid>
            {/* 3 */}
            <Grid item>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                5 Tenants Left
                <span
                  style={{
                    fontWeight: "500",
                    color: "#737373",
                    marginLeft: "0.5rem",
                  }}
                >
                  comes in your PG this Month
                </span>{" "}
                <Link href="" style={{ color: "#6FB258" }}>
                  settle the amount if not →
                </Link>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SideDrawer;
