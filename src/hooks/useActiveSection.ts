'use client';

import { useState, useEffect } from 'react';

const useActiveSection = (): number | null => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-order]');
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      let isActiveSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;

        if (viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) {
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
