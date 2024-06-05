import { useState, useEffect } from "react"; 

const UsePopup = (duration) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => {
    setIsVisible(true);
  }

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

    return [isVisible, showPopup]

}

export default UsePopup;