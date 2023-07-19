import { useState, useEffect } from 'react';
import splash1 from './../assets/images/splash1.png';
import splash2 from './../assets/images/splash2.png';
import splash3 from './../assets/images/splash3.png';
import splash4 from './../assets/images/splash4.png';
import splash5 from './../assets/images/splash5.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
export const SplashScreen = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <div className="fixed overflow-hidden top-0 flex items-center justify-center w-screen h-screen bg-[#232323] z-20">
        <h1 className="font-bold text-white text-8xl">IDERI</h1>

        <div className="absolute z-[999] top-40 left-20">
          <Image src={splash1} alt="" className="" />
        </div>

        <div className="absolute z-[999] bottom-20 left-80">
          <Image src={splash2} alt="" className="absolute" />
        </div>
        <div className="absolute z-[999] bottom-20 right-96">
          <Image src={splash3} alt="" className="absolute" />
        </div>
        <div className="absolute z-[999] right-40 top-20">
          <Image src={splash4} alt="" className="absolute" />
        </div>
        <div className="absolute z-[999]  top-20">
          <Image src={splash5} alt="" className="absolute" />
        </div>
      </div>
    </motion.div>
  );
};
