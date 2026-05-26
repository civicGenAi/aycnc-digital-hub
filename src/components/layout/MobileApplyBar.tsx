import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function MobileApplyBar() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (location.pathname === "/apply") return null;
  if (!show) return null;

  return (
    <Link
      to="/apply"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-gold text-navy-dark py-4 text-center font-display italic font-semibold shadow-[0_-8px_24px_rgba(0,0,0,0.2)]"
    >
      Apply for Cohort 1 →
    </Link>
  );
}
