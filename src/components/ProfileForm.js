import React from "react";

function ProfileForm() {
  return (
    <div>
      <div className="file is-primary">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Upload profile image</span>
          </span>
        </label>
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" placeholder="Create username" />
        </div>
      </div>

      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="John" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Doe" />
        </div>
      </div>

      <div className="field">
        <label className="label">Expert in</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g. React" />
        </div>
      </div>

      <div className="field">
        <label className="label">First Name</label>
        <div className="input">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Location</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select location</option>
              <option>Amsterdam</option>
              <option>Barcelona</option>
              <option>Berlin</option>
              <option>Bordeaux</option>
              <option>Cologne</option>
              <option>Lisbon</option>
              <option>Madrid</option>
              <option>Paris</option>
              <option>Porto</option>
              <option>Vienna</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Skills</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select skills</option>
              <option>Javascript</option>
              <option>React</option>
              <option>Typescript</option>
              <option>Python</option>
              <option>C#</option>
              <option>Java</option>
              <option>PHP</option>
              <option>Angular</option>
              <option>VueJS</option>
              <option>NodeJS</option>
              <option>ExpressJS</option>
              <option>MondogoDB</option>
              <option>Mongoose</option>
              <option>MySQL</option>
              <option>RESTful API</option>
              <option>UX/UI</option>
              <option>Figma</option>
              <option>Adobe XD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">About me</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Save</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;


