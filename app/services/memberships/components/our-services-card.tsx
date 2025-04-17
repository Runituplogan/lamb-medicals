import { 
  faPlus, 
  faUserMd, 
  faLock, 
  faStar, 
  faBalanceScale, 
  faUser, 
  faHeart, 
  faLeaf, 
  faExclamationCircle 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OurServicesCardProps {
  service: {
    icon: string;
    title: string;
  };
}

const iconMap: Record<string, any> = {
  "fa-plus": faPlus,
  "fa-user-md": faUserMd,
  "fa-lock": faLock,
  "fa-star": faStar,
  "fa-balance-scale": faBalanceScale,
  "fa-user": faUser,
  "fa-heart": faHeart,
  "fa-leaf": faLeaf,
  "fa-exclamation-circle": faExclamationCircle
};

export default function OurServicesCard({ service }: OurServicesCardProps) {
  const cleanTitle = service.title.replace("(coming soon!)", "").trim();

  return (
    <article
      className="grid gap-[2rem] rounded-md bg-white p-[2.4rem]"
     
    >
      <hgroup className="flex items-center gap-[1.2rem]">
        <span className="inline-flex size-[4rem] items-center justify-center rounded-md bg-primary text-white text-2xl">
          {iconMap[service.icon] ? <FontAwesomeIcon icon={iconMap[service.icon]} /> : null}
        </span>
        {service.title.startsWith("(coming soon!)") && (
          <span className=" text-md font-semibold tracking-[0.02em] text-black">
            (coming soon!)
          </span>
        )}
      </hgroup>
      <p className=" text-md leading-[2.8rem] tracking-[0.02em] text-black">
        {cleanTitle}
      </p>
    </article>
  );
}
