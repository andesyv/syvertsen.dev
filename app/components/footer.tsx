import { FaGithub } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import Copydate from "./copydate";

interface SocialLinksProps {
  github: string;
  email: string;
}

function SocialLinks({ github, email }: SocialLinksProps) {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <a target="_blank" rel="noopener noreferrer" href={github}>
        <FaGithub />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={email}>
        <TbMailFilled />
      </a>
    </div>
  );
}

interface FooterProps {
  title: string;
  socialLinks?: {
    github: string;
    email: string;
  };
}

export default function Footer({ title, socialLinks }: FooterProps) {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <Copydate /> {title}
      {/* I don't know that this one does... */}
      {
        /* <style jsx>
        {`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}
      </style> */
      }
      {socialLinks !== undefined && <SocialLinks {...socialLinks} />}
    </small>
  );
}
