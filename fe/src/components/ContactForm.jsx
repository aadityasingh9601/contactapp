import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../utils/config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${BACKEND_URL}/newcontact`,
      { formData },
      { withCredentials: true }
    );
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          name="phone"
          type="number"
          placeholder="Enter your phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <Input
          name="message"
          type="text"
          placeholder="Enter your message"
          onChange={handleChange}
          value={formData.message}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
