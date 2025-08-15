import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrollingup = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" for instant scroll
    });
  }, [pathname]);

  return null;
};

export default Scrollingup;