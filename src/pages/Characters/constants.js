export const INPUT_DELAY = 500;

export const STATUS_OPTIONS = [
  {
    label: "Alive",
    value: "alive"
  },
  {
    label: "Dead",
    value: "dead"
  },
  {
    label: "Unknown",
    value: "unknown"
  }
];

export const GENDER_OPTIONS = [
  {
    label: "Female",
    value: "female"
  },
  {
    label: "Male",
    value: "male"
  },
  {
    label: "Genderless",
    value: "genderless"
  },
  {
    label: "Unknown",
    value: "unknown"
  }
];

export const initialValues = {
  page: "",
  name: "",
  status: "",
  species: "",
  type: "",
  gender: ""
};
