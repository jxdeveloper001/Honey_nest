import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honey Nest — প্রকৃতির সেরা দান, খাঁটি মধু",
  description:
    "Honey Nest — শতভাগ খাঁটি, কাঁচা ও প্রাকৃতিক লোকাল হারভেস্ট মধু। কোনো প্রিজারভেটিভ ছাড়া মৌচাকের আসল স্বাদ। সারাদেশে ক্যাশ অন ডেলিভারি।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8F0E2] font-sans text-[#382719] antialiased selection:bg-[#E8D3AD] selection:text-[#382719]">
        {children}
      </body>
    </html>
  );
}
