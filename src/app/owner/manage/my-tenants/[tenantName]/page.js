"use client";
import React, { useRef, useState } from "react";
import {
  Grid,
  Button,
  Breadcrumbs,
  ButtonGroup,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import HotelIcon from "@mui/icons-material/Hotel";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { emphasize, styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InfoIcon from "@mui/icons-material/Info";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import pdfIcon from "@/assets/pdfIcon.png";
import tenantImage from "@/assets/tenantImage.png";
import MonthSelect from "@/components/MonthSelect";
import CircleIcon from "@mui/icons-material/Circle";
import rentDue from "@/assets/rentDue.svg";
import { useEffect } from "react";
import Image from "next/image";

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

const TenantDetailPage = () => {
  const router = useRouter();
  const tableRef = useRef(null);

  const handleScrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    console.log("useEffect running"); // Check if this prints
  }, []); // Only runs once when the component mounts

  const rowData = [
    {
      sno: 1,
      transactionType: "Monthly Rent",
      date: "01 Feb 2024",
      amount: "₹10,000",
      receipts: "Receipt 1",
    },
    {
      sno: 2,
      transactionType: "Monthly Rent",
      date: "01 Feb 2024",
      amount: "₹10,000",
      receipts: "Receipt 1",
    },
    {
      sno: 3,
      transactionType: "Monthly Rent",
      date: "01 Feb 2024",
      amount: "₹10,000",
      receipts: "Receipt 1",
    },
    {
      sno: 4,
      transactionType: "Monthly Rent",
      date: "01 Feb 2024",
      amount: "₹10,000",
      receipts: "Receipt 1",
    },
    {
      sno: 5,
      transactionType: "Monthly Rent",
      date: "01 Feb 2024",
      amount: "₹10,000",
      receipts: "Receipt 1",
    },
    // Add more objects as needed
  ];
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid
      container
      style={{
        // background: "#F5F5F5",
        // background: "pink",
        justifyContent: "space-evenly",
        paddingTop: "2%",
        paddingBottom: "3%",
        paddingRight: "2%",
        paddingLeft: "2%",

        height: "100",
        overflowY: "hidden",
      }}
    >
      <Grid
        container
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          // background: "green",
          height: "10%",
          // marginBottom: 0,
        }}
      >
        <Grid
          item
          lg={4}
          style={{
            // background: "red",
            // justifyContent: "space-evenly",
            display: "flex",
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
            // label={`${A}`}
            sx={{
              // marginLeft: "0.25rem",
              margin: 0,
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "400",
              color: "#AEAEAE",
            }}
          />
        </Grid>
      </Grid>
      {/* Tenant  details container starts --> main container sontainting 2 grids fixed and scrollable*/}
      <Grid
        container
        style={{
          height: "88.2vh",
          // background: "black",
          background: "#FFFFFF",
          marginTop: "1rem",

          // paddingLeft: "1rem",
          // paddingRight: "1rem",
        }}
      >
        <Grid
          container
          sx={{
            // background: "orange",
            marginTop: 0,
            background: "#FFFFFF",

            // borderRadius: "7.5px",
            // borderTopLeftRadius: "7.5px",
            // borderTopRightRadius: "7.5px",
            height: "25%",
            justifyContent: "space-evenly",
            paddingLeft: "1rem",
            paddingRight: "1.5rem",
            paddingTop: "1.5rem",
            paddingBottom: "1rem",
            position: "relative",
            '@media (max-width: 600px)': {
              flexDirection: "column"
            }
          }}
        >
          <div
            style={{
              position: "absolute", // Position the rentDue image absolutely
              top: "45%", // Center vertically within the container
              left: 0, // Stick to the left edge
              transform: "translateY(-50%)", // Adjust vertical alignment
              zIndex: 2, // Ensure it's on top
            }}
          >
            <Image src={rentDue} />
          </div>
          <Grid container item lg={2} sx={{
            height: "100%", zIndex: 1,
            '@media (max-width: 600px)': {
              height: "80%",
              width: "30%",
            }
          }}>
            <Grid
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                // background: "red",
              }}
            >
              <Image
                src={tenantImage}
                alt="Tenant image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{
                  borderRadius: "16px",
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            lg={6}
            style={{ height: "100%", paddingLeft: "2rem", width: isSmallScreen ? "78%" : "100%" }}
          >
            <Grid item lg={12}>
              <h1
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "24px",
                  color: "#000000",
                }}
              >
                Akhil Bhatnagar
              </h1>
            </Grid>
            <Grid item lg={12}>
              <p
                style={{
                  marginTop: 0,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "12px" : "14px",
                  color: "#8A8A8A",

                }}
              >
                akhilbhatnagar2001@gmail.com
              </p>
            </Grid>
            <Grid item lg={12}>
              <p
                style={{
                  display: "flex",
                  marginTop: "0.5rem",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "12px" : "14px",
                  color: "#8A8A8A",
                  alignItems: "center",
                }}
              >
                9638527410{" "}
                <CircleIcon
                  sx={{
                    marginTop: 0,
                    fontSize: "0.3rem",
                    color: "#8A8A8A",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                Male
                <CircleIcon
                  sx={{
                    fontSize: "0.3rem",
                    color: "#8A8A8A",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                29 June 2001
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="flex-end"
            lg={4}
            style={{ height: "100%", display: isSmallScreen ? "none" : "flex" }}
          >
            <Button
              onClick={handleScrollToTable}
              sx={{
                textTransform: "none",
                background: "#ECAE5140",
                color: "#D39538",
                width: "60%",
                height: "30%",
                borderRadius: "5px",
                gap: "12px",
              }}
            >
              Transactions
              <ArrowForwardIcon sx={{ fontSize: "small" }} />
            </Button>
          </Grid>
        </Grid>
        {/* divider grid */}
        <Grid
          container
          sx={12}
          style={{
            justifyContent: "space-evenly",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Divider
            style={{
              width: "100%",

              // marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
        </Grid>
        <Grid
          container
          style={{
            height: "73%",
            overflowY: "scroll",
            // background: "yellow",
            background: "#FFFFFF",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            borderBottomLeftRadius: "7.5px",
            borderBottomRightRadius: "7.5px",
          }}
        >
          {/* Pg Info heading--> grid 1 */}
          <Grid
            container
            style={{
              justifyContent: "space-between",
              // background: "green",
              height: "2rem",
            }}
          >
            <Grid
              item
              style={{
                alignItems: "center",
                display: "flex",
                gap: "12px",
                fontWeight: "600",
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#5C5C5C",
              }}
            >
              <HotelIcon sx={{ color: "#5C5C5C" }} />
              PG Information
            </Grid>
            <Grid
              item
              style={{
                alignItems: "center",
                display: "flex",
                fontWeight: "600",
                fontFamily: "Inter",
                fontSize: "14px",
                color: "#379017",
                gap: "8px",
              }}
            >
              <EditOutlinedIcon /> Edit
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              // background: "skyblue",
              marginTop: "0.5rem",
              alignItems: "center",
              // padding: 0,
              height: isSmallScreen ? "9rem" : "8rem",
            }}
          >
            {/* 1st */}
            <Grid
              item
              lg={3.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Block & Floor info 3rd floor
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                3rd floor
              </p>
            </Grid>
            {/* 2nd */}
            <Grid
              item
              lg={3.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Room No.
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                301
              </p>
            </Grid>
            {/* 3rd */}
            <Grid
              item
              lg={2.7}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Sharing Type
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                Double Sahring
              </p>
            </Grid>
            {/* 4 */}
            <Grid
              item
              lg={3.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Joined Date
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                02 Jan 2024
              </p>
            </Grid>
            {/* 5th */}
            <Grid
              item
              lg={3.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Monthly Rent
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                ₹ 10,000
              </p>
            </Grid>
            {/* 6th */}
            <Grid
              item
              lg={2.7}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Last Payment Details
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                ₹10,000 - 01 Dec 2024
              </p>
            </Grid>
          </Grid>
          {/* MoreDetails */}
          <Grid
            container
            style={{
              justifyContent: "space-between",
              marginTop: "0.5rem",
              // background: "green",
              height: "2rem",
            }}
          >
            <Grid
              item
              style={{
                alignItems: "center",
                display: "flex",
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: "16px",
                gap: "12px",
                color: "#5C5C5C",
              }}
            >
              <InfoIcon />
              More Details
            </Grid>
          </Grid>
          <Grid
            container
            lg={12}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              // background: "skyblue",
              marginTop: "0.5rem",
              height: isSmallScreen ? "10rem" : "8rem",
            }}
          >
            <Grid
              item
              lg={4}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Guardian Detail Father - Anoop Kumar
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                Father - Anoop Kumar
              </p>
            </Grid>
            <Grid
              item
              lg={7.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Company/Institute Name
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                Embitel Technologies Pvt. Ltd
              </p>
            </Grid>
            <Grid
              item
              lg={3}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Govt. I’D No.
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                123456789123
              </p>
            </Grid>
            <Grid
              item
              lg={7.5}
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter",
                // background: "green",
                height: "3rem",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: isSmallScreen ? "10px" : "12px",
                  color: "#8A8A8A",
                  margin: 0,
                }}
              >
                Permanent Address
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "0.5rem",
                }}
              >
                # 5147 Ram Garh Colony Bhopal Madhya Pradesh 150097
              </p>
            </Grid>
          </Grid>
          {/* <Grid
            container
            sx={12}
            style={
              {
                // justifyContent: "space-evenly",
              }
            }
          > */}
          <Divider
            style={{
              width: "100%",

              marginTop: "0.8rem",
              marginBottom: "1.5rem",
            }}
          />
          {/* </Grid> */}

          {/* table grid */}
          <Grid container ref={tableRef}>
            <Grid
              container
              item
              lg={12}
              style={{
                justifyContent: "space-between",
                // background: "orange",
                fontWeight: "500",
                fontSize: isSmallScreen ? "11px" : "14px",
                fontFamily: "Inter",
                color: "#5E5E5E",
              }}
            >
              <Grid
                item
                lg={1}
                style={{
                  // background: "blue",
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                S.No.
              </Grid>
              <Grid
                item
                lg={2}
                style={{
                  // background: "blue",
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                Transaction Type{" "}
              </Grid>
              <Grid
                item
                lg={3}
                style={{
                  // background: "blue",
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Date of Transaction{" "}
              </Grid>
              <Grid
                item
                lg={3}
                style={{
                  // background: "blue",
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Amount{" "}
              </Grid>
              <Grid
                item
                lg={2}
                style={{
                  // background: "blue",
                  justifyContent: "space-evenly",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Receipts{" "}
              </Grid>
            </Grid>
            {/* values start */}
            {rowData.map((row, index) => (
              <Grid
                key={index}
                container
                item
                lg={12}
                style={{
                  justifyContent: "space-between",
                  // background: "pink",
                  marginTop: "1rem",
                  fontWeight: "500",
                  fontSize: isSmallScreen ? "11px" : "14px",
                  fontFamily: "Inter",
                  color: "#8A8A8A",
                }}
              >
                <Grid
                  item
                  lg={1}
                  style={{
                    // background: "blue",
                    justifyContent: "space-evenly",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.sno}
                </Grid>
                <Grid
                  item
                  lg={2}
                  style={{
                    // background: "blue",
                    justifyContent: "space-evenly",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {row.transactionType}
                </Grid>
                <Grid
                  item
                  lg={3}
                  style={{
                    // background: "blue",
                    justifyContent: "space-evenly",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.date}
                </Grid>
                <Grid
                  item
                  lg={3}
                  style={{
                    // background: "blue",
                    color: "#000000",
                    justifyContent: "space-evenly",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.amount}
                </Grid>
                <Grid
                  item
                  lg={2}
                  style={{
                    // background: "blue",
                    justifyContent: "space-evenly",
                    display: "flex",
                    // alignItems: "center",
                  }}
                >
                  {/* {row.receipts} */}{" "}
                  <div style={{
                    display: isSmallScreen ? "flex" : "unset",
                  }}>
                    {" "}
                    <Image
                      src={pdfIcon}
                      alt="pdf"
                      style={{ width: isSmallScreen ? "14px" : "20px", height: isSmallScreen ? "16px" : "23px" }}
                    />
                    {/* <IconButton> */}
                    <FileDownloadOutlinedIcon
                      sx={{
                        color: "#000000",
                        fontSize: "medium",
                        marginLeft: isSmallScreen ? "0.1rem" : "1rem",
                        cursor: "pointer",
                      }}
                    />
                    {/* </IconButton> */}
                  </div>
                </Grid>
              </Grid>
            ))}
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid >
  );
};

export default TenantDetailPage;
