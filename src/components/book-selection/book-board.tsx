import { Link, Outlet } from "react-router-dom";

const BookBoard = () => {
  return (
    <div>
      <Link to="/1">
        <h2 >Book Board</h2>
      </Link>
      <Outlet />
    </div>
  );
}

export default BookBoard