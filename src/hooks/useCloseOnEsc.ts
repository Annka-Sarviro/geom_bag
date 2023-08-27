import { useEffect, useCallback } from 'react';

export function useCloseOnEsc(onCloseFunc: () => void) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onCloseFunc();
      }
    },
    [onCloseFunc],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, onCloseFunc]);
}
