'use client';
import { useEffect } from 'react';

export const HeaderScripts = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollThreshold = 80;
    const bodyElement = document.body;
    const headerElement = document.getElementById('header');

    if (!bodyElement) {
      console.error('Body element not found');
      return;
    }

    if (!headerElement) {
      console.error('Header element not found');
      return;
    }

    const handleScroll = () => {
      const scrollTop = bodyElement.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > scrollThreshold) {
        headerElement.classList.add('transparent-background');
      } else {
        headerElement.classList.remove('transparent-background');
      }

      if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
          headerElement.classList.remove('visible');
          headerElement.classList.add('no-visible');
        } else {
          headerElement.classList.remove('no-visible');
          headerElement.classList.add('visible');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    bodyElement.addEventListener('scroll', handleScroll);

    return () => {
      bodyElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="visually-hidden"></div>;
};
