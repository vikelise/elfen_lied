"use client";
import { useRouter } from "next/navigation";
import Auth from "@/components/auth/Auth";

export default function RegisterPage() {
  const router = useRouter();
  return <Auth close={() => router.back()} defaultRegistration />;
}
