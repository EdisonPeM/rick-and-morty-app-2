import clx from "classnames";

const InfoBlock = ({ label, value, valueText = "" }) => {
  if (!value) return;

  return (
    <p>
      <strong>{label}: </strong>
      <span
        className={clx({
          "text-muted": value === "unknown" || valueText === "unknown"
        })}
      >
        {value}
      </span>
    </p>
  );
};

export default InfoBlock;
