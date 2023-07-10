"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import { cn } from "@/utils/cn";
import { GithubIcon, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

type ProviderFormProps = React.HTMLAttributes<HTMLDivElement>;

const ProviderForm = (props: ProviderFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sign In with GitHub:
  const handleLoginWithGitHub = async () => {
    setIsLoading(true);
    try {
      await signIn("github");
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "mx-auto flex max-w-sm flex-col items-center justify-center space-y-2",
        props.className
      )}
    >
      <Button
        variant="secondary"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleLoginWithGitHub}
        disabled={isLoading}
      >
        <div className="flex items-center space-x-2">
          {isLoading ? (
            <Loader className="h-5 animate-spin duration-1000" />
          ) : (
            <GithubIcon className="h-5" />
          )}
          <span>
            {isLoading ? "Signing with Github..." : "Continue with GitHub"}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default ProviderForm;
