import clx from "classnames";
import { memo } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "utils/common";
import Image from "components/Image";
import LocationLink from "../LocationLink";
import InfoBlock from "components/InfoBlock";
import Card from "components/Card";
import styles from "./styles.module.scss";

const CharacterPage = ({ id }) => {
  const data = useSelector((s) => s.characters.byId[id]);

  if (isEmpty(data)) return null;

  return (
    <div>
      <Card className={styles["character-card"]}>
        <h1 className="m-0 mb-3">{data.name}</h1>
        <hr />
        <div className="d-flex f-column f-md-row f-center gap-3">
          <div className="w-100">
            <Image
              className={styles["character-image"]}
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className={clx("w-100", styles["character-info"])}>
            <InfoBlock label="Status" value={data.status} />
            <InfoBlock label="Gender" value={data.gender} />
            <InfoBlock label="Specie" value={data.species} />
            <InfoBlock label="Type" value={data.type} />

            <LocationLink label="Origin" id={data.origin} />
            <LocationLink label="Location" id={data.location} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default memo(CharacterPage);
