import { ExternalLink } from "@/ui/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2 py-2">
      <h1>✨ Coming Soon</h1>
      <ExternalLink
        href="https://github.com/pheralb/slug/tree/next"
        externalIcon={true}
      >
        Status
      </ExternalLink>
    </div>
  );
}
