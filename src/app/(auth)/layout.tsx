export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-xl font-bold">Auth Layout</h1>
      <div>
        {children}
      </div>
    </>
  );
}
