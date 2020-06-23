import React, { useState } from "react";

interface MYForm {
  onSubmit: (form: { name: string; desc: string }) => void;
}

const InputType = ({ onSubmit }: MYForm) => {
  const [form, setForm] = useState({
    name: "",
    desc: "",
  });
  const { name, desc } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      desc: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChange}></input>
        <input name="desc" value={desc} onChange={handleChange}></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default InputType;
