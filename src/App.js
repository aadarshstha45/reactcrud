import "./App.css";
import AddWorkout from "./components/AddWorkout";
import ListWorkouts from "./components/ListWorkout";
import HomePage from "./components/Home";
import EditWorkout from "./components/EditWorkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/addworkout" element={<AddWorkout />}></Route>
          <Route path="/getworkouts" element={<ListWorkouts />}></Route>
          <Route path="/editworkout/:id" element={<EditWorkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
