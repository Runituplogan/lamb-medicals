"use client";

import { useState } from "react";
import { all_services } from "../data/services";

const Page: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: formData.email.includes("@") ? "" : "Valid email is required",
      service: formData.service ? "" : "Please select a service",
    };

    setErrors(newErrors);

    // Check if there are any errors
    return !Object.values(newErrors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);

    // Clear form after submission
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-10 md:gap-20 lg:gap-36 pt-20 lg:px-0 px-10">
      <img
        src="/48.png"
        alt="lady face care"
        className="h-full w-screen lg:w-[50vw] lg:block hidden"
      />
      <div className="pt-20 xl:pt-40 pb-10 xs:px-4 md:py-20 md:pl-10 md:pr-36 lg:pr-40 xl:pr-56">
        <h1
          data-aos="fade-up"
          className="text-[#161616] font-rubik font-semibold text-2xl md:text-3xl lg:text-[35px] xl:text-[45px] 2xl:text-[48px] w-[90%] md:block hidden"
        >
          Book Your
          <br /> Appointment Today
        </h1>
        <p
          data-aos="fade-up"
          className="font-medium text-sm lg:text-[16px] text-grey-750 font-work_sans md:w-[90%] mt-5"
        >
          Scheduling with Lamb Medical is the first step toward a personalized
          care experience that puts you at the center.
        </p>

        <div data-aos="fade-up" className="mt-10">
          <form className="w-full space-y-8 xs:space-y-10 font-work_sans" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                placeholder="Enter name…"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="email">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                placeholder="Enter email…"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Service Dropdown */}
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="service">
                Desired service <span className="text-primary">*</span>
              </label>
              <select
                name="service"
                id="service"
                className="mt-3 px-5 pr-[2rem] py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                {all_services.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>

            {/* Message Textarea */}
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="message">
                Your Message
              </label>
              <textarea
                rows={4}
                className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                placeholder="Write your message here…"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-20 w-full xs:w-max xs:px-10 lg:w-full bg-primary text-white font-medium font-poppins rounded-lg transition outline-none focus:outline-grey-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
