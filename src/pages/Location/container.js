import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { isEmpty } from "utils/common";
import { getSlug, getIdFromSlug } from "utils/slugs";
import { getLocationById } from "store/locations/actions";
import { getCharacterById } from "store/characters/actions";

import LocationPage from "./LocationPage";
import NotFound from "components/NotFound";

const LocationContainer = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const name = useSelector((s) => s.locations.byId[id]?.name);
  const residents = useSelector((s) => s.locations.byId[id]?.residents);
  const error = useSelector((s) => s.locations.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id && isEmpty(name)) {
      dispatch(getLocationById(id));
    }
  }, [id, name, dispatch]);

  useEffect(() => {
    if (!isEmpty(residents)) {
      dispatch(getCharacterById(residents));
    }
  }, [residents, dispatch]);

  const computedSlug = getSlug(id, name);
  const isExpectedSlug = slug === computedSlug;

  if (error || !id || (name && !isExpectedSlug)) {
    return <NotFound page="Location" linkTo="/locations" />;
  }

  return <LocationPage id={id} />;
};

export default LocationContainer;
