"use client";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RentAnalysisIcon from "./RentAnalysisIcon";
import Link from "next/link";
import Image from "next/image";
import EditPropertyIcon from "./EditPropertyIcon";
import { useRouter } from "next/navigation";
import logoPGMS from "@/assets/logoPGMS.svg";
import resLogo from "@/assets/resLogo.svg"
import resBar from "@/assets/resBar.svg"
import resCross from "@/assets/resolvePageSvg/cross.svg"
import resNoti from "@/assets/resNoti.svg"
import rohanPurohit from '@/assets/rohanPurohit.svg'
import '@/styles/tailwind.css'
import Avatar from "@mui/material/Avatar";

const menuItems = [
  {
    icon: <HomeRoundedIcon />,
    text: "Dashboard",
    link: "/owner/manage/dashboard",
  },
  {
    icon: <RentAnalysisIcon />,
    text: "Rent Analysis",
    link: "/owner/manage/rent-analysis",
  },
  {
    icon: <PeopleAltIcon />,
    text: "My Tenants",
    link: "/owner/manage/my-tenants",
  },
  {
    icon: <AddBoxIcon />,
    text: "New Tenants Requests",
    link: "/owner/manage/new-tenant-requests",
  },
  {
    icon: <DoorFrontIcon />,
    text: "Rooms/Inventory",
    link: "/owner/manage/rooms-inventory",
  },
  {
    icon: <WarningRoundedIcon />,
    text: "Resolve Complaints",
    link: "/owner/manage/resolve-complaints",
  },
  {
    icon: <EditPropertyIcon />,
    text: "Edit Property/PG Details",
    link: "/owner/manage/edit-property",
  },
  { icon: <LogoutIcon />, text: "Sign Out", link: "/" },
];
function SideDrawer() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [isVisible, setIsVisible] = useState(false);
  const handleItemClick = (item) => {
    setSelectedItem(item);
    router.push(item.link);
    if (isSmallScreen) {
      hideNavbar()
    }
  };
  const show = () => {
    let nav = document.getElementById('navbar');
    let overlay = document.getElementById('overlay');
    let cross = document.getElementById('cross');
    cross.classList.remove('hidden')
    overlay.classList.remove('hidden')
    nav.classList.remove('max-sm:hidden')
    setIsVisible(!isVisible);
  }
  const hideNavbar = () => {
    let nav = document.getElementById('navbar');
    let overlay = document.getElementById('overlay');
    let cross = document.getElementById('cross');
    cross.classList.add('hidden')
    overlay.classList.add('hidden')
    nav.classList.add('max-sm:hidden')
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    setIsVisible(!isSmallScreen)
  }, [isSmallScreen])

  return (
    <>
      <Grid className="resNavbar" style={{ display: isSmallScreen ? "flex" : "none", justifyContent: "space-between", padding: "15px 12px", background: "#f2f2f2" }}>
        <Grid>
          <Image src={resBar} alt="bar" width={30} height={30} style={{ cursor: 'pointer' }} onClick={show} />
        </Grid>
        <Grid>
          <Image src={resLogo} alt="logo" width={110} height={110} style={{ cursor: 'pointer' }} />
        </Grid>
        <Grid>
          <Image src={resNoti} alt="logo" width={23} height={23} style={{ cursor: 'pointer' }} />
        </Grid>
      </Grid>

      <div className="absolute top-0 left-0 w-full h-full z-[8] hidden" id="overlay" style={{ background: 'rgba(0, 0, 0, 0.4)' }}></div>

      <Grid
        container
        id="navbar"
        className={`max-sm:absolute max-sm:z-10 max-sm:bg-white max-sm:w-[80%] max-sm:top-4 max-sm:rounded-tr-2xl max-sm:rounded-br-xl 
         ${isVisible ? "navbar-visible" : "navbar-hidden"}`}
        style={{
          justifyContent: "space-evenly",
          height: isSmallScreen ? "95vh" : "100vh",
        }}
      >

        <Image src={resCross} alt="logo" width={15} height={15} style={{ cursor: 'pointer', position: "absolute", right: "10px", top: "10px" }} id="cross" className="hidden" onClick={hideNavbar} />

        <div
          style={{
            width: "60%",
            height: "10%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "0.5rem",
            // marginTop: "-4rem",
            // height: "50px",
            // background: "red",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "Inter",
              fontSize: "22px",
              fontWeight: "600",
              color: "#000000",
              display: isSmallScreen ? "none" : "block",
            }}
          >
            PGMS
          </h1>
          {isSmallScreen ?
            <>
              <div className=" flex pt-[15%] items-center">
                <div className=" mr-3">
                  {" "}
                  < Avatar sx={{ width: 75, height: 75, bgcolor: "#6FB258" }}>
                    <Image src={rohanPurohit} alt="rohan" className="w-[90%]" />
                  </Avatar>
                </div>
                <div>
                  <div className=" text-sm font-bold">Rohan Purohit <br /> (Owner)</div>
                  <div className=" text-xs font-light text-gray-500">rohanpurohit@gmail.com</div>
                </div>
              </div>

            </>
            :
            <Image src={logoPGMS} alt="logo" width={38} height={38} />}
        </div>
        <Grid
          container
          sx={{
            marginTop: "-10rem",
            height: "60%",
            '@media (max-width: 600px)': {
              marginTop: "-2rem",
            }
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              style={{
                width: "100%",
                borderRadius: "5px",

                textTransform: "none",
                borderLeft: selectedItem === item ? "6px solid #6FB258" : "none",
              }}
              onClick={() => handleItemClick(item)}
            >
              <Grid container item lg={12}>
                <Grid
                  item
                  lg={3}
                  style={{
                    // background: "red",
                    display: "flex",
                    justifyContent: "center",
                    color: selectedItem === item ? "#6FB258" : "#737373",
                  }}
                >
                  {item.icon}
                </Grid>
                <Grid
                  item
                  lg={9}
                  style={{
                    // background: "pink",
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: selectedItem === item ? "#6FB258" : "#737373",
                  }}
                >
                  {item.text}
                </Grid>
              </Grid>
            </Button>
          ))}
        </Grid>
        {isSmallScreen ?
          <Grid
            container
            item
            lg={11}
            sx={{
              height: "70px",
              // background: "yellow",
              justifyContent: "space-between",
              '@media (max-width: 600px)': {
                justifyContent: "center",
              }
            }}
          >
            <Grid
              item
              lg={6}
              sx={{
                background: "#3790172E",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                '@media (max-width: 600px)': {
                  padding: "0px 15px",
                }
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
              sx={{
                background: "#FF4B4B2E",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                '@media (max-width: 600px)': {
                  padding: "0px 15px",
                }
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
          :
          ""
        }
      </Grid >


    </>
  );
}

export default SideDrawer;
