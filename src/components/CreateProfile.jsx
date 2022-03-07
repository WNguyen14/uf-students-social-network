import React, { useRef, useState } from "react";

const CreateProfile = ({ handleCreateProfile }) => {
  const majorInput = useRef(null);
  const coursesInput = useRef(null);
  const interestsInput = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [majors, setMajors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [interests, setInterests] = useState([]);

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const addMajor = () => {
    setMajors([...majors, majorInput.current.value]);
    majorInput.current.value = "";
  };

  const addCourse = () => {
    setCourses([...courses, coursesInput.current.value]);
    coursesInput.current.value = "";
  };

  const addInterest = () => {
    setInterests([...interests, interestsInput.current.value]);
    interestsInput.current.value = "";
  };

  async function onSubmit() {
    const profile = {
      firstName: firstName,
      lastName: lastName,
      majors: majors,
      courses: courses,
      interests: interests,
    };
    handleCreateProfile(profile);
  }

  return (
    <>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={onFirstNameChange} />
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={onLastNameChange} />
      </div>
      <br />
      {majors.map((major, i) => (
        <div key={i}>
          {major}
          <button onClick={() => setMajors(majors.filter((_, j) => i !== j))}>
            X
          </button>
        </div>
      ))}

      <label>Major(s)</label>
      <input type="text" name="majors" ref={majorInput} />
      <button onClick={addMajor}>Add Major</button>
      <br />
      {courses.map((course, i) => (
        <div key={i}>
          {course}
          <button onClick={() => setCourses(courses.filter((_, j) => i !== j))}>
            X
          </button>
        </div>
      ))}
      <label>Courses</label>
      <input type="text" name="courses" ref={coursesInput} />
      <button onClick={addCourse}>Add Course</button>
      <br />
      {interests.map((interest, i) => (
        <div key={i}>
          {interest}
          <button
            onClick={() => setInterests(interests.filter((_, j) => i !== j))}
          >
            X
          </button>
        </div>
      ))}
      <label>Interests</label>
      <input type="text" name="interests" ref={interestsInput} />
      <button onClick={addInterest}>Add Interest</button>
      <br />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default CreateProfile;
