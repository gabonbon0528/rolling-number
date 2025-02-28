export const Box = (props: { number: string; isTriggered: boolean }) => {
  const { number, isTriggered } = props;

  const numbers: string[] = [number];
  for (let i = 0; i < 9; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.unshift(randomNumber.toString());
  }

  return (
    <div
      className={`flex flex-col h-fit ${
        isTriggered ? "animate-stopping-playing" : "animate-playing"
      }`}
    >
      {numbers.map((number, index) => (
        <div key={number + index} className="text-5xl py-2">
          {number}
        </div>
      ))}
    </div>
  );
};
