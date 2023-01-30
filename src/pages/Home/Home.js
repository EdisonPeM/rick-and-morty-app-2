import Card from "components/Card";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="h-100 d-flex f-column f-center">
    <h1 className="text-center">Welcome to Rick And Morty Wiki</h1>
    <div className="w-50 d-flex gap-3 f-wrap f-center">
      <Link className="w-100" to="/characters">
        <Card>
          <h2 className="fs-20 m-0 text-black">Characters</h2>
        </Card>
      </Link>

      <Link className="w-100" to="/locations">
        <Card>
          <h2 className="fs-20 m-0 text-black">Locations</h2>
        </Card>
      </Link>
    </div>
  </div>
);

export default Home;
