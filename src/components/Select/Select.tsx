import React, { SelectHTMLAttributes } from "react";
import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...attributes
}) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select value="" {...attributes} id={name}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
