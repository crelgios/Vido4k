import PremiumUnlock from "../../components/PremiumUnlock";

export const metadata = {
  title: "Premium Unlock",
  description: "Generate a Vido4K premium unlock request and check current access availability.",
  alternates: {
    canonical: "/premium-unlock"
  },
  openGraph: {
    title: "Premium Unlock | Vido4K",
    description: "Generate a Vido4K premium unlock request and check current access availability.",
    url: "/premium-unlock"
  }
};

export default function PremiumUnlockPage() {
  return <PremiumUnlock />;
}
