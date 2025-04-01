export const Box = (props: { number: string; isTriggered: boolean }) => {
  const { number, isTriggered } = props;
  
  const numbers = Array.from({ length: 10 }, (_, i) => 
    ((parseInt(number) + i) % 10).toString()
  ).reverse();

  return (
    <div
      className={`flex flex-col h-fit transition-all duration-500 ${
        isTriggered ? "animate-stopping-playing" : "animate-playing"
      }`}
    >
      {numbers.map((num, index) => (
        <div key={`${num}-${index}`} className="text-5xl py-2">
          {num}
        </div>
      ))}
    </div>
  );
};
