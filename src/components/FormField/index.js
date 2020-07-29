import React from 'react';

// import { Container } from './styles';

function FormField({label, name, type, value, onChange}) {
  return (
    <div>
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
  );
}

export default FormField;