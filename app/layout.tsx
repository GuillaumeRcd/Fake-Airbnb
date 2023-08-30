import { Nunito } from "next/font/google";

import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/navbar/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata = {
  title: "Airbnb",
  
  description: "Airbnb clone",
};

const font = Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <RegisterModal/>
        <NavBar/>
      </ClientOnly>
        {children}
        </body>
    </html>
  );
}
