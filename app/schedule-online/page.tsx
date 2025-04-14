"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { all_services } from "../data/services";
import { useScheduleOnline } from "../contexts/scheduleOnline";
import { Errors, FormData, Section } from "./_types";


const Page: React.FC = () => {
  const { ScheduleOnlineData }= useScheduleOnline();

  const meta = ScheduleOnlineData?.meta
  ? JSON.parse(ScheduleOnlineData.meta)
  : {};

useEffect(() => {
  if (meta.og_title) {
    document.title = meta.og_title;
  } else if (ScheduleOnlineData?.title) {
    document.title = ScheduleOnlineData.title;
  }

  if (meta.og_description) {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.og_description);
  }

  if (meta.keywords) {
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", meta.keywords.join(", "));
  }
}, [meta, ScheduleOnlineData]);

  const section: Section =
    ScheduleOnlineData?.content?.find((item : Section) => item.type === "section1") || {
      type: "section1",
      image: "",
      headerText: "",
      bodyText: "",
      formFields: [],
    };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "", 
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: formData.email.includes("@") ? "" : "Valid email is required",
      service: formData.service ? "" : "Please select a service",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-10 md:gap-20 lg:gap-36 pt-20 lg:px-0 px-10">
      {section.image && (
        <img src={section.image} alt="appointment banner" className="h-full w-screen lg:w-[50vw] lg:block hidden" />
      )}
      <div className="pt-20 xl:pt-40 pb-10 xs:px-4 md:py-20 md:pl-10 md:pr-36 lg:pr-40 xl:pr-56">
        <h1 className="text-[#161616] font-rubik font-semibold text-2xl md:text-3xl lg:text-[35px] xl:text-[45px] 2xl:text-[48px] w-[90%] md:block hidden">
          {section.headerText}
        </h1>
        <p className="font-medium text-sm lg:text-[16px] text-black font-work_sans md:w-[90%] mt-5">
          {section.bodyText}
        </p>
        <form className="w-full space-y-8 xs:space-y-10 font-work_sans mt-10" onSubmit={handleSubmit}>
          {section.formFields?.map((field, index) => (
            <div className="w-full" key={index}>
              {field.type !== "button" && <label className="text-[#121212]" htmlFor={field.label.toLowerCase().replace(/\s/g, "-")}>
                {field.label}
              </label>}
              {field.type === "textarea" ? (
                <textarea
                  rows={4}
                  className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                  placeholder={field.label}
                  name={field.label.toLowerCase().replace(/\s/g, "-")}
                  value={formData[field.label.toLowerCase().replace(/\s/g, "-")] || ""}
                  onChange={handleChange}
                />
              ) : field.type === "select" ? (
                <select
                  className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                  name="service"
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
              ) : field.type === "button" ? (
                <button
                  type="submit"
                  className="h-20 w-full xs:w-max xs:px-10 lg:w-full bg-primary text-white font-medium font-poppins rounded-lg transition outline-none focus:outline-grey-100"
                >
                  {field.label}
                </button>
              ) : (
                <input
                  className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                  placeholder={field.label}
                  name={field.label.toLowerCase().replace(/\s/g, "-")}
                  type={field.type}
                  value={formData[field.label.toLowerCase().replace(/\s/g, "-")] || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </section>
  );
}; 

export default Page;
