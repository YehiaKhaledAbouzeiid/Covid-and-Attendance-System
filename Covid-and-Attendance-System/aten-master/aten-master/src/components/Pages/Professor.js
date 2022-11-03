import React, { useState } from "react";
import * as MC from "@material-ui/core";
import * as MS from "@material-ui/styles";
import * as ML from "@material-ui/lab";
import AttendanceTable, { AttendanceTableProf } from "./Table";
const useStyles = MS.makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 400,
  },
});

const professorData = {
  name: "prof. mohamed elzeweidy",
  ID: "31810417",
  email: "dr.mohamed.elzeweidy@sha.edu.eg",
  ProfilePhoto:
    "data:image/jpeg;base64,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",
};

export default function Professor() {
  const classes = useStyles();

  const [professor, setProfessor] = React.useState({ profile: professorData });
  let defaultSubjects = [
    {
      name: "Compilers",
      TimeAndLocation: "9am Sunday at 6h",
    },
    {
      name: "Multimedia",
      TimeAndLocation: "12am Sunday at 5h",
    },
    {
      name: "Expert system",
      TimeAndLocation: "9am tuesday at 4h",
    },
    {
      name: "software engineering",
      TimeAndLocation: "12am tuesday at 7h",
    },
  ];
  const [subjects, setSubjects] = React.useState(defaultSubjects);

  const [student, setStudent] = React.useState({
    viewAttendance: false,
 });

  let viewProf = () => {
    setStudent({viewAttendance: true})
  }

  if (student.viewAttendance ) {
    return (
      <MC.Container>
        <AttendanceTableProf />
      </MC.Container>
    );
  }

  return (
    <MC.Container>
      <MC.Box>
        <MC.Card className={classes.root} style={{ margin: "0 auto" }}
          onClick={viewProf}
        >
          <MC.CardActionArea>
            <MC.CardMedia
              className={classes.media}
              image={professor.profile.ProfilePhoto}
              title="Contemplative Reptile"
            />
            <MC.CardContent>
              <MC.Typography gutterBottom variant="h5" component="h2">
                {professor.profile.name}
              </MC.Typography>

              <MC.Typography gutterBottom variant="h6" component="h6">
                Email: <br />
                {professor.profile.email}
              </MC.Typography>

              <MC.Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                ID: {professor.profile.ID} <br />
              </MC.Typography>
            </MC.CardContent>
          </MC.CardActionArea>
          <MC.CardActions>
            <MC.Button size="small" color="primary" disabled>
              Modify Profile
            </MC.Button>
          </MC.CardActions>

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
                      secondary={subject.TimeAndLocation }
                    />
                  </MC.ListItem>
                  <MC.Divider variant="inset" component="li" />
                </MC.List>
              );
            })}
          </MC.Box>
        </MC.Card>
      </MC.Box>
    </MC.Container>
  );
}
