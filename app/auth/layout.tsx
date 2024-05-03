export default function AuthLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full items-center justify-center bg-indigo-300">
      {children}
    </div>
  );
}
