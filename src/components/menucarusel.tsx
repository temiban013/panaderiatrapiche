import { useState, useEffect } from 'react';
import Panes from '../components/panes';
import Postres from '../components/postres';
import Platos from '../components/platos';

export default function MenuCarousel() {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prevDisplay) => (prevDisplay + 1) % 3);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {display === 0 && <Panes />}
      {display === 1 && <Platos />}
      {display === 2 && <Postres />}
    </>
  );
}