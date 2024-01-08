import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout</h1>
        </Link>
        <div>
          <nav>
            <Link to="/addworkout"> Add Workout</Link>
            <Link to="/getworkouts"> List Workout</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
