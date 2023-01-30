import { Formik, Form, Field } from "formik";
import { useCallback } from "react";
import { debounce } from "utils/common";
import {
  GENDER_OPTIONS,
  initialValues,
  INPUT_DELAY,
  STATUS_OPTIONS
} from "../constants";

const CharactersForm = ({ filters, setFilters }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateFilterDebounced = useCallback(
    debounce((filter) => setFilters(filter), INPUT_DELAY),
    [setFilters]
  );

  const customHandler = useCallback(
    (handleChange, debounced = false) => (ev) => {
      handleChange(ev);

      const { name, value } = ev.target;
      // reset page when some filter change
      const filter = { [name]: value, page: "" };
      if (debounced) {
        updateFilterDebounced(filter);
      } else {
        setFilters(filter);
      }
    },
    [setFilters, updateFilterDebounced]
  );

  const clearFilters = () => setFilters(initialValues);

  return (
    <Formik initialValues={filters} enableReinitialize>
      {({ handleChange, setValues }) => (
        <Form>
          <div className="mb-3 d-flex gap-3 f-wrap f-center">
            <Field
              className="w-100 w-md-auto"
              name="name"
              placeholder="name"
              onChange={customHandler(handleChange, true)}
            />

            <Field
              className="w-100 w-md-auto"
              as="select"
              name="status"
              onChange={customHandler(handleChange)}
            >
              <option value="">Status</option>
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <Field
              className="w-100 w-md-auto"
              as="select"
              name="gender"
              onChange={customHandler(handleChange)}
            >
              <option value="">Gender</option>
              {GENDER_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>

            <Field
              className="w-100 w-md-auto"
              name="species"
              placeholder="specie"
              onChange={customHandler(handleChange, true)}
            />
            <Field
              className="w-100 w-md-auto"
              name="type"
              placeholder="type"
              onChange={customHandler(handleChange, true)}
            />
            <button
              className="w-100 w-md-auto btn btn-secondary"
              type="reset"
              onClick={clearFilters}
            >
              Restart
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CharactersForm;
