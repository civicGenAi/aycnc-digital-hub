import { Component, useEffect, type ReactNode } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileApplyBar from "@/components/layout/MobileApplyBar";
import NotFoundPage from "@/components/pages/NotFoundPage";
import { Toaster } from "@/components/ui/sonner";

import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import ProgrammePage from "@/routes/programme";
import ApplyPage from "@/routes/apply";
import PartnersPage from "@/routes/partners";
import ImpactPage from "@/routes/impact";
import NewsPage from "@/routes/news";
import ContactPage from "@/routes/contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold text-navy-dark">Something went wrong</h1>
          <p className="mt-2 text-sm text-ink">Please try again or head back home.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-gold px-5 py-2 font-display italic font-semibold text-navy-dark"
            >
              Try again
            </button>
            <Link to="/" className="rounded-full border border-navy/20 px-5 py-2 text-sm text-navy">
              Go home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programme" element={<ProgrammePage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileApplyBar />
      </div>
      <Toaster position="top-center" />
    </ErrorBoundary>
  );
}
