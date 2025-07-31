// File: src/components/ScrollToTop.js

import { useLayoutEffect } from 'react'; // 1. useEffect ki jagah useLayoutEffect import karein
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 2. Bas isko useEffect se useLayoutEffect mein badal dein
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}