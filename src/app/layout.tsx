import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JD Consultores | Growth Partner",
  description:
    "Ayudamos a empresas a aumentar su facturación mediante estrategias de marketing, sistemas de ventas, IA y persuasión.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="dark">
      <body
        className={clsx(montserrat.variable, poppins.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
