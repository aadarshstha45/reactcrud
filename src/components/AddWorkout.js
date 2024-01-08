import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const AddWorkout = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [loads, setLoads] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };
  const handleLoadsChange = (e) => {
    setLoads(e.target.value);
  };

  const handleSubmit = () => {
    if (title) {
      const available = JSON.parse(localStorage.getItem("workouts")) || [];
      var id;
      available.length !== 0
        ? available.findLast((item) => (id = item.id))
        : (id = 0);
      console.log(available.findLast((item) => (id = item.id)));

      var listItem = {
        id: id + 1,
        title,
        reps,
        loads,
      };
      available.push(listItem);

      localStorage.setItem("workouts", JSON.stringify(available));
      navigate("/getworkouts");
    } else {
      alert("Enter value!");
    }
    console.log({ title, reps, loads });
  };
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Add Workout
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={title}
          onChange={(e) => handleTitleChange(e)}
          label="Workout Title"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          value={reps}
          onChange={(e) => handleRepsChange(e)}
          label="Workout Repetition"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          value={loads}
          onChange={(e) => handleLoadsChange(e)}
          label="Workout Loads"
          variant="outlined"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
};

export default AddWorkout;
