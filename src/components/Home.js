import { useEffect, useState } from "react";

const HomePage = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(workouts);
  }, []);
  return (
    <>
      {workouts && workouts.length > 0 ? (
        workouts.map((workout) => (
          <ul key={workout.id}>
            <li>Workout Title : {workout.title}</li>
            <li>Workout Repetition : {workout.reps}</li>
            <li>Workout Loads : {workout.loads}</li>
          </ul>
        ))
      ) : (
        <h1>No Workouts</h1>
      )}
    </>
  );
};

export default HomePage;
