import { useEffect } from 'react';

const useKonamiCode = (onMatch) => {
  useEffect(() => {
    const sequence = ['ArrowUp','ArrowDown','ArrowUp'];
    let index = 0;

    const handler = (e) => {
      if (e.key === sequence[index]) {
        index++;
        if (index === sequence.length) {
          onMatch();
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onMatch]);
};

export default useKonamiCode;
