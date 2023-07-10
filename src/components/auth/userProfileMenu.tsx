import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

const UserProfileMenu = async () => {
  const session = await getServerSession(authOptions);
  return <>hello <pre>{JSON.stringify(session, null, 2)}</pre></>;
};

export default UserProfileMenu;
