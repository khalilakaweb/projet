import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Small delay so scroll restoration happens first
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      AOS.init({ duration: 1000, once: true });
      AOS.refresh();
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
