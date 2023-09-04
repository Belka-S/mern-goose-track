import PropTypes from 'prop-types';

import { Label, FormLabelSpan, InputField, ErrorMessage } from './UniversalInput.styled';

export default function UniversalInput({ label, type, name, placeholder }) {
  return (
    <Label htmlFor={name}>
      <FormLabelSpan>{label}</FormLabelSpan>
      <InputField id={name} type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" />
    </Label>
  );
}

UniversalInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
