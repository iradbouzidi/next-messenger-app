import "./globals.css";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import ActiveStatus from "./components/ActiveStatus";

export const metadata = {
  title: "Messenger Clone App",
  description: "Messenger Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
