import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products  - Malhotra",
  description: "Explore our range of high-quality cables and wires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="default-class"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
