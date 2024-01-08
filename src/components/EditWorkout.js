import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditWorkout = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [loads, setLoads] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const workoutToEdit = storedWorkouts.find(
      (workout) => workout.id.toString() === id.toString()
    );
    if (workoutToEdit) {
      setTitle(localStorage.getItem("title"));
      setReps(localStorage.getItem("reps"));
      setLoads(localStorage.getItem("loads"));
    }
  }, [id]);

  const handleSubmit = (e) => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const updatedWorkouts = storedWorkouts.map((workout) => {
      if (workout.id.toString() === id.toString()) {
        return { ...workout, title, reps, loads };
      }
      return workout;
    });
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    navigate("/getworkouts");
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Edit Workout
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
          onChange={(e) => setTitle(e.target.value)}
          label="Workout Title"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          label="Workout Repetition"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          value={loads}
          onChange={(e) => setLoads(e.target.value)}
          label="Workout Loads"
          variant="outlined"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained">
          Update
        </Button>
      </Box>
    </>
  );
};

export default EditWorkout;
