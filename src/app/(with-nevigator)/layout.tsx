import Nevigator from "../components/nevigator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Nevigator />
      <body>{children}</body>
      <footer>풋터여</footer>
    </html>
  );
}
