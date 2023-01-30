import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { isEmpty } from "utils/common";
import { getIdFromSlug, getSlug } from "utils/slugs";
import { getCharacterById } from "store/characters/actions";
import { getLocationById } from "store/locations/actions";

import CharacterPage from "./CharacterPage";
import NotFound from "components/NotFound";

const Container = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const name = useSelector((s) => s.characters.byId[id]?.name);
  const origin = useSelector((s) => s.characters.byId[id]?.origin);
  const location = useSelector((s) => s.characters.byId[id]?.location);
  const error = useSelector((s) => s.characters.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id && isEmpty(name)) {
      dispatch(getCharacterById(id));
    }
  }, [id, name, dispatch]);

  useEffect(() => {
    if (!isEmpty(origin) && !isEmpty(location)) {
      dispatch(getLocationById([origin, location]));
    }
  }, [dispatch, origin, location]);

  const computedSlug = getSlug(id, name);
  const isExpectedSlug = slug === computedSlug;

  if (error || !id || (name && !isExpectedSlug)) {
    return <NotFound page="Character" linkTo="/characters" />;
  }

  return <CharacterPage id={id} />;
};

export default Container;
