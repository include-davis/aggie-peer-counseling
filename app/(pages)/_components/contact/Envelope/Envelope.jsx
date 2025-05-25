import React, { useEffect, useState } from 'react';
import './Envelope.module.scss';


const Envelope = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Automatically add the flap class after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500); // you can tweak this delay to match the animation timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className={`envelope-wrapper ${open ? 'flap' : ''}`}>
        <div className="envelope">
          <div className="letter">
            <div className="text">
              <strong>Dear Person.</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam labore omnis minus maiores laboriosam, facere in beatae esse.
              </p>
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </div>
  );
};

export default Envelope;