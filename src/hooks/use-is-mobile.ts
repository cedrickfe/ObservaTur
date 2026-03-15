'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const updateState = () => setIsMobile(query.matches);

    updateState();
    query.addEventListener('change', updateState);

    return () => query.removeEventListener('change', updateState);
  }, []);

  return isMobile;
}
