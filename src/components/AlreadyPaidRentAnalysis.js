"use client";
import * as React from "react";
import {
  Button,
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
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 2,
    tenant: "John Doe",
    phone: "1234567890",
    room: "410",
    type: "Single",
    amount: "₹ 10,000",
    rentStatus: "Paid by UPI",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 3,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 4,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 5,
    tenant: "John Doe",
    phone: "1234567890",
    room: "410",
    type: "Single",
    amount: "₹ 10,000",
    rentStatus: "Paid by UPI",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 6,
    tenant: "John Doe",
    phone: "1234567890",
    room: "410",
    type: "Single",
    amount: "₹ 10,000",
    rentStatus: "Paid by UPI",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 7,
    tenant: "John Doe",
    phone: "1234567890",
    room: "410",
    type: "Single",
    amount: "₹ 10,000",
    rentStatus: "Paid by UPI",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 8,
    tenant: "John Doe",
    phone: "1234567890",
    room: "410",
    type: "Single",
    amount: "₹ 10,000",
    rentStatus: "Paid by UPI",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 9,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 10,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
  {
    id: 11,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "408",
    type: "Triple Sharing",
    amount: "₹ 7,500",
    rentStatus: "Paid Cash",
    paymentDate: "02 Feb 2024",
  },
];

// Adjusted columns
const tenantColumns = [
  { width: "10%", label: "S.NO.", dataKey: "id" },
  { width: "20%", label: "Tenant Information", dataKey: "tenantInfo" },
  { width: "15%", label: "Room", dataKey: "room", sortable: true },
  { width: "15%", label: "Amount", dataKey: "amount", sortable: true },
  { width: "15%", label: "Rent Status", dataKey: "rentStatus" },
  { width: "15%", label: "Payment Date", dataKey: "paymentDate", sortable: true },
];



// Main Table component with Virtuoso setup
export default function AlreadyPaid() {
  const [sortOrder, setSortOrder] = useState({ column: null, isAsc: true });
  const [sortedData, setSortedData] = useState(
    initialTenantRows.map((item, index) => ({
      ...item,
      sno: index + 1, // Generate initial sequential number
    }))
  );

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
  // Fixed header with sticky position to prevent overlap
  function fixedHeaderContent() {
    return (
      <TableRow
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "white",
        }}
      >
        {tenantColumns.map((column) => isSmallScreen && (column.dataKey === "room" || column.dataKey === "paymentDate") ? null : (
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
  }

  // Row content with h1 and p tags for differentiation
  function rowContent(index, row) {
    return (
      <>
        {tenantColumns.map((column) => {
          if (isSmallScreen && (column.dataKey === "room" || column.dataKey === "paymentDate")) {
            return null;
          }

          return (
            <TableCell key={column.dataKey} align="left">
              {column.dataKey === "id" ? (
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
              ) : column.dataKey === "tenantInfo" ? (
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
                    {row.phone}
                  </p>
                </>
              ) : column.dataKey === "room" ? (
                <>
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
                    {row.type}
                  </p>
                </>
              ) : column.dataKey === "amount" ? (
                <>
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
                </>
              ) : column.dataKey === "rentStatus" ? (
                <>
                  {row.rentStatus === "Paid Cash" ? (
                    <Button
                      sx={{
                        textTransform: "none",
                        background: "#A622692E",
                        color: "#A62269",
                        borderRadius: "5px",
                        width: "80%",
                        height: "60%",
                        '@media (max-width: 600px)': {
                          fontSize: '0.475rem',
                          padding: "8px",
                        }
                      }}
                    >
                      {row.rentStatus}
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        textTransform: "none",
                        background: "#3790172E",
                        color: "#379017",
                        borderRadius: "5px",
                        width: "80%",
                        height: "60%",
                        '@media (max-width: 600px)': {
                          fontSize: '0.475rem',
                          padding: "8px",
                        }
                      }}
                    >
                      {row.rentStatus}
                    </Button>
                  )}
                </>
              ) : column.dataKey === "paymentDate" ? (
                <>
                  <h1
                    style={{
                      margin: 0,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontSize: "12px",
                      color: "#000000",
                    }}
                  >
                    {row.paymentDate}
                  </h1>
                </>
              ) : (
                row[column.dataKey]
              )}
            </TableCell>
          );
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
        data={sortedData.map((row) => ({
          ...row,
          tenantInfo: (
            <>
              <h1>{row.tenant}</h1>
              <p>{row.phone}</p>
            </>
          ),
        }))}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
