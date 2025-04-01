import { useEffect, useRef, useState } from "react";
import { Box } from "./Box";

export const Slot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [price, setPrice] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const stringList = price.toString().split("");

  const handleConfirm = () => {
    setPrice(Number(inputRef.current?.value));
    setCurrentIndex(0);
    inputRef.current!.value = "";
  };

  const handleReset = () => {
    setPrice(0);
    setCurrentIndex(0);
    inputRef.current!.value = "";
  };

  useEffect(() => {
    if (currentIndex > stringList.length || price === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 800);

    return () => clearInterval(interval);
  }, [currentIndex, price, stringList.length]);

  return (
    <>
      <div className="pb-4 w-60 h-fit rounded-2xl flex flex-col justify-center items-center bg-[#FFDCE6]">
        <div className="w-full h-24 bg-[url('./assets/IMG_2424.JPG')] bg-contain bg-top bg-no-repeat" />
        <div className="w-fit h-16 px-2 flex justify-center overflow-hidden bg-white rounded-lg">
          {stringList.map((number, index) => (
            <Box
              key={`${index}-${number}`}
              number={number}
              isTriggered={index <= currentIndex}
            />
          ))}
        </div>
      </div>

      <div className="w-60 flex flex-col gap-2">
        <input
          type="text"
          className="w-full h-8 p-2  bg-white rounded-lg border-2 border-pink-200"
          ref={inputRef}
        />
        <button
          onClick={handleConfirm}
          className="w-full h-8 p-2 bg-pink-300 rounded-lg flex justify-center items-center text-white hover:bg-pink-300 transition-all duration-300"
        >
          確認
        </button>
        <button
          onClick={handleReset}
          className="w-full h-8 p-2 bg-pink-200 rounded-lg flex justify-center items-center text-white hover:bg-pink-300 transition-all duration-300"
        >
          重置
        </button>
      </div>
    </>
  );
};
