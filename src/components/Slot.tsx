import { Door } from "./Door";

export const Slot = (props: { price: number }) => {
  const { price } = props;
  return (
    <div className="pb-4 w-60 h-fit rounded-2xl flex flex-col justify-center items-center bg-[#FFDCE6]">
      <div className="w-full h-24 bg-[url('./assets/IMG_2424.JPG')] bg-contain bg-top bg-no-repeat" />
      <Door price={price} />
    </div>
  );
};
