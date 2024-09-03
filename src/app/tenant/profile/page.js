"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

const TenantProf = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [aadharPdfUrl, setAadharPdfUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pgId, setPgId] = useState("");
  const [pgName, setPgName] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const router = useRouter();
    const body = {
      city,
      state,
      area,
      pincode,
      tenantAadharNumber: aadharNumber,
      tenantAadharPdfUrl: aadharPdfUrl,
      tenantPhoneNumber: phoneNumber,
      tenantImageUrl: imageUrl,
      pgId,
      pgName,
      monthlyRent,
      securityDeposit,
    };

    try {
      const tenantId = localStorage.getItem("tenantId");
      const response = await axios.put(
        `https://backend.deskmateai.com/tenant/registerForPg/${tenantId}`,
        body
      );

      if (response.status === 200) {
        console.log(response.data.message);
        router.push("/tenant/tenantDashboard");
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
      lg={9}
      spacing={2}
      style={{ justifyContent: "space-evenly", margin: "auto" }}
    >
      <Grid item xs={11}>
        <h1>Enter the Details to Continue...</h1>
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="State"
          variant="outlined"
          fullWidth
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Area"
          variant="outlined"
          fullWidth
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Pincode"
          variant="outlined"
          fullWidth
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tenant Aadhar Number"
          variant="outlined"
          fullWidth
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tenant Aadhar Card PDF URL"
          variant="outlined"
          fullWidth
          value={aadharPdfUrl}
          onChange={(e) => setAadharPdfUrl(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tenant Phone Number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tenant Image URL"
          variant="outlined"
          fullWidth
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="PG ID"
          variant="outlined"
          fullWidth
          value={pgId}
          onChange={(e) => setPgId(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="PG Name"
          variant="outlined"
          fullWidth
          value={pgName}
          onChange={(e) => setPgName(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Monthly Rent"
          variant="outlined"
          fullWidth
          value={monthlyRent}
          onChange={(e) => setMonthlyRent(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Security Deposit"
          variant="outlined"
          fullWidth
          value={securityDeposit}
          onChange={(e) => setSecurityDeposit(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      {error && (
        <Grid item xs={11}>
          <p style={{ color: "red" }}>{error}</p>
        </Grid>
      )}
    </Grid>
  );
};

export default TenantProf;
