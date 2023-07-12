"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import type { Session } from "next-auth";

import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { Box, LogOut, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { cn } from "@/utils/cn";

export const authMenuClasses = cn("flex items-center space-x-2");

interface AuthMenuProps {
  session: Session | null;
}

const AuthMenu = (props: AuthMenuProps) => {
  // Sign Out:
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-6 w-6">
          <AvatarImage src={props.session?.user?.image ?? ""} />
          <AvatarFallback>
            {props.session?.user?.username?.toLocaleUpperCase()[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className={authMenuClasses}>
          <Plus className="h-4" />
          <span>New link</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={authMenuClasses}>
          <Box className="h-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <DropdownMenuItem className={authMenuClasses} onClick={handleSignOut}>
          <LogOut className="h-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthMenu;