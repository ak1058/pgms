"use client";
import '@/styles/tailwind.css'
import React, { useEffect, useState } from "react";
import { Grid, Button, Divider, Popover, IconButton, CircularProgress, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MonthSelect from "@/components/MonthSelect";
import buildings from "@/assets/Buildings.svg";
import AnalysisChart from "@/components/AnalysisChart";
import PieChart from "@/components/PieChart";
import axios from "axios";
import ProgressBar from "@/components/ProgressBar";
import SmallAnalysisChart from "@/components/SmallAnalysisChart";
import Image from 'next/image';
import dot from '@/assets/dot.svg'
import pana from '@/assets/pana.svg'
import pana2 from '@/assets/pana2.svg'

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);
  const [totalRent, setTotalRent] = useState("N/A");
  const [totalTenants, setTotalTenants] = useState("N/A");
  const [loading, setLoading] = useState(true);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const getPgId = () => {
    return localStorage.getItem("ownerPGId"); // Fetch PG ID from local storage
  };
  const fetchTotalRent = async () => {
    const pgId = getPgId();
    if (pgId) {
      try {
        console.log("hhh")
        const response = await axios.get(`https://backend.deskmateai.com/admin/totalRent/${pgId}`);
        if (response.status == 200) {
          console.log("123")
          const data = response.data;
          console.log(data) // The JSON response from the server
          setTotalRent(data.totalRent); // Set total rent
          setTotalTenants(data.totalTenants); // Set total tenants
          setLoading(false); // Data fetched, stop loading
          console.log("yes")
        } else {
          console.error("Failed to fetch data:", response.statusText);
          setLoading(false); // Stop loading even on error
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false); // Stop loading if there's an error
      }
    } else {
      console.warn("PG ID not found in local storage");
      setLoading(false); // Stop loading if no PG ID
    }
  };

  useEffect(() => {
    console.log("useEffect ghh");
    fetchTotalRent() // Check if this prints
  }, [totalRent]);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  let id;
  id = open ? "simple-popover" : undefined;
  id = open2 ? "simple-popover" : undefined;
  id = open3 ? "simple-popover" : undefined;

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      // Grid outer
      container
      style={{
        justifyContent: "space-evenly",
        paddingTop: "3.3%",
        paddingBottom: isSmallScreen ? "25%" : "1%",
        paddingRight: "2%",
        paddingLeft: "2%",
        margin: "auto",
      }}
    >
      <Grid
        container
        // grid 1
        style={{
          justifyContent: "space-between",
          // background: "yellow",
          paddingBottom: '1%',
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Rent Collection
        </h1>
        <MonthSelect />
      </Grid>
      <Grid
        container
        // grid 2
        style={{
          // background: "pink",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <Grid
          container
          item
          lg={8}
          sx={{
            backgroundImage: `url(${pana.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            justifyContent: "space-evenly",
            borderRadius: "7.5px",
            // background:'#fff',
            height: {
              xs: '20rem',
              sm: "9.25rem"
            },
            marginBottom: {
              xs: "1rem",
            },
            // background: "red",
            fontFamily: "Inter",
            alignItems: "center",
            boxShadow: "0px 0px 12px 0px #D2D2D240",
          }}
        >
          <Grid
            item
            lg={3}
            sx={{
              fontSize: "24px",
              color: "#379017",
              // background: "pink",
              fontWeight: "700",
              '@media (max-width:600px)': {
                display: 'flex',
                justifyContent: 'space-between',
                width: '86%',
              },
            }}
            className=' space-y-3 max-sm:space-y-0'
          >
            <Grid className='space-y-3 max-sm:space-y-0'>
              <Grid>
                ₹ 2,25,000
              </Grid>
              <Grid item style={{ fontFamily: "Inter", fontSize: "12px" }}>
                <p style={{ fontWeight: "700", color: "#272727" }}>
                  21/{totalTenants}
                  <span style={{ fontWeight: "500", color: "#737373" }}>
                    {"  "} Already Paid
                  </span>
                </p>
              </Grid>
            </Grid>
            <Button
              sx={{
                fontFamily: "Inter",
                background: "#ECAE512E",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "12px",
                color: "#ECAE51",
                alignItems: "center",
                justifyContent: "space-evenly",
                '@media (max-width:600px)': {
                  padding: "0px 16px",
                  height: "46px",
                },
              }}
            >
              My tenants <KeyboardArrowRightIcon />
            </Button>
          </Grid>
          <Grid
            container
            lg={3}
            sx={{
              // background: "pink",
              // padding: "auto",
              justifyContent: "center",
              alignItems: "center",
              display: {
                xs: "none",
                sm: "flex",
              }
            }}
          >
            <PieChart />
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              fontSize: "24px",
              color: "#FF0000",
              // background: "pink",
              textAlign: "right",
              fontWeight: "700",
              '@media (max-width:600px)': {
                display: 'flex',
                justifyContent: 'space-between',
                width: '92%',
              },
            }}
            className=' space-y-3 max-sm:space-y-0'
          >
            <Grid className=' space-y-3 max-sm:space-y-0'>
              <Grid>
                ₹ 5,50,000
              </Grid>
              <Grid item sx={{
                fontFamily: "Inter", fontSize: "12px",
                '@media (max-width:600px)': {
                  textAlign: "initial",
                },
              }}>
                <p style={{ fontWeight: "700", color: "#272727" }}>
                  59/{totalTenants}
                  <span style={{ fontWeight: "500", color: "#737373" }}>
                    {"  "}Pending
                  </span>
                </p>
              </Grid>
            </Grid>

            <Button
              sx={{
                fontFamily: "Inter",
                background: "#ECAE512E",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "12px",
                color: "#ECAE51",
                alignItems: "center",
                justifyContent: "space-evenly",
                '@media (max-width:600px)': {
                  padding: "0px 16px",
                  height: "46px",
                },
              }}
            >
              Tenants List <KeyboardArrowRightIcon />
            </Button>
          </Grid>
          <Grid
            container
            lg={3}
            sx={{
              // background: "pink",
              // padding: "auto",
              justifyContent: "center",
              alignItems: "center",
              display: {
                xs: "flex",
                sm: "none",
              },
              width: {
                xs: "90%",
              },
              paddingBottom: "14px",
            }}
          >
            {/* <PieChart /> */}
            <ProgressBar value={29.03} month={"January"} />
          </Grid>
        </Grid>
        {/*  */}
        <Grid
          container
          item
          lg={3}
          sx={{
            backgroundImage: `url(${pana2.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // backgroundImage: `url(${buildings})`,
            justifyContent: "space-evenly",
            borderRadius: "7.5px",
            height: "9.25rem",
            fontFamily: "Inter",
            alignItems: "center",
            boxShadow: "0px 0px 12px 0px #D2D2D240",
            height: {
              xs: "6.25rem",
              sm: "9.25rem",
            },
          }}
        >
          <Grid
            item
            lg={8.5}
            sx={{
              fontSize: "24px",
              color: "#000000",
              // background: "pink",
              '@media (max-width:600px)': {
                display: 'flex',
                justifyContent: 'space-between',
                width: '92%',
              },
              fontWeight: "800",
            }}
            className=' space-y-3 max-sm:space-y-0'
          >

            <Grid className=' space-y-3 max-sm:space-y-0'>
              <Grid>
                ₹ {totalRent}
              </Grid>
              <Grid item style={{ fontFamily: "Inter", fontSize: "12px" }}>
                <p style={{ fontWeight: "300", color: "##000000" }}>
                  Total Rent Expected
                </p>
              </Grid>
            </Grid>
            <Button
              sx={{
                fontFamily: "Inter",
                background: "#ECAE512E",
                borderRadius: "5px",
                fontWeight: "500",
                fontSize: "12px",
                color: "#ECAE51",
                alignItems: "center",
                justifyContent: "space-evenly",
                '@media (max-width:600px)': {
                  padding: "0px 16px",
                  height: "46px",
                },
              }}
            >
              Edit <KeyboardArrowRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* income analysis */}
      <Grid
        container
        // grid 3
        style={{
          justifyContent: "space-between",
          // background: "yellow",
          marginTop: "1rem",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Income analysis
        </h1>
      </Grid>

      {/* grid 4 */}
      <Grid
        container
        style={{
          justifyContent: "space-between",
          // background: "red",
          marginTop: "0.5rem",
        }}
      >
        {/* total revenue */}
        <Grid
          item
          lg={3.5}
          sx={{
            background: "#FFFFFF",
            // paddingLeft: "2rem",
            borderRadius: "7.5px",
            height: "6rem",
            fontFamily: "Inter",
            alignItems: "center",
            fontSize: "24px",
            color: "#379017",
            boxShadow: "0px 0px 12px 0px #D2D2D240",
            fontWeight: "700",
            placeContent: "center",
            '@media (max-width:600px)': {
              width: "100%",
              marginBottom: "10px",
            },
          }}
        >
          <Grid item
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '2%',
            }}
          >
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "400",
                color: "#000000",
                marginLeft: "5%",
              }}
            >
              Total Revenue
            </p>
            <Image src={dot} width={15} height={15} className=' mr-[9%]' />
          </Grid>
          <Grid
            item
            lg={12}
            style={{
              background: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleClick}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "28px",
                color: "#000000",
                fontWeight: "800",
                marginLeft: "5%",
              }}
            >
              ₹ 4,00,000
            </span>
            <IconButton
              sx={{
                marginRight: "5%",
                background: "#37901740",
                padding: '5px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#37901740",
                },
              }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  color: "#6FB258",
                  fontSize: "medium",
                }}
              />
            </IconButton>
          </Grid>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              // horizontal: 100,
            }}
            anchorReference="anchorEl"
            anchorPosition={{ top: 0, left: 0 }}
            PaperProps={{
              elevation: 0,
              style: {
                width: anchorEl ? anchorEl.clientWidth : null,
                // boxShadow: "none",
                boxShadow: "0px 0px 12px 0px #D2D2D240",
                borderRadius: "10px",
                paddingBottom: "1.5rem",
              },
            }}
          >
            <Grid
              container
              sx={12}
              rowGap={1}
              style={{
                fontFamily: "Inter",
                fontWeight: "300'",
                fontSize: "14px",
                justifyContent: "space-evenly",
              }}
            >
              <Divider
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              {/* rent */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Rent
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                2,25,000
              </Grid>
              {/*security deposits */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Security Deposits
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                1,25,000
              </Grid>
              {/* others*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Others
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                50,000
              </Grid>
            </Grid>
          </Popover>
        </Grid>

        {/*total expenses]  */}
        <Grid
          item
          lg={3.5}
          sx={{
            background: "#FFFFFF",
            // paddingLeft: "2rem",
            borderRadius: "7.5px",
            height: "6rem",
            fontFamily: "Inter",
            alignItems: "center",
            fontSize: "24px",
            color: "#379017",
            boxShadow: "0px 0px 12px 0px #D2D2D240",
            fontWeight: "700",
            placeContent: "center",
            '@media (max-width:600px)': {
              width: "100%",
              marginBottom: "10px",
            },
          }}
        >
          <Grid item
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '2%',
            }}
          >
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "400",
                color: "#000000",
                marginLeft: "5%",
              }}
            >
              Total Expenses
            </p>
            <Image src={dot} width={15} height={15} className=' mr-[9%]' />
          </Grid>
          <Grid
            item
            lg={12}
            style={{
              background: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleClick2}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "28px",
                color: "#000000",
                fontWeight: "800",
                marginLeft: "5%",
              }}
            >
              ₹ 3,50,000
            </span>
            <IconButton
              sx={{
                marginRight: "5%",
                background: "#37901740",
                padding: '5px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#37901740",
                },
              }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  color: "#6FB258",
                  fontSize: "medium",
                }}
              />
            </IconButton>
          </Grid>

          <Popover
            id={id}
            open={open2}
            anchorEl={anchorE2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: "bottom",
              // horizontal: 100,
            }}
            anchorReference="anchorE2"
            anchorPosition={{ top: 0, left: 0 }}
            PaperProps={{
              elevation: 0,
              style: {
                width: anchorE2 ? anchorE2.clientWidth : null,
                // boxShadow: "none",
                boxShadow: "0px 0px 12px 0px #D2D2D240",
                borderRadius: "10px",
                paddingBottom: "1.5rem",
              },
            }}
          >
            <Grid
              container
              sx={12}
              rowGap={1}
              style={{
                fontFamily: "Inter",
                fontWeight: "300'",
                fontSize: "14px",
                justifyContent: "space-evenly",
              }}
            >
              <Divider
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              {/* cleaning */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Cleaning
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                1,00,000
              </Grid>
              {/*wifi */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Wifi
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                50,000
              </Grid>
              {/* tax*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Tax
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                60,000
              </Grid>
              {/* plumber*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Plumber
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                70,000
              </Grid>
              {/* Electricity*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Electricity
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                40,000
              </Grid>
              {/* others*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Others
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                30,000
              </Grid>
            </Grid>
          </Popover>
        </Grid>
        {/**** * total profit ******/}
        <Grid
          item
          lg={3.5}
          sx={{
            background: "#FFFFFF",
            // paddingLeft: "2rem",
            borderRadius: "7.5px",
            height: "6rem",
            fontFamily: "Inter",
            alignItems: "center",
            fontSize: "24px",
            color: "#379017",
            boxShadow: "0px 0px 12px 0px #D2D2D240",
            fontWeight: "700",
            placeContent: "center",
            '@media (max-width:600px)': {
              width: "100%",
            },
          }}
        >
          <Grid item
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '2%',
            }}
          >
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "400",
                color: "#000000",
                marginLeft: "5%",
              }}
            >
              Total Profits
            </p>
            <Image src={dot} width={15} height={15} className=' mr-[9%]' />
          </Grid>
          <Grid
            item
            lg={12}
            style={{
              background: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleClick3}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "28px",
                color: "#379017",
                fontWeight: "800",
                marginLeft: "5%",
              }}
            >
              ₹ 50,000
            </span>
            <IconButton
              sx={{
                marginRight: "5%",
                background: "#37901740",
                padding: '5px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#37901740",
                },
              }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  color: "#6FB258",
                  fontSize: "medium",
                }}
              />
            </IconButton>
          </Grid>

          <Popover
            id={id}
            open={open3}
            anchorEl={anchorE3}
            onClose={handleClose3}
            anchorOrigin={{
              vertical: "bottom",
              // horizontal: 100,
            }}
            anchorReference="anchorE3" // Set anchor reference to the anchor element
            anchorPosition={{ top: 0, left: 0 }} // Position the Popover at the top-left of the anchor element
            PaperProps={{
              elevation: 0,
              style: {
                width: anchorE3 ? anchorE3.clientWidth : null,
                // boxShadow: "none",
                boxShadow: "0px 0px 12px 0px #D2D2D240",
                borderRadius: "10px",
                paddingBottom: "1.5rem",
              },
            }}
          >
            <Grid
              container
              sx={12}
              rowGap={1}
              style={{
                fontFamily: "Inter",
                fontWeight: "300'",
                fontSize: "14px",
                justifyContent: "space-evenly",
              }}
            >
              <Divider
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              {/* rent */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Rent
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                2,25,000
              </Grid>
              {/*security deposits */}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Security Deposits
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                -1,25,000
              </Grid>
              {/* others*/}
              <Grid
                item
                xs={5}
                style={{ alignItems: "center", textAlign: "left" }}
              >
                Others
              </Grid>
              <Grid
                item
                xs={4.5}
                style={{ alignItems: "center", textAlign: "right" }}
              >
                -50,000
              </Grid>
            </Grid>
          </Popover>
        </Grid>
      </Grid>
      {/* chart  */}
      <Grid
        container
        height={350}
        sx={{
          background: "#FFFFFF",
          marginTop: "2rem",
          alignItems: "center",
          borderRadius: "7.5px",
          boxShadow: "0px 0px 12px 0px #D2D2D240",
        }}
      >
        <div className="justify-between  w-full p-5 border-b-2 items-center flex" >
          <p className='text-sm'>Visualization by Revenue</p>
          <div className=" flex justify-center items-center text-xs">
            <div className="mr-1 text-gray-500 text-sm max-sm:text-xs">
              Show
            </div>
            <div className=" font-bold cursor-pointer text-sm max-sm:text-xs">
              By Month
              <KeyboardArrowDownIcon
                sx={{
                  color: "#6FB258",
                  fontSize: "medium",
                }}
              />
            </div>
          </div>
        </div>
        <div className=" p-2 relative left-[86%] max-sm:left-[70%] text-gray-600 text-xs">
          In : Rs Lakhs
        </div>
        {isSmallScreen ? <SmallAnalysisChart /> : <AnalysisChart />}
      </Grid>
    </Grid>
  );
};
export default Dashboard;
