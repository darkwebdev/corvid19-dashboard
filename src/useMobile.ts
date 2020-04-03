import { useEffect, useState } from 'react';

const useMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    setMobile(window.matchMedia('(max-width: 640px)').matches)
      // window.addEventListener('resize', 'orientationchange', ???)
  });

  return isMobile;
};

export default useMobile;
