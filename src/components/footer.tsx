import React from "react";

import { HomeContainer } from "./container";
import { HeartIcon, Rocket, Minus } from "lucide-react";
import { ExternalLink } from "@/ui/link";

const Footer = () => {
  return (
    <HomeContainer>
      <div className="fixed bottom-0 mb-5 flex w-full items-center justify-center space-x-3 text-sm">
        <div className="flex items-center space-x-2 text-neutral-400">
          <HeartIcon size={16} className="text-red-500" />
          <div className="flex items-center space-x-1">
            <span className="font-medium">Created by</span>
            <ExternalLink
              href="https://twitter.com/pheralb_"
              externalIcon={true}
            >
              <span className="font-medium">pheralb</span>
            </ExternalLink>
          </div>
        </div>
        <Minus className="h-4 text-neutral-600 rotate-90" />
        <div className="flex items-center space-x-2 text-neutral-400">
          <Rocket size={16} className="text-indigo-500" />
          <div className="flex items-center space-x-1">
            <span className="font-medium">Built with</span>
            <ExternalLink href="https://create.t3.gg/" externalIcon={true}>
              <span className="font-medium">T3 Stack</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Footer;
