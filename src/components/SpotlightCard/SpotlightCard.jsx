import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(147, 141, 171, 0.3)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  const handleMouseLeave = () => {
    if (!divRef.current) return;
    divRef.current.style.setProperty('--mouse-x', '50%');
    divRef.current.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div 
      ref={divRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
