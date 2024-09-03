"use client";
import "@/styles/globals.css";
import SideDrawer from "@/components/sideDrawer";
import RightProfileDrawer from "@/components/RightProfileDrawer";
import { Grid } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <Grid
      container
      lg={12}
      style={{
        background: "white",
        margin: "auto",
        height: "100%",
        justifyContent: "space-evenly",
        // paddingLeft: "5px",
        // paddingRight: "5px",
        height: "100vh", // Ensures full viewport height
        overflow: "hidden", // Prevents outer container from scrolling
      }}
    >
      <Grid item lg={2.2} sx={{ width: "100%" }}>
        <SideDrawer />
      </Grid>
      <Grid item lg={7.5} style={{
        background: "#D2D2D240",
        height: "100%", // Ensures it fills the full height
        overflow: "auto",
        overflowY: "scroll",  // Ensures it fills the full height
        width: "100%",

      }}>
        {children}
      </Grid>
      <Grid item lg={2.2}>
        <RightProfileDrawer />
      </Grid>
    </Grid>
  );
}
