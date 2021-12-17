import { useContext } from "react";
import { UserContext } from "../context/app.context";
//-------------------------------------------------------
//                        MUI
//-------------------------------------------------------
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../createJob.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const ITEM_PADDING_RIGHt = 300;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP + 0 + ITEM_PADDING_RIGHt,
      width: 250,
      display: "flex",
    },
  },
};

const skills = [
  "Javascript",
  "React",
  "Typescript",
  "Python",
  "C#",
  "Java",
  "PHP",
  "Angular",
  "VueJS",
  "NodeJS",
  "ExpressJS",
  "MondogoDB",
  "Mongoose",
  "MySQL",
  "UX/UI",
  "Figma",
  "Adobe XD",
];

function getStyles(skills, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(skills) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CreateJob(props) {
  const { name } = useContext(UserContext);

  //-------------------------------------------------------
  //                        MUI
  //-------------------------------------------------------
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const { btnSubmit } = props;
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <form className="form" onSubmit={btnSubmit}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Job title</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded ">
                    <input
                      name="jobTitle"
                      className="input "
                      type="text"
                      placeholder="Job title"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Job Description</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      name="jobDescription"
                      className="textarea"
                      placeholder="Explain what your advert is about"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-select">
              <FormControl
                className="select-skills"
                sx={{ m: 1.5, width: 300 }}
              >
                <div className="field-label is-normal">
                  <label className="label">Skills needed</label>
                </div>
                <InputLabel id="demo-multiple-chip-label"> </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  name="skills"
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        m: 1.5,
                      }}
                    >
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {skills.map((skills) => (
                    <MenuItem
                      key={skills}
                      value={skills}
                      style={getStyles(skills, personName, theme)}
                    >
                      {skills}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Finished by</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      name="deadline"
                      className="input"
                      type="date"
                      placeholder="When should your project being finished"
                    />
                  </p>
                </div>

                <div className="field">
                  <p className="control is-expanded has-icons-right">
                    <input
                      name="price"
                      className="input "
                      type="number"
                      placeholder="How much do you offer? "
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label"></div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button
                      style={{ backgroundColor: "#2E2C2C" }}
                      type="submit"
                      className="button is-primary"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateJob;
