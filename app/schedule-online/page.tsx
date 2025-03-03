import { all_services } from "../data/services";

const Page = () => {
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
        <h1
          data-aos="fade-up"
          className="text-[#161616] font-rubik font-semibold text-2xl md:text-3xl w-[90%] md:hidden block"
        >
          Book Your Appointment Today
        </h1>
        <p
          data-aos="fade-up"
          className="font-medium text-sm lg:text-[16px] text-grey-750 font-work_sans md:w-[90%] mt-5"
        >
          Scheduling with Lamb Medicals is the first step toward a personalized
          care experience that puts you at the center.
        </p>

        <div data-aos="fade-up" className="mt-10">
          <form className="w-full space-y-8 xs:space-y-10 font-work_sans">
            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
              Your Name <span className="text-primary">*</span>
              </label>
              <input
                className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                placeholder="Enter name..."
                name="name"
                id="name"
              />
            </div>

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
              />
            </div>

            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Desired service <span className="text-primary">*</span>
              </label>

              <select
                name="service"
                id="service"
                className="mt-3 px-5 pr-[2rem] py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
              >
                <option selected disabled value={undefined}>
                  Select...
                </option>

                {all_services.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label className="text-[#121212]" htmlFor="name">
                Your Message
              </label>
              <textarea
                rows={4}
                className="mt-3 px-5 py-3.5 w-full border border-[#DAE0E6] placeholder:text-[#8E9BAE] rounded-xl outline-none focus:outline-grey-100"
                placeholder="Write your message here…"
                name="service"
              />
            </div>

            <button className="h-20 w-full xs:w-max xs:px-10 lg:w-full bg-primary text-white font-medium font-poppins rounded-lg transition outline-none focus:outline-grey-100">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
