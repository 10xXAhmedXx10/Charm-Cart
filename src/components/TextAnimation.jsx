import React, { useEffect, useState } from "react";

const TextAnimation = () => {
  const fullText = `Let's be honest sometimes going to the gym can be annoying. Maybe you can't find the time, maybe the distance, maybe the weather, so here's a solution: why don't we make the gym come to you?
  
  with CharmCart you can browse a huge collection of gym equipment with great prices and convenient shipping times.`;
  
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [currentIndex, fullText]);

  return <div className="exercise-text"><p>{text}</p></div>;
};

export default TextAnimation;
