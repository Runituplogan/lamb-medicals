"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FooterSection1Type } from "./Templates/Footer";

interface getInTouchProps {
  data?: FooterSection1Type;
}

const GetInTouch: React.FC<getInTouchProps> = ({ data }) => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    return;

    emailjs
      .send(
        process.env.VITE_SERVICE_ID as string,
        process.env.VITE_TEMPLATE_ID as string,
        formData as any,
        process.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          toast.success("Request sent successfully!");
        },
        (error) => {
          setLoading(false);
        }
      );
  };

  console.log({GITdata: data})

  return (
    <section className="w-full px-5 xs:py-10 py-10 md:py-36">
      <div className="w-full mx-auto max-w-[1200px] flex flex-col md:flex-row gap-7 md:gap-8 lg:gap-20 xl:gap-28">
        <div className="md:w-[50%]">
          <h1
           
            className="font-bold text-[32px] sm:text-2xl md:text-3xl xl:text-5xl pb-7  lg:text-4xl text-black font-rubik"
          >
            {data?.headerText}
          </h1>

          <p
           
            className="xl:block hidden text-lg leading-loose w-full text-black"
          >
            {data?.BodyText}
          </p>
          <p
           
            className="lg:hidden block text-md leading-loose w-full text-black mt-3"
          >
            {data?.BodyText}
          </p>
          {/* <p className="sm:hidden block text-sm leading-normal w-full text-black">
            Your care. Your time. Your way. Schedule online and experience the
            personalized, concierge-style medical care you deserve.
          </p> */}
          <img
            src="/location.png"
            alt="location map" 
            className="mt-7 w-full md:w-auto md:h-auto"
           
          />
        </div>
        <div className="md:w-[50%] w-full">
          <form
            onSubmit={sendEmail}
            className="w-full h-full flex flex-col justify-between space-y-5 xs:space-y-10 "
          >
            {data?.form?.fields.map((field) => (
              <div key={field.name} className="w-full">
                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    className="p-4 w-full bg-[#FAFAFA] border border-[#0000000A] text-black rounded-xl outline-none focus:outline-grey-100"
                    placeholder={field.name}
                    name={field.name}
                    required={field.required}
                  />
                ) : (
                  <input
                    className="p-4 w-full bg-[#FAFAFA] border border-[#0000000A] text-black rounded-xl outline-none focus:outline-grey-100"
                    placeholder={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <button className="h-20 w-full xs:w-max px-10 lg:w-full bg-primary text-white font-medium font-poppins rounded-xl transition outline-none hover:bg-opacity-70">
              {data?.form?.primaryButton?.text}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
