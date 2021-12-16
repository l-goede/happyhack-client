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
      <form classNameName="form" onSubmit={btnSubmit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Job title</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  name="jobTitle"
                  className="input "
                  type="text"
                  placeholder="Job title"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-user"></i>
                </span>
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

        <div>
          <InputLabel className="skills" id="demo-multiple-name-label">
            Skills needed
          </InputLabel>
          <Select
            className="form-select"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            name="skills"
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {skills.map((name) => (
              <MenuItem
                selected
                className="MenuItem"
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
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
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
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
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-user"></i>
                </span>
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
                  classNameName="submitButton"
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
    </>
  );
}

export default CreateJob;

// import React from "react";
// import { useContext } from "react";
// import { UserContext } from "../context/app.context";
// function CreateJob(props) {
//   const { name } = useContext(UserContext);
//   return (
//     <>
//       <form onSubmit={props.btnSubmit}>
//         <div className="field is-horizontal">
//           <div className="field-label is-normal">
//             <label className="label">From</label>
//           </div>
//           <div className="field-body">
//             <div className="field">
//               <p className="control is-expanded has-icons-left">
//                 <input
//                   name="username"
//                   className="input"
//                   type="text"
//                   placeholder="Username"
//                   value={props.name}
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-user"></i>
//                 </span>
//               </p>
//             </div>
//             <div className="field">
//               <p className="control is-expanded has-icons-right">
//                 <input
//                   name="jobTitle"
//                   className="input "
//                   type="text"
//                   placeholder="Job title"
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-envelope"></i>
//                 </span>
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-user"></i>
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-label is-normal">
//             <label className="label">Job Description</label>
//           </div>
//           <div className="field-body">
//             <div className="field">
//               <div className="control">
//                 <textarea
//                   name="jobDescription"
//                   className="textarea"
//                   placeholder="Explain what your advert is about"
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-label is-normal">
//             <label className="label">Skills needed</label>
//           </div>
//           <div className="field-body">
//             <div className="field is-narrow">
//               <div className="control">
//                 <div className="select is-fullwidth">
//                   <select name="skills" multiple size="6">
//                     <option>Select skills</option>
//                     <option>Javascript</option>
//                     <option>React</option>
//                     <option>Typescript</option>
//                     <option>Python</option>
//                     <option>C#</option>
//                     <option>Java</option>
//                     <option>PHP</option>
//                     <option>Angular</option>
//                     <option>VueJS</option>
//                     <option>NodeJS</option>
//                     <option>ExpressJS</option>
//                     <option>MondogoDB</option>
//                     <option>Mongoose</option>
//                     <option>MySQL</option>
//                     <option>RESTful API</option>
//                     <option>UX/UI</option>
//                     <option>Figma</option>
//                     <option>Adobe XD</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-label is-normal">
//             <label className="label">Finished by</label>
//           </div>
//           <div className="field-body">
//             <div className="field">
//               <p className="control is-expanded has-icons-left">
//                 <input
//                   name="deadline"
//                   className="input"
//                   type="date"
//                   placeholder="When should your project being finished"
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-user"></i>
//                 </span>
//               </p>
//             </div>
//             <div className="field">
//               <p className="control is-expanded has-icons-right">
//                 <input
//                   name="price"
//                   className="input "
//                   type="number"
//                   placeholder="How much do you offer? "
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fas fa-envelope"></i>
//                 </span>
//                 <span className="icon is-small is-right">
//                   <i className="fas fa-user"></i>
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-label"></div>
//           <div className="field-body">
//             <div className="field">
//               <div className="control">
//                 <button type="submit" className="button is-primary">
//                   Create
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
// export default CreateJob;
