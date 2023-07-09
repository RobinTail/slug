import { HomeContainer } from "@/components/container";
import { Title, Paragraph } from "@/components/text";
import BlurBackground from "@/components/blurBackground";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ExternalLink, Link } from "@/ui/link";
import { buttonVariants } from "@/ui/button";
import { Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <BlurBackground>
        <Title className="mt-30 mb-4">Open Source Link Shortener</Title>
        <Paragraph className="text-neutral-400">
          Slug is an open source link shortener that combines simplicity, speed,
          organization and privacy for your links.
        </Paragraph>
      </BlurBackground>
      <div className="flex items-center space-x-3">
        <ExternalLink
          href="https://github.com/pheralb/slug"
          className={buttonVariants({ variant: "secondary" })}
          externalIcon={true}
          disableUnderline={true}
        >
          <div className="flex items-center space-x-1">
            <Star className="h-4 text-yellow-300" />
            <span>Star us on GitHub</span>
          </div>
        </ExternalLink>
        <Link href="/login" className={buttonVariants({ variant: "primary" })}>
          <div className="flex items-center space-x-1">
            <span>Go to Dashboard</span>
            <ArrowRight className="h-4" />
          </div>
        </Link>
      </div>
      <Footer />
    </HomeContainer>
  );
}
