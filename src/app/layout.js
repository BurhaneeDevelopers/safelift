import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import App from "@/components/App/App";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SafeLift",
  description: "Some Description",
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
