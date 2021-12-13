import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/app.context";

function CreateJob(props) {
  const { name } = useContext(UserContext);

  return (
    <>
      <form onSubmit={props.btnSubmit}>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">From</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  name="username"
                  class="input"
                  type="text"
                  placeholder="Username"
                  value={props.name}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control is-expanded has-icons-right">
                <input
                  name="jobTitle"
                  class="input "
                  type="text"
                  placeholder="Job title"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Job Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  name="jobDescription"
                  class="textarea"
                  placeholder="Explain what your advert is about"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Skills needed</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select name="skills" multiple size="6">
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
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Finished by</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  name="deadline"
                  class="input"
                  type="date"
                  placeholder="When should your project being finished"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control is-expanded has-icons-right">
                <input
                  name="price"
                  class="input "
                  type="number"
                  placeholder="How much do you offer? "
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button type="submit" class="button is-primary">
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
