"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import type { Literals, CharProps } from "@/types/fetypes";
import { useState } from "react";

type BasicStatKeys = keyof Literals["stats"]["basic"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   title: string,
//   statvalues: number,
// ) {
//   return { title, statvalues };
// }

// const rows = [
//   createData("Frozen yoghurt", 159),
//   createData("Ice cream sandwich", 237),
//   createData("Eclair", 262),
//   createData("Cupcake", 305),
//   createData("Gingerbread", 356),
// ];

export default function BasicStatsTables({ literals, basicStats }: CharProps) {
  const rows = Object.entries(literals.stats.basic).map(([k, v]) => {
    return { title: v, statvalues: basicStats?basicStats[k as BasicStatKeys]:"" };
  });

  return (
    // <Grid container xs={12} md={10} lg={10} spacing={2}>
    //   {Object.entries(literals.stats.categories).map(([k, v]) => (
    <Grid xs={12} sm={6} md={4} lg={4}>
      <Item>
        <Box
          id="basicstats"
          sx={{ fontSize: "12px", textTransform: "uppercase" }}
        >
          {literals.stats.categories.basic}
        </Box>
        <Box component="ul" aria-labelledby="basicstats" sx={{ pl: 0 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="basicstats table">
              {/* <TableHead>
                    <TableRow>
                      <StyledTableCell>title</StyledTableCell>
                      <StyledTableCell align="right">
                        value
                      </StyledTableCell>
                    </TableRow>
                  </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.title}>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.statvalues}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* {Object.entries(literals.stats[k as Stats]).map(
                ([kk, vv]) => (
                  <Button
                    variant="text"
                    sx={{ width: "100%", fontSize: "12px", textTransform:"capitalize" }}
                    onClick={() => {
                      setStat(vv);
                    }}
                    key={kk.toLowerCase()}
                  >
                    {vv}
                  </Button>
                )
              )} */}
        </Box>
      </Item>
    </Grid>
    //   ))}
    // </Grid>
  );
}
