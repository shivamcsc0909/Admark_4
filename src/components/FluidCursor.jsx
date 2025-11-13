import { useEffect, useRef } from 'react';
import initFluidCursor from '../utils/fluidCursor';

const FluidCursor = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    
    const canvas = document.getElementById('fluid-cursor');
    if (!canvas) {
      console.error('Fluid cursor canvas not found!');
      return;
    }

    try {
      initFluidCursor();
      initialized.current = true;
    } catch (error) {
      console.error('Fluid cursor initialization failed:', error);
    }

    return () => {
      initialized.current = false;
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <canvas 
        id="fluid-cursor" 
        className="w-full h-full"
        style={{ 
          display: 'block',
          mixBlendMode: 'difference'
        }}
      />
    </div>
  );
};

export default FluidCursor;