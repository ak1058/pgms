"use client";
import React, { useState } from "react";
import {
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowDropUpIcon from '@mui/icons-material/ArrowUpwardRounded';
import { useEffect } from "react";

const initialTenantRows = [
  {
    id: 1,
    tenant: "Amit Kumar",
    phone: "9991091058",
    room: "403",
    type: "Triple Sharing",
    pendingAmount: "₹ 1,000",
    vacantDate: "10 Mar 2002",
    vacantStatus: "Already Left",
    refundable: "₹ 2000",
  },
  {
    id: 2,
    tenant: "Akay ",
    phone: "9991091058",
    room: "405",
    type: "Triple Sharing",
    pendingAmount: "Nil",
    vacantDate: "10 Feb 2002",
    vacantStatus: "5 Days Left",
    refundable: "₹ 2000",
  },

  {
    id: 2,
    tenant: "Akay ",
    phone: "9991091058",
    room: "406",
    type: "Triple Sharing",
    pendingAmount: "Nil",
    vacantDate: "10 Feb 2002",
    vacantStatus: "5 Days Left",
    refundable: "₹ 2000",
  },
];

const tenantColumns = [
  { width: "10%", label: "S.NO.", dataKey: "id" },
  { width: "20%", label: "Tenant Information", dataKey: "tenantInfo" },
  { width: "15%", label: "Room", dataKey: "room", sortable: true },
  { width: "15%", label: "Pending Amount", dataKey: "pendingAmount" },
  { width: "15%", label: "Vacant Dates", dataKey: "vacantDates", sortable: true },
  { width: "15%", label: "Refundable", dataKey: "refundable" },
];



export default function Vacating() {

  const [clickedRowId, setClickedRowId] = useState(null);
  const [sortOrder, setSortOrder] = useState({ column: null, isAsc: true });
  const [sortedData, setSortedData] = useState(
    initialTenantRows.map((item, index) => ({
      ...item,
      sno: index + 1, // Generate initial sequential number
    }))
  );

  const handleClick = (id) => {
    setClickedRowId(id);
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
      style={{ position: "sticky", top: 0, zIndex: 10, backgroundColor: "white" }}
    >
      {tenantColumns.map((column) => isSmallScreen && (column.dataKey === "room" || column.dataKey === "refundable") ? null : (
        <TableCell
          key={column.dataKey}
          align="left"
          sx={{
            width: column.width,
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "12px",
            color: "#737373",
            background: "white",
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

  const rowContent = (index, row) => (
    <>
      {tenantColumns.map((column) => isSmallScreen && (column.dataKey === "room" || column.dataKey === "refundable") ? null : (
        <TableCell key={column.dataKey} align="left">
          {column.dataKey === "id" ? (
            <>
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
            </>
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
          ) : column.dataKey === "pendingAmount" ? (
            <p
              style={{
                fontWeight: "500",
                fontSize: "12px",
                fontFamily: "Inter",
                color: row.pendingAmount === "Nil" ? "#000000" : "#FF0000",
              }}
            >
              {row.pendingAmount}
            </p>
          ) : column.dataKey === "vacantDates" ? (
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
                {row.vacantDate}
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
                ({row.vacantStatus})
              </p>
            </>
          ) : column.dataKey === "refundable" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: "800",
                  fontSize: "12px",
                  color: "#ECAE51",
                }}
              >
                {row.refundable}
              </p>
              <IconButton
                onClick={() => handleClick(row.id)}
                style={{
                  color: clickedRowId === row.id ? "#FF5151" : "#C1C1C1",
                }}
              >
                <DeleteIcon />
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
    <Paper style={{ height: "73vh", width: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <TableVirtuoso
        data={sortedData}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
