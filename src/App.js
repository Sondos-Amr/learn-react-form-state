import { useState } from "react";
let nextId = 4;
function App() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
    skills: "",
  });
  const [skills, setSkills] = useState([
    {
      id: 1,
      skill: "html",
    },
    {
      id: 2,
      skill: "css",
    },
    {
      id: 3,
      skill: " js",
    },
  ]);
  const country = ["Egypt", "Risa", "USA"];
  function handleAddClick() {
    setSkills([...skills, { id: nextId, skill: formInputs.skills }]);
    nextId = nextId + 1;
  }

  function handleDeleteClick(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }
  function handleEditClick(id) {
    let updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, skill: skill.skill + "44" } : skill
    );
    setSkills(updatedSkills);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="nameContainer" style={{ padding: "15px" }}>
          <label>Name : </label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(e) => {
              setFormInputs({ ...formInputs, name: e.target.value });
            }}
          />
        </div>
        <div className="emailContainer" style={{ padding: "15px" }}>
          <label>Email : </label>
          <input
            type="text"
            value={formInputs.email}
            onChange={(e) => {
              setFormInputs({ ...formInputs, email: e.target.value });
            }}
          />
        </div>
        <div className="checkContainer" style={{ padding: "15px" }}>
          <label>Are u Student ? </label>
          <input
            type="checkBox"
            checked={formInputs.isStudent}
            onChange={(e) => {
              setFormInputs({ ...formInputs, isStudent: e.target.checked });
            }}
          />
        </div>
        <div className="generalInfoContainer" style={{ padding: "15px" }}>
          <label> General Information </label>
          <textarea
            onChange={(e) => {
              setFormInputs({ ...formInputs, generalInfo: e.target.value });
            }}
          >
            {formInputs.generalInfo}
          </textarea>
        </div>
        <div className="countryContainer" style={{ padding: "15px" }}>
          <label>Country</label>
          <select
            value={formInputs.country}
            onChange={(e) => {
              setFormInputs({ ...formInputs, country: e.target.value });
            }}
          >
            {country.map((co, index) => (
              <option style={{ padding: "15px" }} key={index}>
                {co}
              </option>
            ))}
          </select>
        </div>
        <div className="radioContainer" style={{ padding: "15px" }}>
          <input
            type="radio"
            value={"student"}
            checked={formInputs.status == "student"}
            onChange={(e) => {
              setFormInputs({ ...formInputs, status: e.target.value });
            }}
          />
          Student
          <input
            type="radio"
            value={"teacher"}
            checked={formInputs.status == "teacher"}
            onChange={(e) => {
              setFormInputs({ ...formInputs, status: e.target.value });
            }}
          />
          Teacher
        </div>

        <div className="arrContainer" style={{ padding: "15px" }}>
          <input
            type="text"
            value={formInputs.skills}
            onChange={(e) => {
              setFormInputs({ ...formInputs, skills: e.target.value });
            }}
          />
          <button onClick={handleAddClick}>Add Country</button>
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                {skill.skill}{" "}
                <button
                  onClick={() => {
                    handleDeleteClick(skill.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEditClick(skill.id);
                  }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button style={{ marginLeft: "15px" }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
