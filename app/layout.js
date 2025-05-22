import "../styles/globals.css";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Др. Мехмет Илтебер Бахадир",
  description:
    "Клиника в Стамбуле, специализирующаяся на лечении псориаза, экземы и ревматических заболеваний. Индивидуальный подход, проверенные натуральные методы и забота о каждом пациенте.",
  keywords: [
    "псориаз лечение",
    "экзема",
    "ревматизм",
    "клиника Стамбул",
    "натуральное лечение кожи",
    "дерматология Турция",
    "Dr. Mehmet Ilteber Bahadır",
  ],
  openGraph: {
    title: "Др. Мехмет Илтебер Бахадир — Клиника лечения псориаза и экземы",
    description:
      "Эффективное лечение псориаза, экземы и ревматических заболеваний без кортизона. Расположено в Стамбуле.",
    url: "https://www.sitenizinadi.ru",
    siteName: "Dr. Mehmet Ilteber Bahadır",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://www.sitenizinadi.ru/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Клиника лечения кожных заболеваний в Стамбуле",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Др. Мехмет Илтебер Бахадир — Лечение кожных заболеваний",
    description:
      "Клиника в Стамбуле. Эффективные методы лечения псориаза и экземы без химии.",
    images: ["https://www.sitenizinadi.ru/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="icon" href="/favicon.png" type="image/png" />{" "}
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
