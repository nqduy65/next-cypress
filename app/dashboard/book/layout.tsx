import SideNav from "@/components/dashboard/sivenav";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none">{children}</div>
    </div>
  );
}
