import React, { useState, useEffect } from "react";
import './Body.css'

export function Body(){
    const [value, setValue] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const addValue = () => {
    setValue(value + 1);
    setShowGif(true);
    setIsReversed(false); 
  };

  const substractValue = () => {
    if (value > 0) {
      setValue(value - 1);
      setShowGif(true);
      setIsReversed(true); 
    }
  };

  useEffect(() => {
    if (showGif) {
      const timer = setTimeout(() => {
        setShowGif(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showGif]);

  return (
    <>
      <p>{value}</p>
      {
        showGif 
        ? (
          <img
            src={
              isReversed
                ? "https://mhall16.uneportfolio.org/wp-content/uploads/sites/168/2017/06/ezgif.com-reverse.gif"
                : "https://media0.giphy.com/media/gFP6NLJdiePZ60QtLN/200w.gif"
            }
            alt="gif"
          />
        )
        : null
      }
      <div className="buttons-cont">
        <button className="substract-button" onClick={substractValue} text="-" bgColor="green">-</button>
        <button className='add-button' onClick={addValue} text="+" bgColor="red">+</button>
      </div>
    </>
  );
}