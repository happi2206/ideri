import { useState, useEffect } from 'react';

export const SplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return showSplashScreen ? (
    <div className="fixed overflow-hidden top-0 flex items-center justify-center w-screen h-screen bg-[#232323] z-20">
      <h1 className="font-bold text-white text-8xl">IDERI</h1>
    </div>
  ) : null;
};
