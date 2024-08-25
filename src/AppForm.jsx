import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("핸들체인지 name : ", name);
    console.log("핸들체인지 value : ", value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
