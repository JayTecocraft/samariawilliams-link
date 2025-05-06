import Image from "next/image";
import React from "react";

interface LinkCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  description,
  image,
  title,
  link,
}) => {
  return (
    <a
      className="flex w-full items-center bg-gradient-to-t from-[#d4bfbf] to-white rounded-lg p-3 shadow-card gap-4 text-start cursor-pointer"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className="object-contain"
      />
      <div>
        <p className="text-xs text-black font-bold">{title}</p>
        <p className="text-xs text-black mt-2">{description}</p>
      </div>
    </a>
  );
};

LinkCard.displayName = "LinkCard";

export default LinkCard;
