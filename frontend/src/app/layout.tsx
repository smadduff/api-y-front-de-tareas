import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";

export const metadata = {
  title: "Posts App",
  description: "App con Next.js y Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}