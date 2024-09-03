"use client";
import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const TenantLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("tenantToken")) {
      router.push("/tenant/tenantDashboard");
    }
  }, []);
  const loginBody = {
    tenantEmail: email,
    tenantPassword: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://backend.deskmateai.com/tenant/login`,
        loginBody
      );

      if (response.status === 200) {
        localStorage.setItem("tenantId", response.data.tenantId);
        localStorage.setItem("tenantToken", response.data.token);
        // console.log(response.data.tenantId);
        // console.log(response.data.message);
        // console.log(response.data.tenant.isRegisteredWithPg);
        if (response.data.tenant.isRegisteredWithPg) {
          router.push("/tenant/tenantDashboard");
        } else {
          router.push("/tenant/profile");
        }
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        console.error("Error occurred:", error.message);
      }
    }
  };

  return (
    <Grid
      container
      item
      lg={5}
      spacing={2}
      style={{
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      <Grid item xs={6}>
        <h1>Tenant Login</h1>
      </Grid>

      <Grid item xs={7}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      {error && (
        <Grid item xs={7}>
          <p style={{ color: "red" }}>{error}</p>
        </Grid>
      )}
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Grid>
      <Grid item xs={6.5}>
        <Link href="/tenant/register">
          <p>{"Don't have an account? Click here"}</p>
        </Link>
      </Grid>
    </Grid>
  );
};

export default TenantLogin;
