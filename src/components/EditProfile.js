import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../config";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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

function EditProfile(props) {
  let { user } = props;
  console.log("what is with the user ", user);
  const [profileDetail, setProfileDetail] = useState(null);
  const { userId } = useParams();
  console.log("what is with the user id", userId);

  const { btnEditProfile } = props;

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

  return (
    <form
      onSubmit={(event) => {
        btnEditProfile(event, user._id);
      }}
    >
      <div>
        <div className="file is-primary">
          <label className="file-label">
            {/* cloudy below */}
            <input
              className="file-input"
              type="file"
              name="myImage"
              accept="image/png, image/jpg"
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Upload profile image</span>
            </span>
          </label>
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              defaultValue={user.name}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              defaultValue={user.lastName}
              name="lastName"
              type="text"
              placeholder="Write your last name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <input
              className="input"
              defaultValue={user.location}
              name="location"
              type="text"
              placeholder="Enter your location"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">About me</label>
          <div className="control">
            <input
              className="input"
              defaultValue={user.aboutMe}
              name="aboutMe"
              type="text"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>
        <div>
          <InputLabel id="demo-multiple-chip-label"> Skills </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            name="skills"
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
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
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditProfile;
