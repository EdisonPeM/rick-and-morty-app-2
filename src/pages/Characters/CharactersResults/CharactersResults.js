import CharacterCard from "components/shared/CharacterCard";
import Grid from "components/Grid";
import { isEmpty } from "utils/common";

const CharactersResults = ({ results }) => {
  return !isEmpty(results) ? (
    <Grid>
      {results.map((id) => (
        <CharacterCard id={id} key={id} />
      ))}
    </Grid>
  ) : (
    <p>No results avilable, try with other filters</p>
  );
};

export default CharactersResults;
