import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Soria JMI Logistica",
  description:
    "Somos una empresa familiar de transporte, logística y distribución, ubicada en el Norte de Argentina, dedicada al traslado de todo tipo de mercadería para empresas, pymes y particulares de distintos rubros.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivo.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
