import React, { useState } from "react";
import * as MC from "@material-ui/core";
import * as MS from "@material-ui/styles";
import * as ML from "@material-ui/lab";
import * as MI from "@material-ui/icons";

const useStyles = MS.makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  element: {
    "& Container": {
      margin: 80,
    },
  },
});

const theme = MC.createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: "20px",
        padding: "10px",
      },
    },
    MuiTextField: {
      root: {
        margin: "10px auto ",
      },
    },
  },
});

function StudentSection() {
  return (
    <>
      <MC.Breadcrumbs
        separator={<MI.NavigateNext fontSize="small" />}
        aria-label="breadcrumb"

        style={{ margin: "0 auto", width: "fitContent" }}
      >
        <MC.Link color="inherit">HICIT</MC.Link>

        <MC.FormControl>
          <MC.InputLabel id="demo-simple-select-label">
            Department
          </MC.InputLabel>
          <MC.Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
          >
            <MC.MenuItem value={10}>Computer Science</MC.MenuItem>
            <MC.MenuItem value={20}>Information Technologies</MC.MenuItem>
            <MC.MenuItem value={30}>System Management</MC.MenuItem>
          </MC.Select>
        </MC.FormControl>


        <MC.FormControl  >
          <MC.InputLabel id="demo-simple-select-label">
            Year
          </MC.InputLabel>
          <MC.Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
          >
            <MC.MenuItem value={1}>First</MC.MenuItem>
            <MC.MenuItem value={2}>Second</MC.MenuItem>
            <MC.MenuItem value={3}>Third</MC.MenuItem>
            <MC.MenuItem value={4}>Fourth</MC.MenuItem>
          </MC.Select>
        </MC.FormControl>

      </MC.Breadcrumbs>
    </>
  );
}

function ProfessorSection() {
  let defaultSubjects = [
    {
      name: "Compilers",
      TimeAndLocation: "9am Sunday at 5h",
    },
    {
      name: "Multimedia",
      TimeAndLocation: "12am Sunday at 5h",
    },
  ];
  const [subjects, setSubjects] = React.useState(defaultSubjects);
  const handleAddClick = () => {
    setSubjects([...subjects, {
      subject_name: " ",
      subject_date: " ",
      subject_location: " "
    }]);

  };
  let i;//i=index
  return (
    <MC.Box>
      {subjects.map((subject, key) => {
        return (
          <MC.List>
            <MC.ListItem>
              <MC.ListItemAvatar>
                <MC.Avatar>
                  <a> {key + 1}</a>
                </MC.Avatar>
              </MC.ListItemAvatar>
              <MC.ListItemText
                primary={subject.name}
                secondary={subject.TimeAndLocation}
              />
              <MC.Box>
               <MC.Button variant="contained" color="secondary" onClick={handleAddClick}>
                  add
          </MC.Button>
          
              </MC.Box>
            </MC.ListItem>
            <MC.Divider variant="inset" component="li" />

          </MC.List>

        );
      })
      }


    </MC.Box >
  );
}

function RenderUserForm(props) {
  switch (props.userType) {
    case 1:
      return <center><p>Admins require no aditional information</p></center>;
    case 2:
      return <ProfessorSection />;
    case 3:
      return <StudentSection />;
    default:
      return (
        <center>
          <h1>.....</h1>
          <p>{"Select a user type"}</p>
        </center>
      );
  }
}

export default function CreateUser() {
  const [userType, setUserType] = React.useState("");

  const handleUserTypeSelect = (value) => {
    setUserType(value.target.value);
  };

  return (
    <MC.Box
      width={700}
      style={{
        margin: "67px auto",
        backgroundColor: "#fEfeff",
        padding: "29px",
      }}
    >
      <MC.Box
        textAlign="center"
        fontWeight="fontWeightBold"
        margin="10px 0"
        fontSize={40}
      >
        {"Create new User"}
      </MC.Box>

      <MC.Box style={{ margin: "10px auto", width: "fit-content" }}>
        <MC.TextField
          color="primary"
          id="standard-basic"
          label="First Name"
        />
        <MC.TextField
          color="primary"
          id="standard-basic"
          label="Middle Name"
        />
        <MC.TextField color="primary" id="standard-basic" label="Last Name" />
      </MC.Box>

      <MC.Box width="590px" style={{ margin: "20px auto" }}>
        <MC.TextField
          color="secondary"
          label="Email"
          type="email"
          fullWidth
        />
      </MC.Box>

      <MC.Box width="590px" style={{ margin: "20px auto" }}>
        <MC.TextField
          color="secondary"
          label="Password"
          type="password"
          fullWidth
        />
      </MC.Box>

      <MC.Box style={{ margin: "27px" }}>
        <MC.TextField
          label="User ID"
          id="outlined-size-small"
          defaultValue="000000000"
          variant="outlined"
        />

        <MC.FormControl
          variant="outlined"
          style={{ minWidth: 120, marginLeft: 10 }}
        >
          <MC.InputLabel id="demo-simple-select-outlined-label">
            User Type
            </MC.InputLabel>
          <MC.Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={userType}
            onChange={handleUserTypeSelect}
            label="User Type"
          >
            <MC.MenuItem value="">
              <em>None</em>
            </MC.MenuItem>
            <MC.MenuItem value={1}>Administrator</MC.MenuItem>
            <MC.MenuItem value={2}>Professor</MC.MenuItem>
            <MC.MenuItem value={3}>Student</MC.MenuItem>
          </MC.Select>
        </MC.FormControl>

        <MC.Button
          variant="contained"
          color="secondary"
          startIcon={<MI.ImageOutlined />}
          style={{ margin: "10px 4px" }}
        >
          Add Photo
          </MC.Button>
      </MC.Box>

      <MC.Box style={{ margin: "10px auto", width: "350px" }}>
        <RenderUserForm userType={userType} />
      </MC.Box>

      <MC.Divider style={{ margin: "20px auto" }} variant="inset" />

      <MC.Box>
        <MC.Button variant="contained" color="secondary">
          Submit User
          </MC.Button>
      </MC.Box>

    </MC.Box>
  );
}
