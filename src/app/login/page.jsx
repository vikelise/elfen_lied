"use client";
import { useRouter } from "next/navigation";
import Auth from "@/components/auth/Auth";

export default function LoginPage() {
  const router = useRouter();
  return <Auth close={() => router.back()} />;
}
