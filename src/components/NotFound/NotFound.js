import { Link } from "react-router-dom";

const NotFound = ({ page = "Page", linkTo = "/" }) => (
  <div>
    <h1>{page} not found</h1>
    <Link to={linkTo}>Go back</Link>
  </div>
);

export default NotFound;
