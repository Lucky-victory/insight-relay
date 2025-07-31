import { PublicRoute } from "@/components/auth/public-route";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicRoute>{children}</PublicRoute>;
}