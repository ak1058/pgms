"use client";
import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const TenantReg = () => {
  const router = useRouter();
  const [tenantName, setTenantName] = useState("");
  const [tenantEmail, setTenantEmail] = useState("");
  const [tenantPassword, setTenantPassword] = useState("");
  const registrationBody = {
    tenantName: tenantName,
    tenantEmail: tenantEmail,
    tenantPassword: tenantPassword,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(registrationBody);
      const response = await axios.post(
        `https://backend.deskmateai.com/tenant/register`,
        registrationBody
      );
      if (response.status == 201) {
        console.log(response.data.message);
        router.push("/tenant/login");
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error(
          "There was a problem with the axios request:",
          error.message
        );
      }
    }
  };

  return (
    <Grid
      container
      item
      spacing={2}
      lg={5}
      style={{
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      <Grid item xs={6}>
        <h1>Tenant Registration</h1>
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="Tenant  Name"
          variant="outlined"
          fullWidth
          onChange={(e) => setTenantName(e.target.value)}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="Tenant Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setTenantEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="Admin Password"
          variant="outlined"
          type="password"
          fullWidth
          onChange={(e) => setTenantPassword(e.target.value)}
        />
      </Grid>

      <Grid item xs={5.5}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Link href="/tenant/login">
          <p>Already have an account, Click here</p>
        </Link>
      </Grid>
    </Grid>
  );
};

export default TenantReg;
