"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href, name }: BackButtonProps) {
  return (
    <Button
      variant="link"
      className={name + " back-button font-normal w-full"}
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
