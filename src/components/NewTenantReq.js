"use client";
import React, { useState } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";
import CircleIcon from "@mui/icons-material/Circle";
import kanya from "@/assets/kanya.png";
import DeleteIcon from "@mui/icons-material/Delete";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowUpwardRounded";
import { useEffect } from "react";
import Image from "next/image";
import "@/styles/tailwind.css"
import arrow from '@/assets/rightArrow.svg'

const initialTenantRows = [
  {
    id: 1,
    tenant: "Shri Venkatesh Swami",
    phone: "9991091058",
    gender: "Male",
    type: "Triple Sharing",
    amount: "₹ 1,000",
    date: "10 Mar 2002",
    paymentMode: "Cash / Offline",
  },
  {
    id: 2,
    tenant: "Shri Venkatesh Swami",
    phone: "9991091058",
    gender: "Male",
    type: "Triple Sharing",
    amount: "₹ 1,000",
    date: "10 Mar 2002",
    paymentMode: "Cash / Offline",
  },
  {
    id: 3,
    tenant: "Shri Venkatesh Swami",
    phone: "9991091058",
    gender: "Male",
    type: "Double Sharing",
    amount: "₹ 1,000",
    date: "10 Mar 2002",
    paymentMode: "Cash / Offline",
  },
];

const tenantColumns = [
  { width: "5%", label: "S.NO.", dataKey: "id" },
  { width: "8%", label: "Photo", dataKey: "photo" },
  { width: "15%", label: "Tenant Information", dataKey: "tenantInfo" },
  { width: "18%", label: "Room Type & Join Date ", dataKey: "room" },
  { width: "10%", label: "Payment", dataKey: "payment" },
  {
    width: "20%",
    label: "Assign Room",
    dataKey: "assignRoom",
  },
  { width: "8%", label: "Approve ?", dataKey: "approve" },
];

export default function NewTenantReq() {
  const [clickedTickRowId, setClickedTickRowId] = useState(null);
  const [clickedCutRowId, setClickedCutRowId] = useState(null);
  const [sortOrder, setSortOrder] = useState({ column: null, isAsc: true });
  const [sortedData, setSortedData] = useState(
    initialTenantRows.map((item, index) => ({
      ...item,
      sno: index + 1, // Generate initial sequential number
    }))
  );

  const handleTickClick = (id) => {
    setClickedTickRowId(id);
  };
  const handleCutClick = (id) => {
    setClickedCutRowId(id);
  };
  const toggleSortOrder = (column) => {
    const isAsc = sortOrder.column === column ? !sortOrder.isAsc : true;
    setSortOrder({ column, isAsc });
  };

  useEffect(() => {
    if (sortOrder.column) {
      const sorted = [...sortedData].sort((a, b) => {
        const valA = a[sortOrder.column];
        const valB = b[sortOrder.column];

        let comparison = 0;

        // Handle data types
        if (typeof valA === "number") {
          comparison = valA - valB;
        } else if (sortOrder.column === "vacantDates") {
          const dateA = new Date(a.vacantDate);
          const dateB = new Date(b.vacantDate);
          comparison = dateA - dateB;
        } else {
          comparison = valA.localeCompare(valB);
        }

        return sortOrder.isAsc ? comparison : -comparison;
      });

      // Reassign sequential S.NO. based on sorted order
      const sortedWithSno = sorted.map((item, index) => ({
        ...item,
        sno: index + 1,
      }));

      setSortedData(sortedWithSno);
    }
  }, [sortOrder]);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const fixedHeaderContent = () => (
    <TableRow
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
      }}
    >
      {tenantColumns.map((column) => (
        <TableCell
          key={column.dataKey}
          align="left"
          style={{
            width: column.width,
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "12px",
            color: "#737373",
            background: "white",
          }}
        >
          <div style={{}}> {column.label}</div>

          {column.sortable && (
            <IconButton
              onClick={() => toggleSortOrder(column.dataKey)}
              style={{
                alignItems: "center",
                margin: 0,
                cursor: "pointer",
              }}
            >
              {sortOrder.column === column.dataKey && sortOrder.isAsc ? (
                <ArrowDropDownIcon sx={{ fontSize: "medium" }} />
              ) : (
                <ArrowDropUpIcon sx={{ fontSize: "medium" }} />
              )}
            </IconButton>
          )}
        </TableCell>
      ))}
    </TableRow>
  );

  const rowContent = (index, row) => (
    <>
      {tenantColumns.map((column) => (
        <TableCell key={column.dataKey} align="left">
          {column.dataKey === "id" ? (
            <div style={{}}>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#737373",
                  marginLeft: "0.5rem",
                }}
              >
                {row.sno}
              </h1>
            </div>
          ) : column.dataKey === "photo" ? (
            <div style={{}}>
              {" "}
              <Avatar
                width={40}
                height={40}
                sx={{ bgcolor: "#6FB258", marginLeft: "0.5rem" }}
              >
                <Image
                  src={kanya}
                  alt="rohan"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
            </div>
          ) : column.dataKey === "tenantInfo" ? (
            <div
              style={{ justifyContent: "space-evenly" }}
            >
              <h6
                style={{
                  margin: 0,
                  fontWeight: "600",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  color: "#000000",
                }}
              >
                {row.tenant}
              </h6>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#737373",
                  // alignItems: "center",
                }}
              >
                {row.gender}

                <span
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#737373",
                  }}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "0.3rem",
                      color: "#737373",
                      marginLeft: "0.5rem",
                      // marginRight: "0.5rem",
                    }}
                  />{" "}
                  {row.phone}
                </span>
              </p>
            </div>
          ) : column.dataKey === "room" ? (
            <div style={{}}>
              <h1
                style={{
                  margin: 0,
                  fontWeight: "600",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                {row.type}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#737373",
                  textAlign: "center",
                }}
              >
                {row.date}
              </p>
            </div>
          ) : column.dataKey === "payment" ? (
            <div style={{}}>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "#000000",
                  textDecoration: "underline",
                  textAlign: "center",
                }}
              >
                {row.amount}
              </h1>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "#ECAE51",
                  textAlign: "center",
                }}
              >
                {row.paymentMode}
              </p>
            </div>
          ) : column.dataKey === "assignRoom" ? (
            <div style={{}}>
              <Select
                // variant="standard"
                // disableUnderline="true"

                sx={{
                  paddingLeft: "1.5rem",
                  width: "100%",
                  height: "10%",
                  fontFamily: "Inter",
                  fontSize: "9px",
                  fontWeight: "500",
                  color: "#000000",
                  background: "#F5F7F6",
                  border: "none",
                  //   height: "40px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F5F7F6",
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
              // onChange={handleChange}
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
            </div>
          ) : column.dataKey === "approve" ? (
            <div style={{}}>
              <IconButton
                onClick={() => handleTickClick(row.id)}
                style={{
                  color: clickedTickRowId === row.id ? "#379017" : "#C1C1C1",
                }}
              >
                <DoneIcon sx={{ fontSize: "medium" }} />
              </IconButton>
              <IconButton
                onClick={() => handleCutClick(row.id)}
                style={{
                  color: clickedCutRowId === row.id ? "#FF0000" : "#C1C1C1",
                }}
              >
                <CloseIcon sx={{ fontSize: "medium" }} />
              </IconButton>
            </div>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))
      }
    </>
  );

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table
        {...props}
        sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
      />
    ),
    TableHead,
    TableRow: ({ item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
  };


  const TenantList = () => {
    const showPaymentDetailsDown = (id) => {
      document.getElementById(id).classList.toggle('hidden');
    }
    return (
      <div className="flex flex-wrap gap-4">
        {initialTenantRows.map((tenant) => (
          <div className="bg-white p-4 rounded-lg shadow-sm w-full max-w-sm" key={tenant.id}>
            <div className="flex items-center justify-between">
              {/* Profile Picture and Name Section */}
              <div className="flex items-center">
                {" "}
                <Avatar
                  width={40}
                  height={40}
                  sx={{ bgcolor: "#6FB258", marginRight: "0.7rem" }}
                >
                  <Image
                    src={kanya}
                    alt="rohan"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">{tenant.tenant}</h3>
                  <p className="text-xs font-light text-gray-500 mt-2">{tenant.gender} • {tenant.phone}</p>
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 hover:text-green-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <button className="text-gray-500 text-xs hover:text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-col text-sm text-gray-600">
                <p style={{ color: "#9E9E9E", fontSize: '9px', textAlign: "center" }}>Joining Date</p>
                <p className="text-xs font-bold">{tenant.date}</p>
              </div>
              <div className="flex flex-col text-sm text-gray-600">
                <p style={{ color: "#9E9E9E", fontSize: '9px', textAlign: "center" }}>Sharing Type</p>
                <p className=" text-xs font-bold">{tenant.type}</p>
              </div>
              <div className="flex flex-col text-sm text-gray-600">
                <Select
                  // variant="standard"
                  // disableUnderline="true"

                  sx={{
                    // paddingLeft: "1.5rem",
                    width: "100%",
                    height: "10%",
                    fontFamily: "Inter",
                    fontSize: "9px",
                    fontWeight: "500",
                    color: "#000000",
                    background: "#F5F7F6",
                    border: "none",
                    //   height: "40px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#F5F7F6",
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
                // onChange={handleChange}
                >
                  <MenuItem value={1}>
                    <Grid container direction="column">
                      {/* <Grid item>Varthur Shri Kaveri Girls</Grid> */}
                      <Grid item>SKPG:01</Grid>
                    </Grid>
                  </MenuItem>
                  <MenuItem value={2}>
                    <Grid container direction="column">
                      {/* <Grid item>Varthur Shri Kaveri Men</Grid> */}
                      <Grid item>SKPG:02</Grid>
                    </Grid>
                  </MenuItem>
                  <MenuItem value={3}>
                    <Grid container direction="column">
                      {/* <Grid item>Varthur Shri Kaveri Colive</Grid> */}
                      <Grid item>SKPG:03</Grid>
                    </Grid>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <div href="#" className="text-green-600 text-xs font-bold hover:underline flex cursor-pointer transition-all" onClick={() => showPaymentDetailsDown(tenant.id)}>
                <Image src={arrow} width={8} height={8} className="mr-2" />
                Payment Details
              </div>
            </div>
            <div className="bg-white p-4 border-t-2 border-dashed border-gray-400 w-full max-w-md mt-3 hidden transition-all" id={`${tenant.id}`}>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-gray-500 text-xs">Payment Mode</p>
                <p className="text-orange-500 text-xs">{tenant.paymentMode}</p>

                <p className="text-gray-500 text-xs">Payment Type</p>
                <p className="text-black text-xs">Security & Rent</p>

                <p className="text-gray-500 text-xs">Payment Amount</p>
                <p className="font-semibold text-xs">{tenant.amount}</p>

                <p className="text-gray-500 text-xs">Balance</p>
                <p className="font-bold text-xs">₹ 13,000</p>

                <p className="text-gray-500 text-xs">Payment Date</p>
                <p className="text-black text-xs">{tenant.date}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  };


  return (
    <>
      {isSmallScreen ? <div className="container mx-auto overflow-auto overflow-y-scroll h-full w-full" style={{ background: "#f2f2f2" }}>
        <TenantList />
      </div> :
        <Paper
          style={{
            height: "100%",
            width: "100%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <TableVirtuoso
            data={sortedData}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      }
    </>
  );
}
