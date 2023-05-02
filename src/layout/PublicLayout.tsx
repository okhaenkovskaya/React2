import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/index.css";

interface PublicLayoutProps {
  children?: React.ReactNode | null;
}

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="page-wrapper">
      <Header />

      {children ?? <Outlet />}

      <Footer />
    </div>
  );
}

PublicLayout.defaultProps = {
  children: null,
};

export default PublicLayout;
