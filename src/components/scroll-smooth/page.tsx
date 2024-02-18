import React from "react";
import Link from "next/link";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

const ScrollLink = ({ href, children }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <Link href={`${href}`} onClick={handleClick}>
      <>{children}</>
    </Link>
  );
};

export default ScrollLink;