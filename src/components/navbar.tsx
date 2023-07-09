import { ExternalLink, Link } from "@/ui/link";
import React from "react";
import Logo from "./logo";
import { Badge } from "@/ui/badge";
import { GithubIcon, HeartIcon, TwitterIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-transparent pb-3">
      <div className="container my-5 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <Logo width={35} />
            <h3 className="text-xl font-medium">slug</h3>
            <Badge variant="outline" className="text-indigo-200">
              next
            </Badge>
          </div>
        </Link>
        <div className="flex items-center space-x-5">
          <ExternalLink href="https://github.com/pheralb/slug">
            <GithubIcon
              size={20}
              className="text-neutral-300 duration-100 hover:text-gray-200"
            />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/pheralb_">
            <TwitterIcon
              size={20}
              className="text-neutral-300 duration-100 hover:text-blue-300"
            />
          </ExternalLink>
          <ExternalLink href="https://github.com/sponsors/pheralb">
            <HeartIcon
              size={20}
              className="text-neutral-300 duration-100 hover:text-red-300"
            />
          </ExternalLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
