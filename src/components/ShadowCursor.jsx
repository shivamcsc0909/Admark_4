import { useEffect } from 'react';
import initShadowCursor from '../utils/useShadowCursor';

const ShadowCursor = () => {
  useEffect(() => {
    initShadowCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <canvas 
        id="shadow-cursor" 
        className="w-full h-full"
        style={{ 
          display: 'block',
          mixBlendMode: 'exclusion'
        }}
      />
    </div>
  );
};

export default ShadowCursor;