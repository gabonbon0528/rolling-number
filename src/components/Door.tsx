import { useState, useEffect } from "react";
import { Box } from "./Box";

export const Door = (props: { price: number }) => {
  const { price } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const stringList = price.toString().split("");

  useEffect(() => {
    if (currentIndex >= stringList.length) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, stringList.length]);

  return (
    <div className="w-fit h-16 px-2 flex justify-center overflow-hidden bg-white rounded-lg">
      {stringList.map((number, index) => (
        <Box
          key={`${index}-${number}`}
          number={number}
          isTriggered={index <= currentIndex}
        />
      ))}
    </div>
  );
};
