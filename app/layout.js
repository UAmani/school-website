import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
          <main>
    {children}
  </main>

  <Footer />
      </body>
    </html>
  );
}