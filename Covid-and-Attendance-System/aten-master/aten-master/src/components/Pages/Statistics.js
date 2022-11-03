import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Date, WrongMasks, NoMasks, HighTemp, Total) {
  return { Date, WrongMasks, NoMasks, HighTemp, Total };
}

const rows = [
  createData("13/6", 159, 20, 60, 159 + 20 + 60),
  createData("13/6", 159, 20, 60, 159 + 20 + 60),
  createData("13/6", 159, 20, 60, 159 + 20 + 60),
  createData("13/6", 159, 20, 60, 159 + 20 + 60),
  createData("13/6", 159, 20, 60, 159 + 20 + 60),
];

const useStyles = makeStyles({
  table: {
    backgroundColor: "#FFFFFF00",
  },

  root: {
    maxWidth: 700,
  },
  media: {
    height: 400,
  },
});

export default function Statistics() {
  const classes = useStyles();

  let wrongMaskSum = 0;
  let noMasksSum = 0;
  let highTempSum = 0;
  let totalSum = 0;

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  rows.forEach((row) => {
    wrongMaskSum += row.WrongMasks;
    noMasksSum += row.NoMasks;
    highTempSum += row.HighTemp;
    totalSum += row.Total;
  });

  return (
    <Container>
      <Box className={classes.root} style={{ margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">Wrong Masks</StyledTableCell>
                <StyledTableCell align="right">No Mask</StyledTableCell>
                <StyledTableCell align="right">High temp</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.Date}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.WrongMasks}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.NoMasks}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.HighTemp}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Total}</StyledTableCell>
                </StyledTableRow>
              ))}

              <StyledTableRow style={{ backgroundColor: "#2222AA77" }}>
                <StyledTableCell component="th" scope="row">
                  {monthNames[6]}
                </StyledTableCell>
                <StyledTableCell align="right">{wrongMaskSum}</StyledTableCell>
                <StyledTableCell align="right">{noMasksSum}</StyledTableCell>
                <StyledTableCell align="right">{highTempSum}</StyledTableCell>
                <StyledTableCell align="right">{totalSum}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
