import React, { TextareaHTMLAttributes } from "react";
import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...attributes }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea {...attributes} id={name} />
  </div>
);

export default Textarea;
