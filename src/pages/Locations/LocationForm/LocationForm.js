import { useCallback } from "react";
import { Field, Form, Formik } from "formik";
import { initialValues, SORT_BY__OPTIONS } from "../constants";

const LocationForm = ({ filters, setFilters }) => {
  const customHandler = useCallback(
    (handleChange) => (ev) => {
      handleChange(ev);

      const { name, value } = ev.target;
      // reset page when some filter change
      setFilters({ [name]: value, page: "" });
    },
    [setFilters]
  );

  const clearFilters = () => setFilters(initialValues);

  return (
    <Formik initialValues={filters} enableReinitialize>
      {({ handleChange }) => (
        <Form>
          <div className="mb-3 d-flex gap-3 f-wrap f-center">
            <Field
              className="w-100 w-md-auto"
              type="search"
              name="q"
              placeholder="Search some keyword"
              onChange={customHandler(handleChange)}
            />

            <Field
              className="w-100 w-md-auto"
              as="select"
              name="sortBy"
              onChange={customHandler(handleChange)}
            >
              <option value="" className="text-muted">
                Sort By
              </option>
              {SORT_BY__OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>

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

export default LocationForm;
