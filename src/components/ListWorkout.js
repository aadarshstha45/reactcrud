import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ListWorkouts = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(workouts);
  }, []);

  const handleDelete = (id) => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const updatedWorkouts = storedWorkouts.filter(
      (workout) => workout.id !== id
    );
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    setWorkouts(updatedWorkouts);
    navigate("/getworkouts");
  };

  const handleEdit = (id) => {
    const workoutToEdit = workouts.find((workout) => workout.id === id);
    if (workoutToEdit) {
      localStorage.setItem("title", workoutToEdit.title);
      localStorage.setItem("reps", workoutToEdit.reps);
      localStorage.setItem("loads", workoutToEdit.loads);
      localStorage.setItem("id", workoutToEdit.id);

      navigate(`/editworkout/${id}`);
    }
  };
  return (
    <TableContainer sx={{ width: "60ch", border: "none" }} component={Card}>
      <Table
        sx={{ m: 1, width: "55ch", height: "20ch", border: "none" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Repetition</TableCell>
            <TableCell align="center">Load</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workouts.map((workout, id) => (
            <TableRow
              key={workout.id}
              sx={{
                "&:last-child td, &:last-child th": { border: "ActiveBorder" },
              }}
            >
              <TableCell>{workout.title}</TableCell>
              <TableCell align="right">{workout.reps}</TableCell>
              <TableCell align="right">{workout.loads}</TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(workout.id)}
                >
                  Edit
                </Button>

                <Button
                  sx={{ marginLeft: 1 }}
                  size="small"
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(workout.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListWorkouts;
