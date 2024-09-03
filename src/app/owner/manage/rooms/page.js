"use client";
import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Rooms = () => {
  return (
    <Grid
      container
      item
      lg={12}
      spacing={2}
      //   style={{ justifyContent: "space-evenly", margin: "auto" }}
    >
      <Grid item xs={6}>
        <h1>i am rooms</h1>
      </Grid>
    </Grid>
  );
};

export default Rooms;
