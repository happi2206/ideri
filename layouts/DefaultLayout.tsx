import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image from './../assets/images/Rectangle.png';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <Navigation />

      <div className="pb-56 ">
        <>
          <div className="fixed top-0 bottom-0 left-0 right-0 z-0 w-full h-full">
            <Image
              src={image}
              alt="background hash "
              className="object-cover"
            />
          </div>

          <div className="relative z-20">{children}</div>
        </>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DefaultLayout;
