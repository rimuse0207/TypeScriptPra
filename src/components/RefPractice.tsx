import React, { useRef, useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; desc: string }) => void;
};

function RefPractice({ onSubmit }: MyFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    desc: "",
  });
  const { name, desc } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={onChange}
        ref={inputRef}
      ></input>
      <input name="desc" value={desc} onChange={onChange}></input>
      <button type="submit">submit</button>
    </form>
  );
}

export default RefPractice;
