import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function RoutingScrollReset() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser automatic scroll restoration on route changes
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Instantly reset scroll to top before browser paint without scrolling animation
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
