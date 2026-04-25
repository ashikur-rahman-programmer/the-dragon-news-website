import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The Dragon News",
  description:
    "The Dragon News is a news website that provides the latest news and updates on various topics, including politics, sports, entertainment, and more. Our mission is to deliver accurate and unbiased news to our readers, without fear or favour.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`} suppressHydrationWarning>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
