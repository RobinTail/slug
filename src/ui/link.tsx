import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { FiArrowUpRight } from "react-icons/fi";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface ExternalLinkProps extends LinkProps {
  externalIcon?: boolean;
  underline?: boolean;
}

const LinkRoute = (props: LinkProps) => {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
};

const ExternalLink = (props: ExternalLinkProps) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className={cn(
        props.underline && "underline",
        "hover:underline",
        props.className
      )}
    >
      <div className="flex items-center">
        {props.children}
        {props.externalIcon && (
          <FiArrowUpRight className="ml-1" size={15} strokeWidth={2} />
        )}
      </div>
    </a>
  );
};

export { LinkRoute as Link, ExternalLink };
