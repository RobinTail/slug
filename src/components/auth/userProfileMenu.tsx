import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

import AuthMenu from "./menu";
import { Link } from "@/ui/link";

const UserProfileMenu = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <AuthMenu session={session} />
      ) : (
        <Link
          href="/sign-in"
          className="text-neutral-300 duration-100 hover:text-white"
        >
          Sign In
        </Link>
      )}
    </>
  );
};

export default UserProfileMenu;
