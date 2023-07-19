import React, { useEffect, useState } from 'react';
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

      <div className="relative top-20 h-96">{children}</div>
      <Footer />
    </motion.div>
  );
};

export default DefaultLayout;
