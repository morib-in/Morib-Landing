'use client';

import { useState, useEffect } from 'react';

const useActiveSection = (): number | null => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-order]');
      const viewportMiddle = window.innerHeight / 2;

      let isActiveSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          const index = parseInt(section.getAttribute('data-order') || '0', 10);
          setActiveSection(index);
          isActiveSection = true;
        }
      });

      if (!isActiveSection) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
