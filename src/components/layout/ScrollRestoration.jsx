import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // SECTION SCROLL
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // PAGE CHANGE → INSTANT TOP
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollRestoration;