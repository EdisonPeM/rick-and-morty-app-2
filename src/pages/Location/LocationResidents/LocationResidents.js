import { isEmpty } from "utils/common";

import CharacterCard from "components/shared/CharacterCard";
import Grid from "components/Grid";

const LocationResidents = ({ residents = [] }) =>
  !isEmpty(residents) ? (
    <Grid>
      {residents.map((id) => (
        <CharacterCard id={id} key={id} />
      ))}
    </Grid>
  ) : (
    <p>No residents in this location</p>
  );

export default LocationResidents;
