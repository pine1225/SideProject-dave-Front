import Nevigator from "../components/nevigator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>헤더여</header>
      <Nevigator />
      <body>{children}</body>
      <footer>풋터여</footer>
    </html>
  );
}
