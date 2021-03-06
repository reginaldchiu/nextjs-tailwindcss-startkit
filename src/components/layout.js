import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />

    <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
