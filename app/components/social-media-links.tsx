import React from "react";
import Image from "next/image";

export interface SocialMediaLink {
  alt: string;
  src: string;
  href: string;
  aspectRatio: number;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "",
    aspectRatio: 1,
    alt: "instagram",
    src: "/images/socials/instagram.svg",
  },
  {
    href: "",
    aspectRatio: 36 / 40,
    alt: "tiktok",
    src: "/images/socials/tiktok.svg",
  },
  {
    href: "",
    aspectRatio: 1,
    alt: "twitter",
    src: "/images/socials/twitter.svg",
  },
  {
    href: "",
    aspectRatio: 49 / 40,
    alt: "facebook",
    src: "/images/socials/facebook.svg",
  },
  {
    href: "",
    aspectRatio: 58 / 40,
    alt: "youtube",
    src: "/images/socials/youtube.svg",
  },
];

export default function SocialMediaLinks() {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a
          title={link.alt}
          key={index}
          className="dark:hover:text-blue-300 text-gray-300"
          href={link.href}
        >
          <Image
            height={24}
            width={24 * link.aspectRatio}
            src={link.src}
            alt={link.alt}
          />
        </a>
      ))}
    </>
  );
}
