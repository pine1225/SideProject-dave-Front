import Footer from "../components/footer";
import Nevigator from "../components/nevigator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nevigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
