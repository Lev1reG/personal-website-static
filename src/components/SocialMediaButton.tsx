import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

interface SocialMediaButtonProps {
  href: string;
  icon: Icon;
}

const SocialMediaButton = ({
  href,
  icon: IconComponent,
}: SocialMediaButtonProps) => {
  return (
    <Button
      asChild
      size="icon"
      variant="outlineCustom"
      className="size-9 lg:size-12"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent weight="bold" className="size-6 lg:size-8" />
      </a>
    </Button>
  );
};

const SocialMedia = () => {
  const socialLinks = [
    {
      href: "https://github.com/Lev1reG",
      icon: GithubLogoIcon,
    },
    {
      href: "https://www.linkedin.com/in/derentanaphan/",
      icon: LinkedinLogoIcon,
    },
    {
      href: "https://www.instagram.com/derentanaphan_/",
      icon: InstagramLogoIcon,
    },
    {
      href: "mailto:fyordderen@gmail.com",
      icon: EnvelopeSimpleIcon,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link, index) => (
        <SocialMediaButton key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export default SocialMedia;
