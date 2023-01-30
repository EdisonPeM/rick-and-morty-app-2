import { useSelector } from "react-redux";

import { isEmpty } from "utils/common";

import InfoBlock from "components/InfoBlock";
import { STATUS } from "constants/common";

import LocationResidents from "../LocationResidents";
import { Loader } from "components/Loaders";

const LocationPage = ({ id }) => {
  const data = useSelector((s) => s.locations.byId[id]);

  const status = useSelector((s) => s.characters.status);
  const areCharactersLoading = status === STATUS.PENDING;

  if (isEmpty(data)) return <Loader style={{ height: "400px" }} />;

  return (
    <div>
      <h1>{data.name}</h1>

      <div>
        <InfoBlock label="Type" value={data.type} />
        <InfoBlock label="Dimension" value={data.dimension} />
      </div>

      <h2>Residents</h2>

      <div className="position-relative">
        <Loader on={areCharactersLoading} style={{ height: "200px" }} />
        <LocationResidents residents={data.residents} />
      </div>
    </div>
  );
};

export default LocationPage;
