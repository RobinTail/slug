import { Link } from "@/ui/link";
import Logo from "../logo";
import ProviderForm from "./providerForm";

const SignInForm = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[480px]">
      <div className="flex flex-col space-y-3 text-center">
        <Link href="/">
          <Logo className="mx-auto h-12 w-12 hover:-translate-y-0.5 transition-transform duration-200" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Welcome</h1>
        <p className="text-sm">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
        <ProviderForm />
      </div>
    </div>
  );
};

export default SignInForm;
