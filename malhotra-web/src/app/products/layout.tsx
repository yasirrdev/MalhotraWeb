import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
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
