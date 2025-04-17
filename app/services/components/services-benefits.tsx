interface ServicesBenefitsProps {
  title: string;
  description?: string;
  benefits: string[];
}

export default function ServicesBenefits({
  title,
  description,
  benefits,
}: ServicesBenefitsProps) {
  return (
    <section className="grid gap-[2.4rem] pt-[2rem]">
      <h3
        className="font-rubik text-[3.2rem] font-semibold leading-[3.7rem] text-black xs:text-[4rem] lg:text-[5.8rem] xl:leading-[6rem]"
       
      >
        {title}
      </h3>
      <ul className="grid gap-[0.6ren] lg:gap-[1rem]">
        <h5
          className="w-full  text-md font-medium leading-[2.4rem] tracking-[0.02rem] text-black xs:text-md xs:leading-[3rem] md:leading-[3.6rem] lg:text-lg xxl:text-md xxl:leading-[4.5rem]"
         
        >
          {!!description && description}
        </h5>

        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="list-inside list-disc px-[1.2rem]  text-md font-medium leading-[3.5rem] tracking-[0.02em] text-black xs:text-md xl:px-[3.5rem]"
           
          >
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}
