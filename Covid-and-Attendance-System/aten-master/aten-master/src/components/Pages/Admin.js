import React, { useState } from "react";
import * as MC from "@material-ui/core";
import * as MS from "@material-ui/styles";
import * as ML from "@material-ui/lab";
import * as MI from "@material-ui/icons";

import CreateUser from "./CreateUser";

import PropTypes from "prop-types";

import Statistics from "./Statistics";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MC.Box p={3}>
          <MC.Typography>{children}</MC.Typography>
        </MC.Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = MS.makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MC.Container>
      <MC.Box
        className={classes.root}
        width={750}
        borderColor="grey.500"
        border={1}
        style={{
          margin: "0 auto",
          backgroundColor: "#fEfeff",
        }}
        boxShadow={2}
      >
        <MC.AppBar position="static">
          <MC.Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <MC.Tab label="Add new user" {...a11yProps(0)} />
            <MC.Tab label="Search for a user" {...a11yProps(1)} />
            <MC.Tab label="Gates Statistics" {...a11yProps(2)} />
          </MC.Tabs>
        </MC.AppBar>
        <TabPanel
          value={value}
          index={0}
          style={{ background: "white" }}
          borderRadius={16}
          borderColor="grey.500"
          border={1}
          boxShadow={2}
        >
          <CreateUser />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MC.Box>
            <center>
              <h1> Search </h1>
              <MC.TextField
                fullWidth
                label="Please enter the id of the User"
                className={classes.textField}
              />

              <MC.TextField
                fullWidth
                label="department"
                className={classes.textField}
              />

              <MC.Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ marginTop: 10 }}
              >
                search <MI.SearchOutlined />
              </MC.Button>
            </center>
          </MC.Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Statistics />
        </TabPanel>
      </MC.Box>
    </MC.Container>
  );
}
