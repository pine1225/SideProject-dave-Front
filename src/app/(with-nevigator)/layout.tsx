import Footer from "../components/footer";
import Nevigator from "../components/nevigator";

export const metadata = {
  title: "데이브 더 다이버",
  description: "데이브 더 다이버 정보 사이트 - 포트폴리오 프로젝트",
};

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
