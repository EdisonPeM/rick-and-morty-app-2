import InfoBlock from "components/InfoBlock";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSlug } from "utils/slugs";

const LocationLink = ({ id, label }) => {
  const name = useSelector((s) => s.locations.byId[id]?.name);

  if (name) {
    const slug = getSlug(id, name);
    return (
      <InfoBlock
        label={label}
        value={
          name !== "unknown" ? (
            <Link to={`/locations/${slug}`}>{name}</Link>
          ) : (
            name
          )
        }
      />
    );
  }

  return null;
};

export default LocationLink;
