import React, { useState } from "react";
import * as MC from "@material-ui/core";
import * as MS from "@material-ui/styles";
import * as ML from "@material-ui/lab";

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

function SignIn() {
  const [signinState, setSignInState] = useState({ fail: false });

  const HandleSubmit = () => {
    setSignInState({ fail: true });
  };

  return (
    <MC.Container>
      <MC.MuiThemeProvider theme={theme}>
        <MC.Box
          width={400}
          borderRadius={16}
          borderColor="grey.500"
          border={1}
          style={{
            margin: "67px auto",
            backgroundColor: "#fEfeff",
            padding: "10px",
          }}
          boxShadow={2}
        >
            <MC.Box textAlign="center" fontWeight="fontWeightBold" margin="10px 0" fontSize={40}>
              {"Sign in"}{" "}
            </MC.Box>

          <MC.Collapse in={signinState.fail} >
            <ML.Alert severity="error" >
              {"Incorrect login credentials "}
            </ML.Alert>
          </MC.Collapse>

          <MC.TextField fullWidth id="standard-basic" label="ID" />
          <MC.TextField
            fullWidth
            id="standard-basic"
            type="password"
            label="Password"
          />
          <MC.Box style={{ textAlign: "center" }}>
            <MC.Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            {"Stay Signed In"}
            <MC.Button
              variant="contained"
              color="primary"
              onClick={HandleSubmit}
            >
              {"Submit"}
            </MC.Button>
          </MC.Box>
        </MC.Box>
      </MC.MuiThemeProvider>
    </MC.Container>
  );
}

export default SignIn;
