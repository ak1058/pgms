"use client";
import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDownwardRounded";
import kanya from "@/assets/kanya.png";
import arrow from "@/assets/arrow.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowUpwardRounded";
import CircleIcon from "@mui/icons-material/Circle";

import { useEffect } from "react";
import Image from "next/image";
import { yellow } from "@mui/material/colors";

const initialTenantRows = [
  {
    id: 1,
    name: "Shri Madurima Venkatesh",

    room: "403",
    floor: "2nd Floor",
    monthlyRent: "₹ 1,000",
  },
];

const tenantColumns = [
  { width: "10%", label: "Photo", dataKey: "id" },
  { width: "25%", label: "Tenant Information", dataKey: "name" },
  { width: "15%", label: "Room No. & Floor", dataKey: "room", sortable: true },

  { width: "10%", label: "Monthly Rent", dataKey: "monthlyRent" },
  {
    width: "15%",
    label: "View All Info",
    dataKey: "allInfo",
    sortable: true,
  },
];

export default function JoinedThisMonth() {
  const [clickedRowId, setClickedRowId] = useState(null);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [sortOrder, setSortOrder] = useState({ column: null, isAsc: true });
  const [sortedData, setSortedData] = useState(
    initialTenantRows.map((item, index) => ({
      ...item,
      sno: index + 1, // Generate initial sequential number
    }))
  );

  const handleClick = (id) => {
    setClickedRowId(id);
    setArrowClicked(true);
    setTimeout(() => setArrowClicked(false), 200); // Reset arrowClicked state after 1 second
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
        backgroundColor: "#F3F3F3BF",
      }}
    >
      {tenantColumns.map((column) => isSmallScreen && (column.dataKey === "id" || column.dataKey === "room") ? null : (
        <TableCell
          key={column.dataKey}
          align="left"
          sx={{
            width: column.width,
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "12px",
            color: "#737373",
            '@media (max-width: 600px)': {
              // padding: "16px 0px",
              fontSize: "10px",
              // textAlign: "center",
            }
          }}
        >
          {column.label === "View All Info" && isSmallScreen ? "More" : column.label}

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
      {tenantColumns.map((column) => isSmallScreen && (column.dataKey === "id" || column.dataKey === "room") ? null : (
        <TableCell key={column.dataKey} align="left">
          {column.dataKey === "id" ? (
            <>
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
            </>
          ) : column.dataKey === "name" ? (
            <>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000000",
                }}
              >
                {row.name}
              </h1>
            </>
          ) : column.dataKey === "room" ? (
            <>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#000000",
                  // alignItems: "center",
                }}
              >
                {row.room}
                <span
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "10px",
                    color: "#000000",
                  }}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "0.5rem",
                      color: "#000000",
                      marginLeft: "0.5rem",
                      marginRight: "0.5rem",
                    }}
                  />{" "}
                  {row.floor}
                </span>
              </p>
            </>
          ) : column.dataKey === "monthlyRent" ? (
            <>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  color: "#000000",
                }}
              >
                {row.monthlyRent}
              </p>
            </>
          ) : column.dataKey === "allInfo" ? (
            <div
              style={{
                // background: "yellow",
                marginLeft: arrowClicked ? "20px" : "0",
                transition: "margin-left 0.5s",
              }}
            >
              <IconButton
                onClick={() => {
                  handleClick(row.id);
                  setArrowClicked(!arrowClicked);
                }}
              >
                <Image src={arrow} alt="image" />
              </IconButton>
            </div>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
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

  return (
    <Paper
      style={{
        height: "73vh",
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
  );
}
