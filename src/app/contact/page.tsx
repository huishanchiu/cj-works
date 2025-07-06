// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("送出資料：", formData);
    alert("送出成功！");
    // 這裡未來可以串接 API 或寄信服務
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">詢價表單</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="姓名"
          onChange={handleChange}
          className="w-full border px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border px-3 py-2"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="電話"
          onChange={handleChange}
          className="w-full border px-3 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="想詢問的內容..."
          onChange={handleChange}
          className="w-full border px-3 py-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          送出
        </button>
      </form>
    </div>
  );
}
