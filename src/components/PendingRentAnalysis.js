"use client";
import * as React from "react";
import {
  Button,
  IconButton,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { TableVirtuoso } from "react-virtuoso";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowDropUpIcon from '@mui/icons-material/ArrowUpwardRounded';
import { useEffect } from "react";
import { useState } from "react";

// Sample data
const initialTenantRows = [
  {
    id: 1,
    tenant: "Amit Kumar",
    phoneNumber: "9991091058",
    room: "408",
    roomType: "Triple Sharing",
    amount: 7500,
    lastDate: "02 Feb 2024",
  },
  {
    id: 2,
    tenant: "John Doe",
    phoneNumber: "8889991000",
    room: "409",
    roomType: "Double Sharing",
    amount: 6500,
    lastDate: "05 Feb 2024",
  },
];

// Columns including the additional checkbox
const tenantColumns = [
  { width: 15, label: "Select", dataKey: "select" },
  { width: "5%", label: "S.NO.", dataKey: "id" },
  { width: "15%", label: "Tenant Information", dataKey: "tenantInfo" },
  { width: "15%", label: "Room", dataKey: "room", sortable: true },
  { width: "10%", label: "Amount", dataKey: "amount" },
  { width: "15%", label: "Rent Status", dataKey: "rentStatus" },
  { width: "12%", label: "Last Date", dataKey: "lastDate" },
];



// Main Table component with Virtuoso setup
export default function Pending() {
  const [selected, setSelected] = React.useState([]);
  const [sortOrder, setSortOrder] = useState({ column: null, isAsc: true });
  const [sortedData, setSortedData] = useState(
    initialTenantRows.map((item, index) => ({
      ...item,
      sno: index + 1, // Generate initial sequential number
    }))
  );

  const handleSelect = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((s) => s !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === initialTenantRows.length) {
      setSelected([]);
    } else {
      const allIds = initialTenantRows.map((row) => row.id);
      setSelected(allIds);
    }
  };

  const isAllChecked = selected.length === initialTenantRows.length;

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

  // Component for fixed header
  function fixedHeaderContent(isAllChecked, onSelectAll) {
    // Check if the screen is small

    return (
      <TableRow
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white",
        }}
      >
        {tenantColumns.map((column) => {
          if (isSmallScreen && (column.dataKey === "room" || column.dataKey === "lastDate")) {
            return null;
          }

          if (column.dataKey === "select") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                sx={{
                  width: "5%",
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    width: "5%",
                    textAlign: "center",
                  },
                }}
              >
                <Checkbox
                  sx={{
                    padding: 0,
                    transform: "scale(0.75)",
                  }}
                  checked={isAllChecked}
                  onChange={onSelectAll}
                />
              </TableCell>
            );
          }

          return (
            <TableCell
              key={column.dataKey}
              align="left"
              sx={{
                width: column.width,
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "12px",
                color: "#737373",
                // background:"red",
                '@media (max-width: 600px)': {
                  padding: "16px 0px",
                  fontSize: "10px",
                  textAlign: "center",
                }

              }}
            >
              {column.label}
              {column.sortable && (
                <IconButton
                  onClick={() => toggleSortOrder(column.dataKey)}
                  sx={{
                    alignItems: "center",
                    margin: 0,
                    cursor: "pointer",
                  }}
                >
                  {sortOrder.column === column.dataKey && sortOrder.isAsc ? (
                    <ArrowDropDownIcon sx={{ fontSize: "small" }} />
                  ) : (
                    <ArrowDropUpIcon sx={{ fontSize: "small" }} />
                  )}
                </IconButton>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }

  // Component for individual rows with checkboxes
  function rowContent(index, row, isChecked, onSelect) {
    return (
      <>
        {tenantColumns.map((column) => {
          if (column.dataKey === "select") {
            return (
              <TableCell key={column.dataKey} align="left"
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    width: "5%",
                    textAlign: "center",
                  },
                }}>
                <Checkbox sx={{
                  padding: 0, // Reduce padding
                  transform: "scale(0.75)", // Reduce size
                }}
                  checked={isChecked} onChange={() => onSelect(row.id)} />
              </TableCell>
            );
          }
          if (column.dataKey === "id") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "green" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#737373",
                    marginLeft: "1rem",
                  }}
                >
                  {row.sno}
                </h1>
              </TableCell>
            );
          }

          if (column.dataKey === "tenantInfo") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "pink" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#000000",
                  }}
                >
                  {row.tenant}
                </h1>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "10px",
                    color: "#737373",
                  }}
                >
                  {row.phoneNumber}
                </p>
              </TableCell>
            );
          }

          if (!isSmallScreen && column.dataKey === "room") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "green" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#000000",
                  }}
                >
                  {row.room}
                </h1>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "10px",
                    color: "#737373",
                  }}
                >
                  {row.roomType}
                </p>
              </TableCell>
            );
          }

          if (column.dataKey === "amount") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "pink" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#000000",
                  }}
                >
                  {row.amount}
                </h1>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "10px",
                    color: "#737373",
                  }}
                >
                  Rent
                </p>
              </TableCell>
            );
          }

          if (column.dataKey === "rentStatus") {
            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "green" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    background: "#ECAE5140",
                    color: "#D39538",
                    width: {
                      xs: "10%",
                      sm: "80%",
                    },
                    height: "60%",
                    borderRadius: "5px",
                  }}
                >
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: "block",
                    }
                  }} > Remind</Typography>
                  <ArrowForwardIcon
                    sx={{
                      fontSize: {
                        xs: '20px',
                        sm: "small",
                      }, 
                      marginLeft:{
                        xs: '0px',
                        sm: '0.5rem',
                      }
                    }}
                  />
                </Button>
              </TableCell>
            );
          }
          if (!isSmallScreen) {

            return (
              <TableCell
                key={column.dataKey}
                align="left"
                // style={{ background: "blue" }}
                sx={{
                  '@media (max-width: 600px)': {
                    padding: "16px 0px",
                    fontSize: "10px",
                    textAlign: "center",
                  }
                }}
              >
                {row[column.dataKey]}
              </TableCell>
            );
          }
        })}
      </>
    );
  }

  // Table Virtuoso Components
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
    <Paper style={{ height: "73vh", width: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <TableVirtuoso
        data={sortedData}
        components={VirtuosoTableComponents}
        fixedHeaderContent={() =>
          fixedHeaderContent(isAllChecked, handleSelectAll)
        }
        itemContent={(index, row) =>
          rowContent(index, row, selected.includes(row.id), handleSelect)
        }
      />
    </Paper>
  );
}
