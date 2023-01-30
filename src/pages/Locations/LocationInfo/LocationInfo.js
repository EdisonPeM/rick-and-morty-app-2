import { memo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { isEmpty } from "utils/common";
import { getSlug } from "utils/slugs";
import { setHash } from "utils/location";

import Card from "components/Card";
import InfoBlock from "components/InfoBlock";
import Highlight from "components/Highlight";

const LocationInfo = ({ id, keyword }) => {
  const ref = useRef();
  const data = useSelector((s) => s.locations.byId[id]);

  // Scroll restoration
  const slug = getSlug(id, data.name);
  useEffect(() => {
    const hashSlug = window.location.hash;
    if (hashSlug && hashSlug === `#${slug}`) {
      const linkNode = ref.current;
      linkNode.scrollIntoView({ behavior: "smooth", block: "nearest" });

      setHash("");
    }
  }, [slug]);

  const setId = () => setHash(slug);

  if (isEmpty(data) || data.name === "unknown") return null;

  return (
    <Link
      id={slug}
      to={`/locations/${slug}`}
      className="btn-ghost text-transparent"
      onClick={setId}
      ref={ref}
    >
      <Card className="h-100">
        <InfoBlock
          label="Name"
          valueText={data.name}
          value={<Highlight value={data.name} match={keyword} />}
        />
        <InfoBlock
          label="Type"
          valueText={data.type}
          value={<Highlight value={data.type} match={keyword} />}
        />
        <InfoBlock
          label="Dimension"
          valueText={data.dimension}
          value={<Highlight value={data.dimension} match={keyword} />}
        />
      </Card>
    </Link>
  );
};

export default memo(LocationInfo);
