// src/SetterComponent.tsx
import React, { useState } from "react";
import { setValue } from "../../../../utils/localStorage";

type FormValues = {
  key: string;
  value: string;
};

const SetterComponent = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    key: "",
    value: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(formValues.key, formValues.value);
    setFormValues({ key: "", value: "" });
  };

  return (
    <div>
      <h2>Setter Component</h2>
      <form onSubmit={handleSubmit}>
        <label>Key</label>
        <input
          type="text"
          name="key"
          placeholder="Input key"
          value={formValues.key}
          onChange={handleChange}
          required
        />
        <br />
        <label>Value</label>
        <input
          type="text"
          name="value"
          placeholder="Input value"
          value={formValues.value}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SetterComponent;
