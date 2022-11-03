import React, { useState } from "react";
import * as MC from "@material-ui/core";
import * as MS from "@material-ui/styles";
import * as ML from "@material-ui/lab";
import * as MI from "@material-ui/icons";

import Paper from '@material-ui/core/Paper';

const useStyles = MS.makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = MS.withStyles((theme) => ({
  head: {
    backgroundColor: "black",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(MC.TableCell);

const StyledTableRow = MS.withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
  },
}))(MC.TableRow);

function createData(name, Teacher, attendance) {
  return { name, Teacher, attendance };
}

const rows = [
  createData("Compiler", "Dr Khaled El-Menshawy ", [true, true, false, true, true, true, false, true, true, true, false, true]),
  createData("Multimedia", "Dr Abdellatife ", [false, true, false, true, false, true, false, true, false, true, false, true]),
  createData("Expert Systems", "Dr Mostafa El said ", [true, false, true, true, true, false, true, true, true, false, true, true]),
  createData("Compiler", "Dr Mostafa Fathy", [true, false, true, true, true, false, true, true, true, false, true, true]),
];

export default function AttendanceTable(props)
{
  const classes = useStyles();

  return (
    <MC.TableContainer component={Paper}>
      <MC.Table className={classes.table} aria-label="customized table">
        <MC.TableHead>
          <MC.TableRow>
            <StyledTableCell align="left" width={200} > Subjct Name</StyledTableCell>
            <StyledTableCell align="left" width={200} > Professor Name </StyledTableCell>

            {
                rows[0].attendance.map( (value, key) => { return <StyledTableCell> { "W/" +  (key + 1) } </StyledTableCell> })
              }

          </MC.TableRow>
        </MC.TableHead>
        <MC.TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Teacher}</StyledTableCell>
              {
                row.attendance.map( value => { return <StyledTableCell> { value? <MI.Check style={{margin: "10px"}} /> : <MI.Clear style={{margin: "10px"}} /> } </StyledTableCell> })
              }
            </StyledTableRow>
          ))}

          
        </MC.TableBody>
      </MC.Table>
    </MC.TableContainer>
  );

}


const rows2 = [
  createData("Abdullah", "Amr ", [true, true, false, true, true, true, false, true, true, true, false, true]),
  createData("Soha", "Amgad ", [false, true, false, true, false, true, false, true, false, true, false, true]),
  createData("Yehia ", "Khaled ", [true, false, true, true, true, false, true, true, true, false, true, true]),
  createData("Mirette", "Ehab", [true, false, true, true, true, false, true, true, true, false, true, true]),
  createData("Sara", "Magdy", [true, false, true, true, true, false, true, true, true, false, true, true]),
  createData("Omnia", "Sobhy", [true, false, true, true, true, false, true, true, true, false, true, true]),
];

export function AttendanceTableProf(props)
{
  const classes = useStyles();

  return (
    <MC.TableContainer component={Paper}>
      <MC.Table className={classes.table} aria-label="customized table">
        <MC.TableHead>
          <MC.TableRow>
            <StyledTableCell align="left" width={200} > First Name</StyledTableCell>
            <StyledTableCell align="left" width={200} > Last Name </StyledTableCell>

            {
                rows2[0].attendance.map( (value, key) => { return <StyledTableCell> { "W/" +  (key + 1) } </StyledTableCell> })
              }

          </MC.TableRow>
        </MC.TableHead>
        <MC.TableBody>
          {rows2.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Teacher}</StyledTableCell>
              {
                row.attendance.map( value => { return <StyledTableCell> { value? <MI.Check style={{margin: "10px"}} /> : <MI.Clear style={{margin: "10px"}} /> } </StyledTableCell> })
              }
            </StyledTableRow>
          ))}

          
        </MC.TableBody>
      </MC.Table>
    </MC.TableContainer>
  );

}

