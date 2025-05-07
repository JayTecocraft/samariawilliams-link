import Image from "next/image";
import React from "react";
import { CiGlobe, CiMail } from "react-icons/ci";
import { LiaSmsSolid } from "react-icons/lia";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { TbBrandTiktok } from "react-icons/tb";

// Import all images
import Logo from "../images/logos/SW-2024-Logo.png";
import SomaticCoachingLogo from "../images/logos/SomaticCoachingLogo.png";
import ThumbnailPicture from "../images/logos/thumbnail-picture.png";
import TransformTuesday from "../images/logos/TransformTuesday.jpeg";
import EmboidedPractice from "../images/logos/EmboidedPractice.png";
import SupportiveAgency from '../images/logos/SupportiveAgency.png';

// Component imports
import LinkCard from "@/components/LinkCard";
import { FreeTrialBanner } from "@/components/FreeTrial";

// Data definitions
interface SocialMediaLink {
  icon: React.ElementType;
  link: string;
  title: string;
}

interface ContactOption {
  icon: React.ElementType;
  link: string;
  title: string;
}

interface LinkCardData {
  link: string;
  description: string;
  image: string;
  title: string;
}

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/",
    title: "Instagram"
  },
  {
    icon: TbBrandTiktok,
    link: "https://www.tiktok.com/",
    title: "TikTok"
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
    title: "Facebook"
  },
];

const CONTACT_OPTIONS: ContactOption[] = [
  {
    icon: LiaSmsSolid,
    link: "sms:+1-267571 9824",
    title: "Text"
  },
  {
    icon: CiMail,
    link: "mailto:hello@samariawilliams.com",
    title: "Email"
  },
  {
    icon: CiGlobe,
    link: "https://samariawilliams.com/",
    title: "Website"
  },
];

const LINK_CARDS: LinkCardData[] = [
  {
    link: "https://bit.ly/thesomaticcoach?",
    description: "Coaching and mentorship that help you gain valuable self-insight and set goals that ignite your potential.",
    image: SomaticCoachingLogo.src,
    title: "Somatic Coaching"
  },
  {
    link: "https://t.me/+y6ceBEmHpGVmNTgx?",
    description: "Together, we'll provide the motivation, accountability, and resources you need to achieve your goals. Join our private & FREE Telegram group.",
    image: ThumbnailPicture.src,
    title: "Join our supportive community and unlock your full potential."
  },
  {
    link: "https://bit.ly/coworking-2024?",
    description: "Coworking Sessions make it easier to put yourself and your goals back on your calendar! Use this 1-hr community session to set and meet your goals.",
    image: TransformTuesday.src,
    title: "Tranform Your Tuesdays with Virtual Coworking"
  },
  {
    link: "https://bit.ly/coworking-2024?",
    description: "Thrive Together: Supportive marketing for your wellness business. (Neurospicey friendly)",
    image: SupportiveAgency.src,
    title: "Supportive Marketing Agency"
  }
];

const EmbodiedPracticeCard: React.FC = () => (
  <a
    className="flex flex-col w-full items-center bg-gradient-to-t from-[#d4bfbf] to-white rounded-lg p-3 shadow-card gap-4 text-center cursor-pointer"
    href="https://samariawilliams.com/embodied-practice/?"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={EmboidedPractice.src}
      alt="Embodied Practice"
      className="w-full"
    />
    <div>
      <p className="text-xs text-black font-bold">
        Embodied Practice: Become Trauma-Informed
      </p>
      <p className="text-xs text-black mt-2">
        Self-study programs, guided experiences, memberships, and
        specialized Leadership Training to support your evolution.
      </p>
    </div>
  </a>
);

interface SocialButtonProps {
  icon: React.ElementType;
  link: string;
  title: string;
}

const SocialMediaButton: React.FC<SocialButtonProps> = ({ icon: Icon, link, title }) => (
  <a
    href={link}
    className="text-base font-normal bg-gradient-to-t from-[#d4bfbf] to-white p-3 rounded-[10px] flex items-center"
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    aria-label={title}
  >
    <Icon className="size-6" />
  </a>
);

interface ContactButtonProps {
  icon: React.ElementType;
  link: string;
  title: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon: Icon, link, title }) => (
  <a
    href={link}
    className="text-base font-normal text-[#995900] p-3 rounded-full border border-[#995900] flex items-center"
    title={title}
    aria-label={title}
    target="_blank"
  >
    <Icon className="size-6" />
  </a>
);

export default function Home() {
  return (
    <div className="min-h-[100dvh] pt-4 pb-20">
      <main className="flex flex-col h-full gap-8 max-w-xl mx-auto items-center sm:items-start">
        {/* Logo Section */}
        <div className="flex w-full">
          <Image
            alt="Sacred Soul Practice Logo"
            src={Logo.src}
            width={160}
            height={90}
            className="mx-auto mt-10"
            priority
          />
        </div>
        
        {/* Header Section */}
        <div className="flex flex-col w-full items-center text-center">
          <h1 className="text-[32px] font-semibold text-black">
            Sacred Soul Practice
          </h1>
          <p className="text-base font-normal text-black mt-2.5">
            Where Trauma Informed + Self Leadership integrates.
          </p>
          
          {/* Contact Options */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {CONTACT_OPTIONS.map((option) => (
              <ContactButton 
                key={option.link}
                icon={option.icon}
                link={option.link}
                title={option.title}
              />
            ))}
          </div>
          
          {/* Link Cards Section */}
          <div className="mt-4 w-full flex flex-col gap-5">
            {LINK_CARDS.map((card, index) => (
              <LinkCard
                key={`link-card-${index}`}
                link={card.link}
                description={card.description}
                image={card.image}
                title={card.title}
              />
            ))}
            
            {/* Special Embodied Practice Card */}
            <EmbodiedPracticeCard />
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {SOCIAL_MEDIA_LINKS.map((option) => (
              <SocialMediaButton
                key={option.link}
                icon={option.icon}
                link={option.link}
                title={option.title}
              />
            ))}
          </div>
        </div>
      </main>
      <FreeTrialBanner/>
    </div>
  );
}