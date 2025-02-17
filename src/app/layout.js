import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import App from "@/components/App/App";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Material Handling Equipment Manufacturers & Supplier | Safelift",
  description:
    "Safelift leading as premium material handling equipment manufacturers & supplier in India. We offers quality material handling products like hoisting, lifting, slings, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
