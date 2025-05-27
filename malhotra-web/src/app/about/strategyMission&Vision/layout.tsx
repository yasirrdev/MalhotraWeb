import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision  - Malhotra",
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
        {children}
      </body>
    </html>
  );
}
