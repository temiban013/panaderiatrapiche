'use client'

import { useState, useEffect } from 'react';
import Panes from '../components/panes';
import Postres from '../components/postres';

export default function MenuCarousel() {
  const [showPanes, setShowPanes] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPanes((prevShowPanes) => !prevShowPanes);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showPanes ? <Panes /> : <Postres />}
    </>
  );
}