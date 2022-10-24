import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
interface Props {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />

      <div className="relative top-20 h-96">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
