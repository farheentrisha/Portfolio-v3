import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const useInView = (ref, options = DEFAULT_OPTIONS) => {
  const [inView, setInView] = useState(true);
  const { root = null, rootMargin = "0px", threshold = 0 } = options;

  useEffect(() => {
    if (!ref?.current || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { root, rootMargin, threshold });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold]);

  return inView;
};

export default useInView;
