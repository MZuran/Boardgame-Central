import React, { useEffect, useState } from 'react';

const FocusTracker = () => {
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    // Attach event listeners
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return isFocused;
};

export default FocusTracker;