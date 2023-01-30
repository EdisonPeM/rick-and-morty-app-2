import { memo } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "utils/common";
import { Link } from "react-router-dom";
import { getSlug } from "utils/slugs";

import Card from "components/Card";
import Image from "components/Image";

const CharacterCard = ({ id }) => {
  const data = useSelector((s) => s.characters.byId[id]);

  if (isEmpty(data)) return null;

  return (
    <Card>
      <Image src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
      <Link to={`/characters/${getSlug(data.id, data.name)}`}>View more</Link>
    </Card>
  );
};

export default memo(CharacterCard);
