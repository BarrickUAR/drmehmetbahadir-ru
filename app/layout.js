import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import WhatsappIcon from "@/components/WhatsappIcon";
import Popup from "@/components/Popup";
import ScrollToTop from "@/components/ScrollToTop";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Dr. Mehmet İlteber Bahadır",
  description: "Клиника лечения псориаза и кожных заболеваний",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body className={`${lora.variable} flex flex-col min-h-screen`}>
        <Popup />
        <ScrollToTop />
        <Topbar />
        <WhatsappIcon />
        <Navbar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
