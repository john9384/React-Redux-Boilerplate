import React from "react";
import PropTypes from "prop-types";

const InputText = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  classname
}) => {
  return (
    <div>
      <input
        className={classname}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
      <small style={{ display: "block" }}>{info}</small>
      <small style={{ display: "block" }}>{error}</small>
    </div>
  );
};
InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  classname: PropTypes.string
};
InputField.defaultProps = {
  type: "text"
};
export default InputText;
