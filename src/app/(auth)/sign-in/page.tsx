import SignInForm from "@/components/auth/signInForm";
import Footer from "@/components/footer";
import GridBackground from "@/components/gridBackground";

const Page = () => {
  return (
    <GridBackground>
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center">
          <SignInForm />
        </div>
      </div>
      <Footer />
    </GridBackground>
  );
};

export default Page;
