import Grid from "components/Grid";
import { isEmpty } from "utils/common";
import LocationInfo from "../LocationInfo";

const LocationResults = ({ results, keyword }) => {
  return !isEmpty(results) ? (
    <Grid>
      {results.map((id) => (
        <LocationInfo key={id} id={id} keyword={keyword} />
      ))}
    </Grid>
  ) : (
    <p>No results avilable, try with other search</p>
  );
};

export default LocationResults;
