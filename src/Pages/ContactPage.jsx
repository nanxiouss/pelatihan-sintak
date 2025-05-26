import NavBar from "./NavBar";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactSection />
    </>
  );
}

export default ContactPage;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    product: "",
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
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      alert("Pesan berhasil dikirim!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        product: "",
        message: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
              placeholder="Input your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
              placeholder="Input your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
              placeholder="How can we help you?"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product of Interest
            </label>
            <select
              name="product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
              required
            >
              <option value="" disabled selected>
                Select a product
              </option>
              <option value="product-a">Product A</option>
              <option value="product-b">Product B</option>
              <option value="product-c">Product C</option>
              <option value="product-d">Product D</option>
              <option value="other">Other</option>
            </select>
                    
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-amber-800"
              placeholder="Your message here..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full focus:ring-blue-800 focus:border-blue-800 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
          
    </>
  );
}
