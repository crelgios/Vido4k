import PremiumUnlock from "../../components/PremiumUnlock";

export const metadata = {
  title: "Premium Unlock",
  description: "Select a category, enter a website name, and check current premium unlock availability.",
  alternates: {
    canonical: "/premium-unlock"
  },
  openGraph: {
    title: "Premium Unlock | Vido4K",
    description: "Select a category, enter a website name, and check current premium unlock availability.",
    url: "/premium-unlock"
  }
};

export default function PremiumUnlockPage() {
  return <PremiumUnlock />;
}
