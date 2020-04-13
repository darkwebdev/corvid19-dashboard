import { useEffect, useState } from 'react';
import { mobileMaxWidth } from '../const';

const useMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    setMobile(window.matchMedia(`(max-width: ${mobileMaxWidth}px)`).matches)
      // window.addEventListener('resize', 'orientationchange', ???)
  });

  return isMobile;
};

export default useMobile;
